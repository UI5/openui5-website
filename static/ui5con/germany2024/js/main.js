'use strict';

var header = new Vue({
  el: '#header',
  data() {
    return {
      remainingDays: null,
      remainingHours: null,
    };
  },
  mounted() {
    this.getRemainingDates();
  },
  methods: {
    getRemainingDates() {
      const targetDate = new Date("2024-06-05T09:00:00.000+02:00").getTime();
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      this.remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      this.remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }
  },
});

var main = new Vue({
  el: '#main',
  data() {
    return {
      isCalendarsVisible: false,
      isExpanded: false,
      isModalVisible: false,
      showCalBlockers: false,
      eventTime: "event",
      socialLinks: [
        {
          link: "https://twitter.com/intent/tweet?text=UI5Con%20Germany%202023%20&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 36" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.075 2.87C23.382 1.128 25.483 0 28.375 0c1.778 0 3.395.899 4.465 1.773.38.31.739.655 1.053 1.021l3.771-1.508a2.25 2.25 0 0 1 2.4 3.706l-3.88 3.755c.033.438.066.97.066 1.378 0 5.335-1.176 11.726-4.597 16.857-3.504 5.256-9.263 9.018-17.903 9.018-4.68 0-7.743-.584-9.712-1.24-.986-.33-1.7-.677-2.203-.979a6.061 6.061 0 0 1-.602-.408C.25 32.626.158 31.275.42 30.64A2.25 2.25 0 0 1 2.5 29.251c4.144 0 7.227-.996 9.415-2.148-1.308-.093-2.717-.289-3.9-.703-1.197-.418-3.265-1.487-3.265-3.899A2.25 2.25 0 0 1 7 20.251c.146 0 .597-.078 1.382-.327-1.033-.317-2.07-.71-2.958-1.2-1.137-.625-2.924-1.9-2.924-4.098a2.25 2.25 0 0 1 2.25-2.25c.051 0 .104 0 .16-.002C2.727 10.709.25 8.072.25 4.5a2.25 2.25 0 0 1 4.104-1.274l.005.006c.013.018.044.058.094.118.1.12.277.318.544.571.533.505 1.43 1.232 2.8 1.979C10.24 7.234 14.257 8.669 20.5 8.95V7.876c0-1.439.35-3.373 1.575-5.006Z" fill="currentColor"/>
          </svg>`,
          text: "Share on twitter"
        },
        {
          link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023",
          svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v10a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" fill="currentColor"/>
          </svg>`,
          text: "Share on facebook"
        },
        {
          link: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023&title=UI5Con Germany 2023&summary=UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development.",
          svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.778A3.778 3.778 0 0 1 10.778 7 3.222 3.222 0 0 1 14 10.222V13a1 1 0 1 1-2 0v-2.778C12 9.547 11.453 9 10.778 9 9.796 9 9 9.796 9 10.778V13a1 1 0 1 1-2 0v-2.222Z" fill="currentColor"/>
          </svg>`,
          text: "Share on LinkedIn"
        },
        {
          link: "mailto:?subject=UI5con in July 2023&body=Mark your calendars: UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development. https://openui5.org/ui5con/germany2023/",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 36" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6.75A6.75 6.75 0 0 1 7.25 0h31.5a6.75 6.75 0 0 1 6.75 6.75v22.5A6.75 6.75 0 0 1 38.75 36H7.25A6.75 6.75 0 0 1 .5 29.25V6.75ZM7.25 4.5A2.25 2.25 0 0 0 5 6.75v22.5a2.25 2.25 0 0 0 2.25 2.25h31.5A2.25 2.25 0 0 0 41 29.25V6.75a2.25 2.25 0 0 0-2.25-2.25H7.25Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.092 5.558a2.25 2.25 0 0 1 3.1-.716l15.616 9.76a2.25 2.25 0 0 0 2.384 0l15.615-9.76a2.25 2.25 0 0 1 2.386 3.816l-15.615 9.76a6.75 6.75 0 0 1-7.155 0L3.807 8.657a2.25 2.25 0 0 1-.716-3.1Z" fill="currentColor"/>
          </svg>`,
          text: "Share via mail"
        }
      ],
      jury: [
        {
          name: 'Geert-Jan Klaps',
          info: 'Belgium | TheValueChain',
          image: 'images/jury/geert-jan-klaps.jpg',
          github: 'https://github.com/geert-janklaps',
          linkedin: 'https://www.linkedin.com/in/geertjanklaps/',
          x: 'https://twitter.com/geertjanklaps'
        },
        {
          name: 'Danielle Lyle',
          info: 'Belgium | Comentec',
          image: 'images/jury/danielle-lyle.jpeg',
          linkedin: 'https://www.linkedin.com/in/danielle-lyle/',
        },
        {
          name: 'Stefan Beck',
          info: 'Germany | SAP',
          image: 'images/jury/stefan-beck.jpg',
          linkedin: 'https://www.linkedin.com/in/stefan-beck-a9319a82',
          x: 'https://twitter.com/StefanBeck3'
        },
        {
          name: 'Thomas Büchler',
          info: 'Germany | SAP',
          image: 'images/jury/thomas-buechler.jpg',
          linkedin: 'https://www.linkedin.com/in/thomas-b%C3%BCchler-3420073b/',
        },
        {
          name: 'Catrin Kupfer',
          info: 'Germany | DZ BANK AG',
          image: 'images/jury/catrin-kupfer.jpg',
          linkedin: 'https://www.linkedin.com/in/catrin-kupfer-1b1ab71a9/',
        },
        {
          name: 'Dominik Heim',
          info: 'Germany | SAP',
          image: 'images/jury/dominik-heim.jpg',
          github: 'https://github.com/heimwege',
          linkedin: 'https://www.linkedin.com/in/dominik-heim-494aa9145/',
        },
        {
          name: 'Mike Zaschka',
          info: 'Germany | p36 GmbH',
          image: 'images/jury/mike-zaschka.jpg',
          github: 'https://github.com/mikezaschka',
          linkedin: 'https://www.linkedin.com/in/mike-zaschka-7395949/',
          x: 'https://twitter.com/mike_zaschka'
        },
        {
          name: 'Matt Harding',
          info: 'Australia | Independent',
          image: 'images/jury/matt-harding.jpg',
          linkedin: 'https://www.linkedin.com/in/mattharding/',
          x: 'https://twitter.com/mattharding'
        },
        {
          name: 'Dimitar Fenerski',
          info: 'Bulgaria | Berncon GmbH',
          image: 'images/jury/dimitar-fenerski.jpg',
          github: 'https://github.com/dfenerski',
          linkedin: 'https://www.linkedin.com/in/dimitar-fenerski-b91610181/',
          x: 'https://twitter.com/dfenersky'
        }
      ],
      filter: "all",
      activeSpeakers: null,
      lineup: [],
      proposalLineup: [],
      formattedLineup: [],
      expertCornerLineupUnsorted: [],
      expertCornerLineup: {},
      lastFocussedElementID: '',
      proposalLineupJson: proposalLineupJson
    };
  },
  mounted() {
    this.lineup = proposalLineupJson;
    this.formattedLineup = this.formatLineup();
    this.groupExpertCornerTopics();

    this.updateLiveSession();

    let interval;

    let timeNow = new Date().toISOString();

    const startCounterTime = new Date(
      "2024-06-05T00:50:00.000+02:00"
    ).toISOString();

    const endCounterTime = new Date(
      "2024-06-05T18:10:00.000+02:00"
    ).toISOString();

    if (timeNow > startCounterTime && timeNow <= endCounterTime) {
      interval = setInterval(() => {
        timeNow = new Date().toISOString();
        if (timeNow > endCounterTime) {
          clearInterval(interval);
          return;
        }
        this.updateLiveSession();
      }, 30000);
    }
  },
  methods: {
    toggleCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
    },
    showSubscribeModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    onFilterChange($event) {
      this.filter = $event.target.value;
      this.formattedLineup = this.formatLineup();
    },
    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },
    getLocalTimeZone() {
      return luxon.DateTime.now().toFormat("Z");
    },
    formatLineup() {
      const tempLineUp = this.lineup.map((session) => {
        session.speakers.map((speaker) => {
          if(speaker.twitterHandle) {
            speaker.twitterHandle = this.formatTwitterLink(speaker.twitterHandle);
          }

          if(speaker.linkedInUrl) {
            speaker.linkedInUrl = this.formatLinkedInLink(speaker.linkedInUrl);
          }

          if(speaker.mastodonHandle) {
            speaker.mastodonHandle = this.formatMastodonLink(speaker.mastodonHandle);
          }

          if(speaker.blueskyHandle) {
            speaker.blueskyHandle = this.formatBlueskyLink(speaker.blueskyHandle);
          }
        });

        let start = session.startTime;
        let end = session.endTime;

        let tempStart = start.substring(0, start.indexOf(":"));
        let tempEnd = end.substring(0, end.indexOf(":"));

        if (tempStart.length == 1 && !tempStart.startsWith("0")) {
          start = "0" + start;
        }

        if (tempEnd.length == 1 && !tempEnd.startsWith("0")) {
          end = "0" + end;
        }

        let newStartTime = "2024-06-05T" + start + ":00.000+02:00";
        let newEndTime = "2024-06-05T" + end + ":00.000+02:00";

        if (session.title === "Lunch") {
          newStartTime = "2024-06-05T" + start + ":30.000+02:00";
        }

        let timeNow = new Date().toISOString();
        let sessionTimeStart = new Date(newStartTime).toISOString();
        let sessionTimeEnd = new Date(newEndTime).toISOString();
        let sessionLiveStatus = false;

        if (timeNow > sessionTimeStart && timeNow < sessionTimeEnd) {
          sessionLiveStatus = true;
        }

        return {
          ...session,
          startTime: newStartTime,
          endTime: newEndTime,
          isLive: sessionLiveStatus
        };
      });

      const sortedScheduleTemp = tempLineUp.sort((a, b) =>
      luxon.DateTime.fromISO(a.startTime) -
      luxon.DateTime.fromISO(b.startTime) || a.location.localeCompare(b.location)
      );

      this.expertCornerLineupUnsorted = sortedScheduleTemp.filter(
        (schedule) => schedule.type.includes("expert")
      );

      const sortedSchedule = sortedScheduleTemp.filter(
        (schedule) => !schedule.type.includes("expert")
      );

      if (this.filter === "all") {
        return sortedSchedule;
      } else if (this.filter === "talks") {
        return sortedSchedule.filter((schedule) =>
          schedule.type.includes("presentation")
        );
      } else if (this.filter === "workshops") {
        return sortedSchedule.filter((schedule) =>
          schedule.type.includes("hands")
        );
      } else if (this.filter === "audimax") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.includes("audimax")
        );
      } else if (this.filter === "w1") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.includes("w1")
        );
      } else if (this.filter === "w3") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.includes("w3")
        );
      } else {
        return sortedSchedule;
      }
    },
    groupExpertCornerTopics() {
      this.expertCornerLineupUnsorted.forEach((corner) => {
        const timeSlot = corner.startTime;
        if (!this.expertCornerLineup[timeSlot]) {
          this.expertCornerLineup[timeSlot] = [];
        }
        this.expertCornerLineup[timeSlot].push(corner);
      });
    },
    openSpeakerInfoModal(speakers, id) {
      this.activeSpeakers = speakers;
      this.$refs.agenda.ariaHidden = true;
      this.$refs.speakerModal.ariaHidden = false;
      this.$refs.speakerModal.style.display = "flex";
      this.lastFocussedElementID = id;

      setTimeout(() => {
        this.$refs.speakerModal.focus();
      }, 0);
    },
    closeSpeakerInfoModal() {
      this.activeSpeakers = null;
      this.$refs.agenda.ariaHidden = false;
      this.$refs.speakerModal.ariaHidden = true;
      this.$refs.speakerModal.style.display = "none";

      for (const key in this.$refs) {
        if (
          key.startsWith("twitter") ||
          key.startsWith("github") ||
          key.startsWith("linkedin") ||
          key.startsWith("mastodon") ||
          key.startsWith("bluesky")
        ) {
          delete this.$refs[key];
        }
      }
      document.getElementById(this.lastFocussedElementID).focus();
    },
    focusTrapModal($event) {
      let focussableElements = [];
      focussableElements.push(this.$refs.close);

      for (const key in this.$refs) {
        if (
          key.startsWith("twitter") ||
          key.startsWith("github") ||
          key.startsWith("linkedin") ||
          key.startsWith("mastodon") ||
          key.startsWith("bluesky")
        ) {
          const element = this.$refs[key];
          if (Array.isArray(element)) {
            focussableElements.push(element[0]);
          } else {
            focussableElements.push(element);
          }
        }
      }

      const filteredFocussableElements = focussableElements.filter(
        (el) => el !== undefined
      );
      const activeElementIndex = filteredFocussableElements.indexOf(
        $event.target
      );

      if (activeElementIndex != filteredFocussableElements.length - 1) {
        if ($event.shiftKey) {
          if (activeElementIndex === 0) {
            filteredFocussableElements[
              filteredFocussableElements.length - 1
            ].focus();
          } else {
            filteredFocussableElements[activeElementIndex - 1].focus();
          }
        } else {
          filteredFocussableElements[activeElementIndex + 1].focus();
        }
      } else {
        if ($event.shiftKey) {
          filteredFocussableElements[activeElementIndex - 1].focus();
        } else {
          filteredFocussableElements[0].focus();
        }
      }
    },
    createCalendars() {

      let newStartTime = "2024-06-05T00:00:00.000";
      let newEndTime = "2024-06-06T00:00:00.000";

      let calendarStartDate = new Date(newStartTime).toISOString().replace(/-|:|\.\d+/g, '');
      let calendarEndDate = new Date(newEndTime).toISOString().replace(/-|:|\.\d+/g, '');

      let officeStartDate = new Date(newStartTime).toISOString();
      let officeEndDate = new Date(newEndTime).toISOString();

      const forbiddenCharacters = new RegExp('#', 'g')
        const removeForbiddenCharachters = (text) => {
            if (typeof text === 'string') {
              let formattedText = text.replace(/(&amp;|&)/g, " and ");
              return formattedText.replace(forbiddenCharacters, '');
            }
            return ''
        }

        const removeForbiddenCharachtersOutlook = (text) => {
          if (typeof text === 'string') {
            let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "\\n");
            return formattedText.replace(forbiddenCharacters, '');
          }
          return ''
      }

      let description = "Dear friend, \n\nWe are thrilled to announce that UI5con 2024 will be held on June 5, 2024. This event is the highlight of the year for developers working with UI5, and we have an exciting lineup of keynotes and sessions planned for you.\n\nFor those eager to join us in person at St. Leon-Rot, Germany, it's important to note that seats for UI5con 2024 are limited. To secure your spot, registration will be required. Stay updated by regularly visiting our conference homepage or following us on our social media channels, so you don't miss the registration start date.\n\nCan't make it to St. Leon-Rot? Don't worry, we've got you covered! UI5con 2024 will also feature a livestream on the OpenUI5 YouTube channel, showcasing selected sessions. This way, you won't miss out on the valuable insights and knowledge shared by our esteemed speakers. Block this date in your calendar, as you won't want to miss the opportunity to learn from the best in the industry.\n\nStay tuned for more updates and exciting announcements as we get closer to UI5con 2024. We look forward to seeing you there, either in person or virtually!\n\nPlease save the following details:\nDate: 05/06/2024 \nLocation: SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany) \n\nConference website: https://openui5.org/ui5con/germany2024"

      let descriptionGoogle = `Dear friend, <br><br>We are thrilled to announce that UI5con 2024 will be held on June 5, 2024. This event is the highlight of the year for developers working with UI5, and we have an exciting lineup of keynotes and sessions planned for you.<br><br>For those eager to join us in person at St. Leon-Rot, Germany, it's important to note that seats for UI5con 2024 are limited. To secure your spot, registration will be required. Stay updated by regularly visiting our conference homepage or following us on our social media channels, so you don't miss the registration start date.<br><br>Can't make it to St. Leon-Rot? Don't worry, we've got you covered! UI5con 2024 will also feature a livestream on the OpenUI5 YouTube channel, showcasing selected sessions. This way, you won't miss out on the valuable insights and knowledge shared by our esteemed speakers. Block this date in your calendar, as you won't want to miss the opportunity to learn from the best in the industry.<br><br>Stay tuned for more updates and exciting announcements as we get closer to UI5con 2024. We look forward to seeing you there, either in person or virtually!<br><br>Please save the following details:<br>Date: 05/06/2024<br>Location: SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany) <br><br>Conference website: <a href="https://openui5.org/ui5con/germany2024/" target="_blank">https://openui5.org/ui5con/germany2024/</a>`


      let cal = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'DTSTART:' + calendarStartDate,
        'DTEND:' + calendarEndDate,
        'SUMMARY:' + 'Save the Date: UI5con 2024',
        'LOCATION:' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
        'DESCRIPTION:' + removeForbiddenCharachtersOutlook(description),
        'UID:' + '1',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\n');

      return {
        calendars: [
          {
            google: encodeURI([
              'https://www.google.com/calendar/render',
              '?action=TEMPLATE',
              '&text=' + 'Save the Date: UI5con 2024',
              '&dates=' + calendarStartDate ,
              '/' + calendarEndDate,
              '&location='+'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
              '&details=' + removeForbiddenCharachters(descriptionGoogle),
              '&sprop=&sprop=name:'
            ].join('')),
            office365: encodeURI([
              'https://outlook.office365.com/owa/',
              '?path=/calendar/action/compose',
              '&rru=addevent',
              '&subject=' + 'Save the Date: UI5con 2024',
              '&startdt=' + officeStartDate,
              '&enddt=' + officeEndDate,
              '&location=' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
              '&body=' + removeForbiddenCharachters(descriptionGoogle)
            ].join('')),
            ics: encodeURI('data:text/calendar;charset=utf8,' + cal)
          }
        ]
      }

    },
    formatTwitterLink(handle) {
      if (!handle.startsWith('https:')) {
        return "https://twitter.com/" + handle;
      }
    },
    formatLinkedInLink(handle) {
      if (!handle.startsWith('https:')) {
        return "https://www.linkedin.com/in/" + handle;
      }
    },
    formatMastodonLink(handle) {
      if(!handle.startsWith('https:')) {
        if (handle.includes('@saptodon.org')) {
          return 'https://saptodon.org/' + handle.replace('@saptodon.org', '');
        }

        return 'https://saptodon.org/' + handle;
      }
    },
    formatBlueskyLink(handle) {
      if(!handle.startsWith('https:')) {
        return 'https://bsky.app/profile/' + handle.replace('@', '');
      }
    },
    shuffleSpeakersArray(array) {
      const newArray = [...array]
      const filteredArray = newArray.filter((el) => el.hasPhoto);
      const length = filteredArray.length

      for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor((filteredArray.length - start) * Math.random());
        const randomItem = filteredArray.splice(randomPosition, 1);
        filteredArray.push(...randomItem);
      }

      return filteredArray;
    },
    formatSpeakersArray(array) {
      const newArray = [...array]
      const formattedArray = newArray.map(speaker => {
        const fullName = speaker.firstName + ' ' + speaker.lastName;

        if(speaker.twitterHandle) {
          speaker.twitterHandle = this.formatTwitterLink(speaker.twitterHandle);
        }

        if(speaker.linkedInUrl) {
          speaker.linkedInUrl = this.formatLinkedInLink(speaker.linkedInUrl);
        }

        if(speaker.mastodonHandle) {
          speaker.mastodonHandle = this.formatMastodonLink(speaker.mastodonHandle);
        }

        if(speaker.blueskyHandle) {
          speaker.blueskyHandle = this.formatBlueskyLink(speaker.blueskyHandle);
        }

        return {
          ...speaker,
          fullName: fullName,
          showMore: false
        }
      });

      return formattedArray;
    },
    formatAndShuffleSpeakersArray(array) {
      const formattedArray = this.formatSpeakersArray(array);
      return this.shuffleSpeakersArray(formattedArray);
    },
    updateLiveSession() {
      return this.formattedLineup.map((session) => {
        let timeNow = new Date().toISOString();
        let sessionTimeStart = new Date(session.startTime).toISOString();
        let sessionTimeEnd = new Date(session.endTime).toISOString();

        if (timeNow >= sessionTimeStart && timeNow < sessionTimeEnd) {
          session.isLive = true;
        } else {
          session.isLive = false;
        }
      });
    },
  },
  filters: {
    trimTime: function (value) {
      let time = value.substring(value.indexOf("T") + 1);
      let timeSplit = time.split(":");
      let hour = timeSplit[0].startsWith("0")
        ? timeSplit[0].replace(/^0+/, "")
        : timeSplit[0];
      return hour + ":" + timeSplit[1];
    },
    convertTime: function (value, eventTime) {
      if (eventTime === "local") {
        return luxon.DateTime.fromISO(value)
          .toLocal()
          .toISO({ suppressMilliseconds: true });
      }
      return value;
    },
    formatLocation: function (value) {
      if (value) {
        if (value.includes("audimax")) {
          return "Audimax";
        } else if (value.includes("w1") || value.includes("w2")) {
          return "Room W1/W2";
        } else if (value.includes("w3")) {
          return "Room W3"
        } else if (value.includes("expert")) {
          return "Expert Corner"
        } else if (value.includes("canteen")) {
          return "Canteen"
        } else {
          return value;
        }
      }
    },
    formatType: function (value) {
      if (value) {
        if (value.includes("presentation")) {
          return "Talk";
        } else if (value.includes("hands")) {
          return "Workshop";
        } else if (value.includes("expert")) {
          return "Expert Corner";
        } else if (value.includes("keynote")) {
          return "Keynote";
        }  else {
          return "";
        }
      }
    },
  },
});
