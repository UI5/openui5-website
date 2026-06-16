'use strict';

const { createApp } = Vue;

// ========================
// Constants
// ========================
const MOBILE_BREAKPOINT = 780;
const DEBOUNCE_DELAY = 150;
const EVENT_DATE = "2026-07-14";
const EVENT_TIMEZONE = "+02:00";
const EVENT_TITLE_PREFIX = "ui5con: ";
const ICS_PRODID = "-//ui5con Conference//ui5con.cfapps.eu12.hana.ondemand.com//EN";

const API_BASE_URL = "https://ui5con.cfapps.eu12.hana.ondemand.com/api";
const API_ENDPOINTS = {
  speakerLineup: `${API_BASE_URL}/speaker/lineup`,
  proposalLineup: `${API_BASE_URL}/proposal/lineup`,
};

// Cached regex for calendar text sanitization
const FORBIDDEN_CHARS_REGEX = /#/g;

// Pattern to identify break/catering sessions
const BREAK_SESSION_PATTERN = /break|lunch|coffee|catering/i;

// Session type identifiers
const SESSION_TYPES = {
  PRESENTATION: "presentation",
  HANDS_ON: "hands",
  EXPERT_CORNER: "expert",
  PITCH: "pitch",
};

// Session-specific constants
const CANTEEN_LOCATION = "canteen";

// Social media configuration
const SOCIAL_PLATFORMS = {
  twitter: { prefix: "https://twitter.com/" },
  linkedin: { prefix: "https://www.linkedin.com/in/" },
  github: { 
    prefix: "https://github.com/",
    transform: (handle) => {
      // Strip "github.com/" if it's already in the handle
      return handle.replace(/^github\.com\//, "");
    }
  },
  mastodon: { 
    prefix: "https://saptodon.org/",
    transform: (handle) => {
      if (handle.includes("@saptodon.org")) {
        return handle.replace("@saptodon.org", "");
      }
      return handle;
    }
  },
  bluesky: { 
    prefix: "https://bsky.app/profile/",
    transform: (handle) => handle.replace("@", "")
  },
};

// Location mapping configuration
const LOCATION_CONFIG = [
  { match: "audimax", full: "Audimax", short: "A", calendar: "Audimax" },
  { match: "w1", full: "W1/W2", short: "W2", calendar: "Room W1/W2" },
  { match: "w2", full: "W1/W2", short: "W2", calendar: "Room W1/W2" },
  { match: "w3", full: "W3", short: "W3", calendar: "Room W3" },
  { match: "expert", full: "Expert Corner", short: "EXP", calendar: "Expert Corner" },
  { match: "canteen", full: "Canteen", short: "CAN", calendar: "Canteen" },
];

// ========================
// Utility Functions
// ========================

// Reusable HTML decoder using DOMParser for better performance
const htmlDecoder = new DOMParser();
// Decodes HTML entities in a string
function decodeHtmlEntities(html) {
  if (!html || typeof html !== "string") return "";
  const doc = htmlDecoder.parseFromString(html, "text/html");
  return doc.documentElement.textContent || "";
}

// Delays function execution until after a pause in calls
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Traps focus within a modal by finding all focusable elements automatically
function handleFocusTrap($event, modalElement) {
  // Query for all naturally focusable elements within the modal
  const focusableElements = modalElement.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // Always prevent default to trap focus within modal
  $event.preventDefault();

  // Tab forward from last element: wrap to first
  if (!$event.shiftKey && document.activeElement === lastElement) {
    firstElement.focus();
    return;
  }

  // Tab backward from first element: wrap to last
  if ($event.shiftKey && document.activeElement === firstElement) {
    lastElement.focus();
    return;
  }

  // Otherwise, move focus naturally within the modal
  const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
  if (currentIndex === -1) {
    // If current element not in list, focus the first element
    firstElement.focus();
    return;
  }

  // Move to next or previous focusable element
  if ($event.shiftKey) {
    focusableElements[currentIndex - 1].focus();
  } else {
    focusableElements[currentIndex + 1].focus();
  }
}

// Converts social media handles to full URLs
function formatSocialLink(handle, platform) {
  // Return if empty or already a complete URL
  if (!handle || typeof handle !== 'string') return handle;

  // Trim whitespace
  const trimmedHandle = handle.trim();

  // Check if already a complete URL
  if (trimmedHandle.startsWith("https://") || trimmedHandle.startsWith("http://")) {
    return trimmedHandle;
  }

  const config = SOCIAL_PLATFORMS[platform];
  if (!config) return trimmedHandle;

  const transformedHandle = config.transform ? config.transform(trimmedHandle) : trimmedHandle;
  return config.prefix + transformedHandle;
}

// Finds location configuration based on location name
function getLocationInfo(value) {
  if (!value || typeof value !== "string") return null;
  const lower = value.toLowerCase();
  return LOCATION_CONFIG.find((loc) => lower.includes(loc.match)) || null;
}

// Returns the calendar-friendly name for a location
function getCalendarLocationName(location) {
  const info = getLocationInfo(location);
  return info ? info.calendar : (location || "");
}

// Sanitizes text for calendar entry titles and descriptions
function sanitizeTextForCalendar(text) {
  if (typeof text !== "string") return "";
  return text.replace(/(&amp;|&)/g, " and ").replace(FORBIDDEN_CHARS_REGEX, "");
}

// Sanitizes text for ICS calendar file format
function sanitizeTextForICS(text) {
  if (typeof text !== "string") return "";
  let result = text.replace(/(?:\r\n|\r|\n)/g, "\\n");
  result = result.replace(/<br>/g, "\\n");
  result = result.replace(/(&amp;|&)/g, " and ");
  return result.replace(FORBIDDEN_CHARS_REGEX, "");
}

// Adds leading zero to single-digit hours in time strings
function padTimeComponent(time) {
  const hours = time.substring(0, time.indexOf(":"));
  if (hours.length === 1 && !hours.startsWith("0")) {
    return `0${time}`;
  }
  return time;
}

// Builds a Google Calendar add event URL
function buildGoogleCalendarUrl(title, dates, location, description) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: dates,
    location: location,
    details: description,
    sprop: "name:",
  });
  return `https://www.google.com/calendar/render?${params}`;
}

// Builds an Outlook/Office 365 add event URL
function buildOutlookUrl(title, startDate, endDate, location, description) {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: startDate,
    enddt: endDate,
    location: location,
    body: description,
  });
  return `https://outlook.office365.com/owa/?${params}`;
}

// Generates ICS calendar file content
function buildIcsContent(session, calendarStartDate, calendarEndDate, location) {
  const dtstamp = new Date().toISOString().replace(/-|:|\.\d+/g, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:${ICS_PRODID}`,
    "BEGIN:VEVENT",
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${calendarStartDate}`,
    `DTEND:${calendarEndDate}`,
    `SUMMARY:${EVENT_TITLE_PREFIX}${sanitizeTextForICS(session.title)}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${sanitizeTextForICS(session.description)}`,
    `UID:${session.id}@ui5con.cfapps.eu12.hana.ondemand.com`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

// Creates calendar links object for Google, Outlook, and ICS formats
function buildCalendarLinks(session, calendarDates, calDescription) {
  const { calendarStartDate, calendarEndDate, officeStartDate, officeEndDate } = calendarDates;
  const location = getCalendarLocationName(session.location);

  // Cache sanitized values (used multiple times)
  const sanitizedTitle = EVENT_TITLE_PREFIX + sanitizeTextForCalendar(session.title);
  const sanitizedDescription = sanitizeTextForCalendar(calDescription);
  const dates = `${calendarStartDate}/${calendarEndDate}`;

  return {
    google: buildGoogleCalendarUrl(sanitizedTitle, dates, location, sanitizedDescription),
    office365: buildOutlookUrl(sanitizedTitle, officeStartDate, officeEndDate, location, sanitizedDescription),
    ics: `data:text/calendar;charset=utf8,${encodeURIComponent(buildIcsContent(session, calendarStartDate, calendarEndDate, location))}`,
  };
}

// SECTIONS

const nav = createApp({
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  computed: {
    showMobileNav: function () {
      if (this.windowWidth < 780) {
        return true;
      } else {
        return false;
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
  }
});

// Register components and mount nav app
nav.component('nav-section', window.NavSectionComponent);
nav.component('nav-section-mobile', window.NavSectionMobileComponent);
nav.mount('#nav');

const header = createApp({
  data() {
    return {
      showCalendars: false
    };
  },
  mounted() {},
  methods: {
    toggleCalendars() {
      this.showCalendars = !this.showCalendars;
      const container = document.getElementById('links-container');
      if (container) {
        if (this.showCalendars) {
          container.classList.remove('links-container--hidden');
          container.classList.add('links-container--visible');
        } else {
          container.classList.remove('links-container--visible');
          container.classList.add('links-container--hidden');
        }
      }
    }
  }
});
// Only mount header app if element exists
if (document.getElementById('header')) {
  header.mount('#header');
}

const main = createApp({
  compilerOptions: {
    isCustomElement: tag => tag === 'tito-widget'
  },
  data() {
   return {
    team: [

      {
        name: 'Fabian Tempel',
        location: 'Lead, Website',
        image: 'images/team/fabian-tempel.jpg'
      },
      {
        name: 'Felix Schubert',
        location: 'Lead, Facility, Program',
        image: 'images/team/felix-schubert.jpg'
      },
      {
        name: 'Inna Atanasova',
        location: 'Website',
        image: 'images/team/Inna.jpg'
      },
      {
        name: 'Andreas Kunz',
        location: 'Program',
        image: 'images/team/andreas-kunz.jpg'
      },
      {
        name: 'Nikolay Kolarov',
        location: 'Tech Setup',
        image: 'images/team/nikolay-kolarov.jpg'
      },
      {
        name: 'Benedikt Schoelch',
        location: 'Sponsorship',
        image: 'images/team/benedikt-schoelch.jpg'
      },
      {
        name: 'Judith Schneider',
        location: 'Design',
        image: 'images/team/judith-schneider.jpg'
      },
      {
        name: 'Jacky Dittkowski',
        location: 'Design, Facility',
        image: 'images/team/jacky.jpg'
      },
      {
        name: 'Teresa Vogelbacher',
        location: 'Event Management, Design',
        image: 'images/team/teresa-vogelbacher.jpg'
      },
      {
        name: 'Rachel LaSpada',
        location: 'Design',
        image: 'images/team/rachel-laspada.jpg'
      },
      {
        name: 'Dorota Josenhans',
        location: 'Facility',
        image: 'images/team/dorota-josenhans.jpg'
      },
      {
        name: 'Daniel Nowak',
        location: 'Program, Facility',
        image: 'images/team/daniel-nowak.jpg'
      },
      {
        name: 'Angelika Kirilin',
        location: 'Facility',
        image: 'images/team/angelika-kirilin.jpg'
      },
      {
        name: 'Arthur Trauter',
        location: 'Tech Setup',
        image: 'images/team/arthur-trauter.jpg'
      },
      {
        name: 'Alexander Rauh',
        location: 'Tech Setup',
        image: 'images/team/alex-rauh.jpg'
      },
      {
        name: 'Michael Zadikowitsch',
        location: 'Tech Setup',
        image: 'images/team/michael-zadikowitsch.jpg'
      },
      {
        name: 'Dina Glatzel',
        location: 'Facility',
        image: 'images/team/dina-glatzel.jpg'
      },
      {
        name: 'Claudia May',
        location: 'Facility',
        image: 'images/team/claudia-may.jpg'
      },
      {
        name: 'Thorsten Hochreuter',
        location: 'Facility, Programm',
        image: 'images/team/thorsten-hochreuter.jpg'
      },
      {
        name: 'Duc Vo Ngoc',
        location: 'Communications, Program',
        image: 'images/team/duc-vo-ngoc.jpg'
      },
      {
        name: "Klaudia Laag",
        location: "Moderator",
        image: "images/committee/klaudia-laag.jpg",
      },
      {
        name: "Danielle Lyle",
        location: "Tech Setup",
        image: "images/team/danielle-lyle.jpg",
      },
      {
        name: "Jorg Thuijls",
        location: "Moderator",
        image: "images/team/jorg-thuijls.jpg",
      },
      {
        name: "Sven Bender",
        location: "Facility",
        image: "images/team/sven-bender.jpg",
      },
      {
        name: "Michael Sobczak",
        location: "Facility",
        image: "images/team/michael-sobczak.jpg",
      },
      // {
      //   name: 'Jennifer Klar',
      //   location: 'Communications, Facility',
      //   image: 'images/team/jennifer-klar.jpg'
      // },
      // {
      //   name: 'Benedikt Schoelch',
      //   location: 'Sponsorship',
      //   image: 'images/team/benedikt-schoelch.jpg'
      // },
      // {
      //   name: 'Judith Schneider',
      //   location: 'Design',
      //   image: 'images/team/judith-schneider.jpg'
      // },
      // {
      //   name: 'Jacky Dittkowski',
      //   location: 'Design, Facility',
      //   image: 'images/team/jacky.jpg'
      // },
      // {
      //   name: 'Dorota Josenhans',
      //   location: 'Facility',
      //   image: 'images/team/dorota-josenhans.png'
      // },
      // {
      //   name: 'Angelika Kirilin',
      //   location: 'Facility',
      //   image: 'images/team/angelika-kirilin.jpg'
      // },
      // {
      //   name: 'Jan Mummenthaler',
      //   location: 'Facility',
      //   image: 'images/team/jan-mummenthaler.webp'
      // },
      // {
      //   name: 'Katja Zoch',
      //   location: 'Facility',
      //   image: 'images/team/katja-zoch.jpg'
      // },
      // {
      //   name: 'Teresa Vogelbacher',
      //   location: 'Event Management',
      //   image: 'images/team/teresa-vogelbacher.jpg'
      // },
      // {
      //   name: 'Dina Glatzel',
      //   location: 'Facility',
      //   image: 'images/team/dina-glatzel.jpg'
      // },
      // {
      //   name: 'Arthur Trauter',
      //   location: 'Tech Setup',
      //   image: 'images/team/arthur-trauter.jpg'
      // },
      // {
      //   name: 'Alexander Rauh',
      //   location: 'Tech Setup',
      //   image: 'images/team/alex-rauh.jpg'
      // },
      // {
      //   name: 'Tillman Swinke',
      //   location: 'Tech Setup',
      //   image: 'images/team/tillman-swinke.jpg'
      // },
      // {
      //   name: 'Michael Zadikowitsch',
      //   location: 'Tech Setup',
      //   image: 'images/team/michael-zadikowitsch.jpg'
      // },
    ],
    committee: [
      {
        name: "Klaudia Laag",
        role: "UNIORG",
        image: "images/committee/klaudia-laag.jpg",
      },
      {
        name: "Marco Beier",
        role: "Accenture",
        image: "images/committee/marco-beier.jpg",
      },
      {
        name: "Robin van het Hof",
        role: "Qualiture",
        image: "images/committee/robin-van-het-hof.jpg",
      },
      {
        name: "Mauricio Lauffer",
        role: "SAP",
        image: "images/committee/mauricio-lauffer.jpg",
      },
      {
        name: "Juliane Dombrowski",
        role: "U-NIQ GmbH",
        image: "images/committee/juliane-dombrowski.jpg",
      },
      {
        name: "Marten Schiwek",
        role: "SAP",
        image: "images/committee/marten-schiwek.jpg",
      },
      {
        name: "Evgeni Katsarski",
        role: "NTT DATA Business Solutions",
        image: "images/committee/evgeni-katsarski.jpg",
      },
      {
        name: "Stefan Beck",
        role: "SAP",
        image: "images/committee/stefan-beck.jpg",
      },
      {
        name: "Yavor Ivanov",
        role: "SAP",
        image: "images/committee/yavor-ivanov.jpg",
      },
    ],
    activeSpeakers: null,
    lastFocussedElementID: "",
    speakers: [],
    filter: "all",
    lineup: [],
    formattedLineup: [],
    formattedSpeakers: [],
    activeSession: null,
    agendaViewMode: "grid", // 'grid' or 'linear'
    apiError: null, // Track API loading errors
    isLoading: true, // Track loading state
   }
  },
  async mounted() {
   // Fetch both APIs in parallel
    const [speakerResult, proposalResult] = await Promise.allSettled([
      fetch(API_ENDPOINTS.speakerLineup).then(r => r.json()),
      fetch(API_ENDPOINTS.proposalLineup).then(r => r.json()),
    ]);

    const errors = [];

    if (speakerResult.status === 'fulfilled') {
      this.speakers = speakerResult.value;
    } else {
      console.error('Failed to fetch speaker lineup:', speakerResult.reason);
      errors.push('Failed to load speaker data');
      this.speakers = [];
    }

    if (proposalResult.status === 'fulfilled') {
      this.lineup = proposalResult.value;
    } else {
      console.error('Failed to fetch proposal lineup:', proposalResult.reason);
      errors.push('Failed to load session data');
      this.lineup = [];
    }

    // Set error state if any API calls failed
    if (errors.length > 0) {
      this.apiError = errors.join('. ');
    }

    this.formattedLineup = this.formatLineup();

    this.formattedSpeakers = this.formatSpeakers(this.formattedLineup, this.speakers);

    this.isLoading = false;

    // Update live session status
    this.updateLiveSession();

    // Start interval timer for live session updates
    let interval;
    let timeNow = new Date().toISOString();

    const startCounterTime = new Date(
      `${EVENT_DATE}T02:00:00.000${EVENT_TIMEZONE}`
    ).toISOString();

    const endCounterTime = new Date(
      `${EVENT_DATE}T19:00:00.000${EVENT_TIMEZONE}`
    ).toISOString();

    if (timeNow > startCounterTime && timeNow <= endCounterTime) {
      interval = setInterval(() => {
        timeNow = new Date().toISOString();
        if (timeNow > endCounterTime) {
          clearInterval(interval);
          return;
        }
        this.updateLiveSession();
      }, 60000);
    }

    // Register this Vue instance with DebugAgenda if it exists
    if (window.DebugAgenda) {
      window.DebugAgenda._appInstance = this;
    }
  },
  computed: {
    // Returns sorted break/catering sessions
    breakSessions() {
      return this.formattedLineup.filter(
        (session) => this.isBreakSession(session)
      ).sort((a, b) =>
        a.startTime.localeCompare(b.startTime)
      );
    },
    // Returns all non-expert sessions sorted by time
    allSessionsSorted() {
      const allSessions = this.lineup.filter(
        (session) => session.type && !session.type.includes(SESSION_TYPES.EXPERT_CORNER),
      );

      return allSessions.sort((a, b) => {
        const timeA = this.timeToGridValue(a.startTime);
        const timeB = this.timeToGridValue(b.startTime);
        return timeA - timeB;
      });
    },
  },
   methods: {
    // Opens a modal dialog and sets focus
    openModal(modalRef) {
      modalRef.ariaHidden = false;
      modalRef.style.display = "flex";
      setTimeout(() => modalRef.focus(), 0);
    },
    // Closes a modal dialog
    closeModal(modalRef) {
      if (document.activeElement && modalRef.contains(document.activeElement)) {
        document.activeElement.blur();
      }
      modalRef.ariaHidden = true;
      modalRef.style.display = "none";
    },
    // Opens speaker information modal
    openSpeakerInfoModal(speakers, id) {
      this.activeSpeakers = speakers;
      this.lastFocussedElementID = id;
      this.openModal(this.$refs.speakerModal);
    },
    // Closes speaker modal and restores focus
    closeSpeakerInfoModal() {
      this.activeSpeakers = null;
      this.closeModal(this.$refs.speakerModal);

      const lastFocussedElement = document.getElementById(this.lastFocussedElementID);
      if (lastFocussedElement) {
        lastFocussedElement.focus();
      }
    },
    // Handles keyboard focus trap in speaker modal
    focusTrapModal($event) {
      handleFocusTrap($event, this.$refs.speakerModal);
    },
    // Formats all social media links for a speaker (returns a new object, does not mutate)
    formatSpeakerSocialLinks(speaker) {
      const formatted = { ...speaker };

      if (formatted.githubUrl) {
        formatted.githubUrl = formatSocialLink(formatted.githubUrl, 'github');
      }
      if (formatted.twitterHandle) {
        formatted.twitterHandle = formatSocialLink(formatted.twitterHandle, 'twitter');
      }
      if (formatted.linkedInUrl) {
        formatted.linkedInUrl = formatSocialLink(formatted.linkedInUrl, 'linkedin');
      }
      if (formatted.mastodonHandle) {
        formatted.mastodonHandle = formatSocialLink(formatted.mastodonHandle, 'mastodon');
      }
      if (formatted.blueskyHandle) {
        formatted.blueskyHandle = formatSocialLink(formatted.blueskyHandle, 'bluesky');
      }

      return formatted;
    },
    // Formats an array of speakers with full names and social links
    formatSpeakersArray(array) {
      return [...array].map((speaker) => {
        const formattedSpeaker = this.formatSpeakerSocialLinks(speaker);
        return {
          ...formattedSpeaker,
          fullName: speaker.firstName + " " + speaker.lastName,
          showMore: false,
        };
      });
    },
    // Updates filter and refreshes lineup display
    onFilterChange($event) {
      this.filter = $event.target.value;
      this.formattedLineup = this.formatLineup();
    },
    // Formats and sorts sessions based on active filter
    formatLineup() {
      const tempLineUp = this.lineup.map((session) => this.formatSession(session));

      const sortedScheduleTemp = tempLineUp.sort(
        (a, b) =>
          luxon.DateTime.fromISO(a.startTime) -
          luxon.DateTime.fromISO(b.startTime),
      );

      // No longer filtering out expert corner sessions - they're part of the main grid now
      const sortedSchedule = sortedScheduleTemp;

      const filterHandlers = {
        all: () => sortedSchedule,
        talks: () =>
          sortedSchedule.filter((s) =>
            s.type.includes(SESSION_TYPES.PRESENTATION),
          ),
        workshops: () =>
          sortedSchedule.filter((s) => s.type.includes(SESSION_TYPES.HANDS_ON)),
        experts: () =>
          sortedSchedule.filter((s) =>
            s.type.includes(SESSION_TYPES.EXPERT_CORNER),
          ),
        audimax: () =>
          sortedSchedule.filter((s) => s.location.toLowerCase() === "audimax"),
        w1: () =>
          sortedSchedule.filter((s) => s.location.toLowerCase().includes("w1")),
        w3: () =>
          sortedSchedule.filter((s) => s.location.toLowerCase().includes("w3")),
        beginner: () =>
          sortedSchedule.filter((s) => s.proficiencyLevel === "beginner"),
        intermediate: () =>
          sortedSchedule.filter((s) => s.proficiencyLevel === "intermediate"),
        advanced: () =>
          sortedSchedule.filter((s) => s.proficiencyLevel === "advanced"),
      };

      const handler = filterHandlers[this.filter];
      return handler ? handler() : sortedSchedule;
    },
    // Formats a single session with speakers, times, and calendar links
    formatSession(session) {
      // Create copies of speakers with formatted social links to avoid mutation
      const formattedSpeakers = session.speakers.map((speaker) =>
        this.formatSpeakerSocialLinks(speaker)
      );

      // Handle time normalization
      let start = session.startTime || "";
      let end = session.endTime || "";

      if (start && end) {
        start = padTimeComponent(start);
        end = padTimeComponent(end);
      }

      // Build ISO timestamps
      const newStartTime = start ? `${EVENT_DATE}T${start}:00.000${EVENT_TIMEZONE}` : null;
      const newEndTime = end ? `${EVENT_DATE}T${end}:00.000${EVENT_TIMEZONE}` : null;

      // Generate calendar dates
      const calendarDates = this.generateCalendarDates(newStartTime, newEndTime);

      // Format title for expert corner sessions
      let formattedTitle = session.title;
      let formattedDescription = session.description;

      if (this.isExpertSession(session) && session.title && session.title.includes("##")) {
        // First decode HTML entities manually (without stripping HTML tags)
        let decodedTitle = session.title.replace(/&amp;/g, "&");
        const titles = decodedTitle.split("##").map(t => t.trim());
        const numberedTitles = titles.map((title, index) => `#${index + 1} ${title}`).join("<br>");
        formattedTitle = `Expert corners:<br>${numberedTitles}`;

        // Format description: add heading session titles after double <br> separators
        if (session.description) {
          let desc = session.description.replace(/&amp;/g, "&").replace(/(?:\r\n|\r|\n)/g, "<br>");

          // Split by double <br> to get sections
          const sections = desc.split("<br><br>");

          // Add heading title before each section (except we skip the first if it doesn't need a title)
          const formattedSections = sections.map((section, index) => {
            if (index < titles.length && section.trim()) {
              return `<h4 style="font-size: var(--type-1)">${titles[index]}</h4><br>${section.trim()}`;
            }
            return section.trim();
          }).filter(s => s); // Remove empty sections

          formattedDescription = formattedSections.join("<br><br>");
        }
      }

      // Format description for calendar
      const calDescription = session.description
        ? session.description.replace(/&amp;/g, "&").replace(/(?:\r\n|\r|\n)/g, "<br>")
        : "";

      // Calculate initial live status
      const timeNow = new Date().toISOString();
      const sessionTimeStart = newStartTime ? new Date(newStartTime).toISOString() : null;
      const sessionTimeEnd = newEndTime ? new Date(newEndTime).toISOString() : null;
      const isLive = sessionTimeStart && sessionTimeEnd && timeNow >= sessionTimeStart && timeNow < sessionTimeEnd;

      return {
        ...session,
        title: formattedTitle,
        description: formattedDescription,
        speakers: formattedSpeakers,
        startTime: newStartTime,
        endTime: newEndTime,
        isLive: isLive,
        calendars: buildCalendarLinks(session, calendarDates, calDescription),
      };
    },
    // Generates calendar date strings in various formats
    generateCalendarDates(startTime, endTime) {
      const result = {
        calendarStartDate: "",
        calendarEndDate: "",
        officeStartDate: "",
        officeEndDate: "",
      };

      if (!startTime || !endTime) return result;

      const startDate = new Date(startTime);
      const endDate = new Date(endTime);

      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return result;

      result.calendarStartDate = startDate.toISOString().replace(/-|:|\.\d+/g, "");
      result.calendarEndDate = endDate.toISOString().replace(/-|:|\.\d+/g, "");
      result.officeStartDate = startDate.toISOString();
      result.officeEndDate = endDate.toISOString();

      return result;
    },
    // Enriches speaker data with proposal locations
    formatSpeakers(talks, speakers) {
      const talkIdToRoomMap = new Map(
        talks.map((talk) => [talk.id, talk.location]),
      );

      // Create a deep copy to avoid mutating the original speakers array
      return speakers.map((speaker) => ({
        ...speaker,
        proposals: speaker.proposals.map((proposal) => {
          const location = talkIdToRoomMap.get(proposal.id);
          return {
            ...proposal,
            location: location || "Audimax"
          };
        })
      }));
    },
    // Converts time string to grid value for CSS positioning
    getSessionsByRoom(room) {
      let roomSessions;

      // Special handling for expert corner - filter by type instead of location
      if (room === 'room_experts') {
        roomSessions = this.formattedLineup.filter(
          (session) =>
            session.type &&
            session.type.includes(SESSION_TYPES.EXPERT_CORNER) &&
            !this.isBreakSession(session)
        );
      } else {
        // Get sessions for this specific room (excluding break sessions)
        roomSessions = this.formattedLineup.filter(
          (session) =>
            session.location === room &&
            session.type &&
            !this.isBreakSession(session)
        );
      }

      // Sort by start time
      return roomSessions.sort((a, b) =>
        a.startTime.localeCompare(b.startTime),
      );
    },
    // Converts time string to grid value for CSS positioning
    timeToGridValue(timeStr) {
      if (!timeStr) return 0;

      // Returns HHMM format (e.g., 930 for 9:30) for CSS grid calculations
      // The CSS extracts hours/minutes using: round(down, val/100) and mod(val, 100)
      let timeOnly;
      
      if (timeStr.includes("T")) {
        timeOnly = timeStr.substring(timeStr.indexOf("T") + 1);
      } else {
        timeOnly = timeStr;
      }

      const parts = timeOnly.split(":");
      if (parts.length < 2) {
        console.warn(`Invalid time format: ${timeStr}`);
        return 0;
      }

      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      
      if (isNaN(hours) || isNaN(minutes)) {
        console.warn(`Invalid time values in: ${timeStr}`);
        return 0;
      }

      return hours * 100 + minutes;
    },
    // Checks if session is a break or catering session
    isBreakSession(session) {
      if (session.location === CANTEEN_LOCATION) return true;
      const type = session.type || "";
      return BREAK_SESSION_PATTERN.test(type) || BREAK_SESSION_PATTERN.test(session.title);
    },
    // Checks if session is a pitch session
    isPitchSession(session) {
      const lowerType = (session.type || "").toLowerCase();
      return lowerType.includes(SESSION_TYPES.PITCH);
    },
    // Checks if session is an expert corner session
    isExpertSession(session) {
      const lowerType = (session.type || "").toLowerCase();
      return lowerType.includes(SESSION_TYPES.EXPERT_CORNER);
    },
    // Updates the live status for all sessions
    updateLiveSession() {
      this.formattedLineup.forEach((session) => {
        if (!session.startTime || !session.endTime) return;

        const timeNow = new Date().toISOString();
        const sessionTimeStart = new Date(session.startTime).toISOString();
        const sessionTimeEnd = new Date(session.endTime).toISOString();

        session.isLive = timeNow >= sessionTimeStart && timeNow < sessionTimeEnd;
      });
    },
    // Toggles between grid and linear agenda views
    toggleAgendaView() {
      this.agendaViewMode = this.agendaViewMode === "grid" ? "linear" : "grid";
      this.filter = "all";
      this.formattedLineup = this.formatLineup();
    },
    // Retrieves speakers for a specific session by ID
    getSessionSpeakers(sessionId) {
      // Find the session in formattedLineup to get formatted speaker data
      const session = this.formattedLineup.find((s) => s.id === sessionId);
      return session && session.speakers ? session.speakers : [];
    },
    // Opens the session details modal
    openSessionDialog(session) {
      this.activeSession = session;
      this.openModal(this.$refs.sessionModal);
    },
    // Closes the session details modal
    closeSessionDialog() {
      this.activeSession = null;
      this.closeModal(this.$refs.sessionModal);
    },
    // Handles keyboard focus trap in session modal
    focusTrapSessionModal($event) {
      handleFocusTrap($event, this.$refs.sessionModal);
    },
    // Capitalizes the first letter of proficiency level
    formatProficiencyLevel(value) {
      if (!value) return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    // Returns abbreviated location name for display
    formatLocationTitle(value) {
      const info = getLocationInfo(value);
      return info ? info.short : (value || "");
    },
    // Decodes HTML and formats bio text with line breaks
    decodeBioHtml(value) {
      if (!value) return "";

      // If value already contains <br> tags, it's already formatted HTML - don't decode
      if (value.includes("<br>")) {
        return value;
      }

      let decoded = decodeHtmlEntities(value);

      // Replace "&amp;" or "&" with " and "
      decoded = decoded.replace(/&amp;|&/g, " and ");

      // Replace \n or /n with <br> for HTML rendering
      decoded = decoded.replace(/\\n|\/n|\n/g, "<br>");

      return decoded;
    },
    // Removes leading zeros from time display
    trimTime(value) {
      if (!value) return "";
      const time = value.substring(value.indexOf("T") + 1);
      const timeSplit = time.split(":");
      const hour = timeSplit[0].startsWith("0")
        ? timeSplit[0].replace(/^0+/, "")
        : timeSplit[0];
      return `${hour}:${timeSplit[1]}`;
    },
    // Returns full location name for display
    formatLocation(value) {
      const info = getLocationInfo(value);
      return info ? info.full : (value || "");
    },
    // Removes 'Expert Corner: ' prefix from session titles
    trimExpertText(value) {
      if (!value) return "";
      return value.replace(/^Expert Corner: /, "");
    },
    // Decodes HTML entities in text
    decodeHtml(value) {
      return decodeHtmlEntities(value);
    },
    // Converts session type to user-friendly label
    formatSessionType(value) {
      if (!value) return "";
      if (value.toLowerCase().includes(SESSION_TYPES.PRESENTATION)) {
        return "Talk";
      } else if (value.toLowerCase().includes(SESSION_TYPES.HANDS_ON)) {
        return "Workshop";
      } else if (value.toLowerCase().includes(SESSION_TYPES.EXPERT_CORNER)) {
        return "Expert Corner";
      } else {
        return value;
      } 
    },
  }
});
// Register calendar-link component with main app if it exists
if (window.CalendarLinkComponent) {
  main.component('calendar-link', window.CalendarLinkComponent);
}
main.mount('#main');

const footer = createApp({
  data() {
    return {
    };
  },
});

// Register footer component and mount
footer.component('footer-section', window.FooterSectionComponent);
footer.mount('#footer');
