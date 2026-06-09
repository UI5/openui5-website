'use strict';
/**
 * Events Loader (Separation: Data vs Presentation)
 * - Phase 1: Fetch + Parse fenced YAML blocks into plain JS objects (no DOM work)
 * - Phase 2: Render using HTML <template> elements (cards, dialog, speakers)
 */

(function () {

  const EVENTS_MD_URL = 'data/events.md';
  const PERSONS_MD_URL = 'data/persons.md';

  let personsMap;
  // Selected display time zone; undefined means user's local time
  let currentTimeZone;

  /***********************
   * Utility
   ***********************/
  function fetchText(url) {
    return fetch(url, { cache: 'no-cache' })
      .then(r => {
        if (!r.ok) throw new Error('Fetch failed ' + url + ' ' + r.status);
        return r.text();
      });
  }

  /***********************
   * Parsing (Markdown → Data)
   ***********************/
  const FENCE_REGEX = /```yaml\r?\n([\s\S]*?)\r?\n```/g;

  function parseFencedYamlBlocks(markdown) {
    const matches = [];
    let m;
    while ((m = FENCE_REGEX.exec(markdown)) !== null) {
      matches.push({ yaml: m[1], start: m.index, end: m.index + m[0].length });
    }
    const blocks = [];
    for (let i = 0; i < matches.length; i++) {
      const curr = matches[i];
      const next = matches[i + 1];
      const bodyStart = curr.end;
      const bodyEnd = next ? next.start : markdown.length;
      const body = markdown.slice(bodyStart, bodyEnd);
      let meta = {};
      try {
        meta = jsyaml.load(curr.yaml) || {};
      } catch (e) {
        console.warn('YAML parse error skipped block:', e);
        continue;
      }
      blocks.push({ ...meta, body });
    }
    return blocks;
  }

  /***********************
   * Data Normalization
   ***********************/
  // Supported date formats:
  // 1) "YYYY-MM-DD HH:MM TZ"
  // 2) "YYYY-MM-DD" (date-only, treated as all-day)
  const DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}) ([A-Za-z_\/]+)$/;
  const DATE_ONLY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

  function parseDateFlexible(str) {
    if (!str) return { ts: NaN, isDateOnly: false };
    const trimmed = String(str).trim();
    let m = DATE_TIME_RE.exec(trimmed);
    if (m) {
      const [_, y, mo, d, h, mi, tz] = m;
      // We need to interpret the provided wall-clock time (y,mo,d,h,mi) IN the given IANA timezone (tz)
      // and obtain the absolute UTC timestamp. The built-in Date does not let us construct a date
      // directly in an arbitrary IANA zone, so we approximate by iterative offset correction:
      // 1. Start with a guess treating the wall time as if it were UTC.
      // 2. Format that guess in the target timezone; compare displayed Y-M-D + H:M with desired.
      // 3. Adjust the guess by the difference in minutes (including day shift) and iterate.
      // 4. This converges quickly for fixed offsets and DST-aware zones (rarely >2 iterations).
      try {
        let guess = Date.UTC(+y, +mo - 1, +d, +h, +mi, 0); // initial naive guess
        const desiredY = +y, desiredM = +mo, desiredD = +d, desiredHM = (+h) * 60 + (+mi);
        const fmt = () => new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).formatToParts(new Date(guess));
        for (let i = 0; i < 4; i++) { // iterate a few times for safety - see comment above
          const parts = fmt();
          const get = t => parts.find(p => p.type === t)?.value;
          const dispY = +get('year');
          const dispM = +get('month');
          const dispD = +get('day');
          const dispHour = +get('hour');
          const dispMinute = +get('minute');
          // Compute total minutes difference including any date shift
          const dispDate = new Date(dispY, dispM - 1, dispD);
          const desiredDate = new Date(desiredY, desiredM - 1, desiredD);
          const dayDiff = Math.round((dispDate - desiredDate) / 86400000); // could be -1,0,1 typically
          const dispHM = dispHour * 60 + dispMinute + dayDiff * 1440;
          const offsetMinutes = dispHM - desiredHM;
          if (offsetMinutes === 0) break; // converged
          // Adjust guess by removing the offset (since we treated wall time as UTC initially)
          guess -= offsetMinutes * 60000;
        }
        return { ts: guess, isDateOnly: false };
      } catch (e) {
        console.error('[events-loader] ERROR: Failed to parse date/time with timezone:', str, 'Error:', e.message);
        // Fallback: treat provided wall time as local browser time (may be wrong but better than NaN)
        const fallbackTs = new Date(+y, +mo - 1, +d, +h, +mi, 0).getTime();
        if (isNaN(fallbackTs)) {
          console.error('[events-loader] ERROR: Fallback date parsing also failed for:', str);
          return { ts: NaN, isDateOnly: false };
        }
        console.warn('[events-loader] WARNING: Using fallback local time for:', str);
        return { ts: fallbackTs, isDateOnly: false };
      }
    }
    m = DATE_ONLY_RE.exec(trimmed);
    if (m) {
      const [_, y, mo, d] = m;
      const ts = new Date(+y, +mo - 1, +d, 0, 0, 0).getTime();
      if (isNaN(ts)) {
        console.error('[events-loader] ERROR: Failed to parse date-only format:', str);
        return { ts: NaN, isDateOnly: true };
      }
      return { ts: ts, isDateOnly: true };
    }
    console.error('[events-loader] ERROR: Date format not recognized:', str, '(Expected formats: "YYYY-MM-DD HH:MM TZ" or "YYYY-MM-DD")');
    return { ts: NaN, isDateOnly: false };
  }

  function buildModel(eventsRaw, personsRaw) {
    const personsMap = {};
    personsRaw.forEach(p => { if (p.id) personsMap[p.id] = p; });

    const validEvents = [];
    let ignoredCount = 0;

    eventsRaw.forEach(e => {
      // Check for required fields
      if (!e.id) {
        console.error('[events-loader] ERROR: Event ignored - missing required field "id". Event data:', e);
        ignoredCount++;
        return;
      }
      if (!e.title) {
        console.error('[events-loader] ERROR: Event ignored - missing required field "title". Event ID:', e.id);
        ignoredCount++;
        return;
      }
      if (!e.start) {
        console.error('[events-loader] ERROR: Event ignored - missing required field "start". Event:', e.id, '-', e.title);
        ignoredCount++;
        return;
      }
      if (!e.end) {
        console.error('[events-loader] ERROR: Event ignored - missing required field "end". Event:', e.id, '-', e.title);
        ignoredCount++;
        return;
      }

      // Parse dates
      const start = parseDateFlexible(e.start);
      const end = parseDateFlexible(e.end);

      // Validate parsed dates
      if (isNaN(start.ts)) {
        console.error('[events-loader] ERROR: Event ignored - start date/time could not be parsed. Event:', e.id, '-', e.title, '| Start value:', e.start);
        ignoredCount++;
        return;
      }
      if (isNaN(end.ts)) {
        console.error('[events-loader] ERROR: Event ignored - end date/time could not be parsed. Event:', e.id, '-', e.title, '| End value:', e.end);
        ignoredCount++;
        return;
      }

      // Date validation: end should not be before start
      if (end.ts < start.ts) {
        console.error('[events-loader] ERROR: Event ignored - end date/time is before start date/time. Event:', e.id, '-', e.title, '| Start:', e.start, '| End:', e.end);
        ignoredCount++;
        return;
      }

      // Event is valid, add to list
      validEvents.push({
        id: e.id,
        title: e.title,
        subTitle: e.subTitle || '',
        start: e.start,
        end: e.end,
        startTs: start.ts,
        endTs: end.ts,
        isDateOnly: start.isDateOnly && end.isDateOnly,
        location: e.location || '',
        logo: e.logo || '',
        external: !!e.external,
        url: e.url || '',
        recordingUrl: e.recordingUrl || '',
        speakers: Array.isArray(e.speakers) ? e.speakers : [],
        body: e.body || ''
      });
    });

    if (ignoredCount > 0) {
      console.warn(`[events-loader] WARNING: ${ignoredCount} event(s) were ignored due to missing or invalid data. Check console errors above for details.`);
    }

    console.log(`[events-loader] Successfully loaded ${validEvents.length} event(s)`);

    return { events: validEvents, personsMap };
  }

  /***********************
   * Formatting Helpers
   ***********************/
  function isEventPast(ev) {
    // Determine if an event has ended.
    // For date-only events, extend the effective end by one full day.
    const now = Date.now();
    const eventEndCutoff = ev.endTs + (ev.isDateOnly ? 86400000 : 0);
    return now > eventEndCutoff;
  }

  function formatDate(ts, tz) {
    if (isNaN(ts)) return '';
    const opts = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    if (tz) opts.timeZone = tz;
    return new Intl.DateTimeFormat(undefined, opts).format(new Date(ts));
  }

  function formatDateOnlyRange(startTs, endTs) {
    if (isNaN(startTs)) return '';
    const dateFmt = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    if (isNaN(endTs) || endTs <= startTs) return dateFmt.format(new Date(startTs));
    const s = new Date(startTs);
    const e = new Date(endTs);
    const sameDay = s.toDateString() === e.toDateString();
    if (sameDay) return dateFmt.format(s);
    const sameMonthYear = s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth();
    if (sameMonthYear) {
      const month = new Intl.DateTimeFormat(undefined, { month: 'short' }).format(s);
      return `${month} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`;
    }
    const startStr = dateFmt.format(s);
    const endStr = dateFmt.format(e);
    return `${startStr} → ${endStr}`;
  }

  function formatEventDateRange(ev, tz) {
    if (!ev) return '';
    if (ev.isDateOnly) return formatDateOnlyRange(ev.startTs, ev.endTs);
    const { startTs, endTs } = ev;
    if (isNaN(startTs)) return '';
    const startStr = formatDate(startTs, tz);
    if (isNaN(endTs) || endTs <= startTs) return startStr;
    const sameDay = new Date(startTs).toDateString() === new Date(endTs).toDateString();
    const timeOpts = { hour: '2-digit', minute: '2-digit' };
    if (tz) timeOpts.timeZone = tz;
    const endTime = new Intl.DateTimeFormat(undefined, timeOpts).format(new Date(endTs));
    return sameDay ? `${startStr} – ${endTime}` : `${startStr} → ${formatDate(endTs, tz)}`;
  }

  // Past events: show month and day(s), e.g. "July 7" or "July 7-8"
  function formatPastEventDate(ev, tz) {
    if (isNaN(ev.startTs)) return '';
    const s = new Date(ev.startTs);
    const e = new Date(ev.endTs);
    const monthOpts = { month: 'long' };
    if (tz) monthOpts.timeZone = tz;
    const monthFmt = new Intl.DateTimeFormat(undefined, monthOpts);
    if (ev.isDateOnly && ev.endTs > ev.startTs) {
      const sameMonthYear = s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth();
      if (sameMonthYear) {
        return `${monthFmt.format(s)} ${s.getDate()}-${e.getDate()}`;
      }
    }
    const dayOpts = { day: 'numeric' };
    if (tz) dayOpts.timeZone = tz;
    const dayFmt = new Intl.DateTimeFormat(undefined, dayOpts);
    return `${monthFmt.format(s)} ${dayFmt.format(s)}`;
  }

  /***********************
   * Rendering (Templates)
   ***********************/
  function getTpl(id) {
    const tpl = document.getElementById(id);
    if (!tpl || !(tpl instanceof HTMLTemplateElement)) {
      console.warn('Template missing', id);
      return null;
    }
    return tpl;
  }

  function cloneTpl(id) {
    const tpl = getTpl(id);
    return tpl ? tpl.content.firstElementChild.cloneNode(true) : null;
  }

  function renderEventCard(ev, isPast) {
    const node = cloneTpl('tpl-event-card');
    if (!node) return null;

    const titleEl = node.querySelector('.event-title');
    const descEl = node.querySelector('.event-desc');
    const logoEl = node.querySelector('.event-logo');
    const timeEl = node.querySelector('.event-time');
    const platformEl = node.querySelector('.event-platform');
    const linkEl = node.querySelector('.event-card-link');

    if (titleEl) titleEl.textContent = ev.title;
    if (descEl) {
      if (ev.subTitle) {
        descEl.textContent = ev.subTitle;
        descEl.style.display = '';
      } else {
        descEl.style.display = 'none';
      }
    }
    if (logoEl) {
      if (ev.logo) {
        logoEl.src = ev.logo;
      } else {
        logoEl.style.display = 'none';
      }
    }
    if (timeEl) {
      const countdownSpan = timeEl.querySelector('.event-countdown');
      if (isPast) {
        // Past events: show month and day(s), e.g. "July 7" or "July 7-8" for multi-day events
        timeEl.childNodes[0].textContent = formatPastEventDate(ev, currentTimeZone);
        timeEl.setAttribute('datetime', new Date(ev.startTs).toISOString());
        // Hide countdown for past events
        if (countdownSpan) countdownSpan.style.display = 'none';
      } else {
        timeEl.childNodes[0].textContent = formatEventDateRange(ev, currentTimeZone);
        timeEl.setAttribute('datetime', new Date(ev.startTs).toISOString());
        // Show countdown for upcoming timed events
        if (countdownSpan && !ev.isDateOnly && ev.startTs > Date.now()) {
          countdownSpan.dataset.countdown = String(ev.startTs);
          countdownSpan.style.display = '';
        } else if (countdownSpan) {
          countdownSpan.style.display = 'none';
        }
      }
    }
    if (platformEl) {
      platformEl.textContent = ev.location || '';
      if (!ev.location) platformEl.style.display = 'none';
    }

    if (linkEl) {
      if (ev.external && ev.url) {
        // External event: set href and external link attributes
        linkEl.setAttribute('href', ev.url);
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'external nofollow');
      } else {
        // Internal event: use href="#" and open dialog on click
        linkEl.setAttribute('href', '#');
        linkEl.addEventListener('click', (e) => {
          e.preventDefault();
          openDialog(ev);
        });
      }
    }

    // Configure calendar button for upcoming events
    const calendarBtn = node.querySelector('.add-to-calendar-btn');
    if (calendarBtn) {
      if (!isPast) {
        calendarBtn.id = `calbtn-${ev.id}`;
        calendarBtn.style.display = '';
        calendarBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault(); // Prevent external link navigation
          populateAndShowCalendarPopover(ev, calendarBtn);
        });
      } else {
        calendarBtn.style.display = 'none';
      }
    }

    return node;
  }

  function renderEventsList(model) {
    const upcomingContainer = document.getElementById('upcoming-events');
    const pastContainer = document.getElementById('past-events');
    if (!upcomingContainer || !pastContainer) return;

    const upcoming = model.events.filter(e => !isEventPast(e)).sort((a, b) => a.startTs - b.startTs);
    const past = model.events.filter(e => isEventPast(e)).sort((a, b) => b.startTs - a.startTs);

    // Preserve "Add Event" item
    const submitItem = upcomingContainer.querySelector('.submit-event');

    // Remove only dynamically generated upcoming items (keep submit-item)
    upcomingContainer.querySelectorAll(':scope > li:not(.submit-event)').forEach(li => li.remove());
    pastContainer.innerHTML = '';

    upcoming.forEach(ev => {
      const card = renderEventCard(ev);
      if (card) {
        if (submitItem) {
          upcomingContainer.insertBefore(card, submitItem);
        } else {
          upcomingContainer.appendChild(card);
        }
      }
    });

    // Group past events by year (descending). Insert a year separator BEFORE each year's block.
    let currentYear = null;
    past.forEach(ev => {
      const y = new Date(ev.startTs).getFullYear();
      if (y !== currentYear) {
        currentYear = y;
        const sep = cloneTpl('tpl-year-separator');
        if (sep) {
          const yearLabel = sep.querySelector('.year-label');
          if (yearLabel) yearLabel.textContent = y;
          pastContainer.appendChild(sep);
        }
      }
      const card = renderEventCard(ev, true);
      if (card) pastContainer.appendChild(card);
    });
  }

  function buildSpeakerItem(person) {
    const node = cloneTpl('tpl-speaker-item');
    if (!node) return null;

    const avatarImage = node.querySelector('.speaker-photo');
    const nameEl = node.querySelector('.speaker-name');
    const companyEl = node.querySelector('.speaker-company');
    const socialsEl = node.querySelector('.speaker-socials');

    if (nameEl) nameEl.textContent = person.name || '';
    if (companyEl) companyEl.textContent = person.company || '';

    if (avatarImage) {
      if (person.photo && person.photo !== "./") {
        avatarImage.setAttribute('src', person.photo);
      } else {
        // For speakers without photos, use initials as data attribute
        avatarImage.style.display = 'none';
        const speakerImageDiv = avatarImage.parentElement;
        if (speakerImageDiv) {
          speakerImageDiv.setAttribute('data-initials', initials(person.name));
        }
      }
    }

    if (socialsEl) {
      socialsEl.innerHTML = '';
      socialsEl.appendChild(buildSocialLinks(person));
    }
    return node;
  }

  function buildSocialLinks(p) {
    const defs = [
      ['twitter', p.twitter, h => `https://twitter.com/${h}`, 'twitter'],
      ['github', p.github, h => `https://github.com/${h}`, 'github'],
      ['linkedin', p.linkedin, h => `https://www.linkedin.com/in/${h}`, 'linkedin'],
      ['bluesky', p.bluesky, h => `https://bsky.app/profile/${h}.bsky.social`, 'bluesky']
    ];
    const fragment = document.createDocumentFragment();
    defs.forEach(([icon, handle, fn, sprite]) => {
      if (!handle) return;
      const link = cloneTpl('tpl-social-link');
      if (link) {
        link.setAttribute('href', fn(handle));
        link.setAttribute('aria-label', icon);
        const use = link.querySelector('use');
        if (use) use.setAttribute('xlink:href', `images/icons/sprite.svg#${sprite}`);
        fragment.appendChild(link);
      }
    });
    return fragment;
  }

  function initials(name = '') {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('');
  }

  /**
   * Normalizes a string by removing punctuation and extra whitespace.
   * Used for fuzzy name matching.
   *
   * @param {string} str - String to normalize
   * @returns {string} Normalized string
   */
  function normalizeString(str) {
    return str.replace(/[^a-z0-9]+/g, ' ').trim();
  }

  /**
   * Resolves a speaker reference to a person object.
   * Attempts multiple strategies in order of precision:
   * 1. Direct ID lookup
   * 2. Case-insensitive name match
   * 3. Normalized name match (removes punctuation, handles partial matches)
   *
   * @param {string} speakerRef - Speaker ID or name from event data
   * @param {Object} personsMap - Map of person IDs to person objects
   * @returns {Object|null} Person object if found, null otherwise
   */
  function resolveSpeaker(speakerRef, personsMap) {
    if (!speakerRef) return null;

    // Strategy 1: Direct ID lookup (fastest, most reliable)
    if (personsMap[speakerRef]) {
      return personsMap[speakerRef];
    }

    // For fallback strategies, we need to search through all persons
    const personsArray = Object.values(personsMap);

    // Strategy 2: Case-insensitive exact name match
    const lowerRef = String(speakerRef).toLowerCase();
    const exactMatch = personsArray.find(person =>
      String(person.name).toLowerCase() === lowerRef
    );
    if (exactMatch) {
      return exactMatch;
    }

    // Strategy 3: Normalized fuzzy match
    // Handles variations in punctuation/spacing and partial name matches
    const normalizedRef = normalizeString(lowerRef);
    const fuzzyMatch = personsArray.find(person => {
      const normalizedName = normalizeString(String(person.name).toLowerCase());
      return normalizedName === normalizedRef || normalizedName.startsWith(normalizedRef);
    });

    return fuzzyMatch || null;
  }

  /***********************
   * Dialog Rendering
   ***********************/
  function openDialog(ev) {
    const dialog = document.getElementById('eventDialog');
    if (!dialog) return;

    // update URL hash without triggering page reload
    if (ev.id) {
      history.pushState(null, '', `#id=${ev.id}`);
    }

    const wrapper = cloneTpl('tpl-dialog-content');
    if (!wrapper) return;

    // Fill basic fields
    const titleEl = wrapper.querySelector('.event-title');
    const descEl = wrapper.querySelector('.event-desc');
    const logoEl = wrapper.querySelector('.event-logo');
    const timeEl = wrapper.querySelector('.event-time');
    const platformEl = wrapper.querySelector('.event-platform');
    const bodyEl = wrapper.querySelector('.event-body');
    const speakersList = wrapper.querySelector('.event-speaker-list');
    const linksEl = wrapper.querySelector('.event-links');

    if (titleEl) titleEl.textContent = ev.title;
    if (descEl) {
      if (ev.subTitle) {
        descEl.textContent = ev.subTitle;
      } else {
        descEl.style.display = 'none';
      }
    }
    if (logoEl) {
      if (ev.logo) {
        logoEl.src = ev.logo;
      } else {
        logoEl.style.display = 'none';
      }
    }
    if (timeEl) {
      timeEl.textContent = formatEventDateRange(ev, currentTimeZone);
      timeEl.setAttribute('datetime', new Date(ev.startTs).toISOString());
    }
    if (platformEl) {
      platformEl.textContent = ev.location || '';
      if (!ev.location) platformEl.style.display = 'none';
    }
    if (bodyEl) {
      if (ev.body) {
        try {
          // Preprocess markdown: encode spaces in mailto: URLs inside link parentheses so Marked can parse them.
          // Example: [Contact](mailto:team@example.com?subject=Hello World) → spaces become %20.
          const preprocessedBody = ev.body.replace(/\(mailto:[^)]+?\)/g, (m) => {
            const inner = m.slice(1, -1).replace(/ /g, '%20'); // replace literal spaces only
            return '(' + inner + ')';
          });
          bodyEl.innerHTML = marked.parse(preprocessedBody);
        } catch {
          bodyEl.textContent = ev.body;
        }
      } else {
        bodyEl.style.display = 'none';
      }
    }
    if (speakersList) {
      speakersList.innerHTML = '';
      if (Array.isArray(ev.speakers) && ev.speakers.length) {
        ev.speakers.forEach(speakerRef => {
          const person = resolveSpeaker(speakerRef, personsMap);

          if (person) {
            const speakerItem = buildSpeakerItem(person);
            if (speakerItem) {
              speakersList.appendChild(speakerItem);
            }
          } else {
            console.warn('[events-loader] Speaker not found:', speakerRef);
          }
        });
      } else {
        speakersList.parentElement.style.display = 'none';
      }
    }
    if (linksEl) {
      linksEl.innerHTML = '';
      const links = [];

      if (ev.recordingUrl && isEventPast(ev)) {
        const recordingLink = cloneTpl('tpl-dialog-link-recording');
        if (recordingLink) {
          recordingLink.setAttribute('href', ev.recordingUrl);
          links.push(recordingLink);
        }
      }

      if (!isEventPast(ev) && ev.url && !ev.external) {
        const joinLink = cloneTpl('tpl-dialog-link-join');
        if (joinLink) {
          joinLink.setAttribute('href', ev.url);
          links.push(joinLink);
        }
      }

      if (links.length > 0) {
        links.forEach((link, index) => {
          linksEl.appendChild(link);
          if (index < links.length - 1) {
            linksEl.appendChild(document.createTextNode(' | '));
          }
        });
      } else {
        linksEl.style.display = 'none';
      }
    }

    // Clear previous dynamic content safely
    dialog.innerHTML = '';
    dialog.appendChild(wrapper);
    dialog.setAttribute('aria-label', ev.title || 'Event details');

    // Show popover - native API handles backdrop clicks and ESC key automatically
    dialog.showPopover();
  }

  /**
   * Parse URL hash and extract event ID
   * Expected format: #id=EVENT_ID
   * @returns {string|null} Event ID or null if not found
   */
  function getEventIdFromHash() {
    const hash = window.location.hash;
    if (!hash) return null;
    
    const match = hash.match(/^#id=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  /**
   * Open dialog for event specified in URL hash
   * @param {Object} model - The events model containing all events
   */
  function openDialogFromHash(model) {
    const eventId = getEventIdFromHash();
    if (!eventId) return;

    const event = model.events.find(ev => ev.id === eventId);
    if (event) {
      openDialog(event);
    } else {
      console.warn(`[events-loader] Event not found for hash: ${eventId}`);
    }
  }

  /**
   * Setup dialog close event listener
   */
  function setupDialogCloseListener() {
    const dialog = document.getElementById('eventDialog');
    if (!dialog) return;

    // Listen for the toggle event to detect when dialog closes
    dialog.addEventListener('toggle', (e) => {
      // When dialog closes (newState is 'closed'), clear the URL hash
      if (e.newState === 'closed') {
        const currentEventId = getEventIdFromHash();
        // Only clear hash if there's an event ID in the hash
        if (currentEventId) {
          // Use replaceState to update current history entry without creating a new one
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    });
  }

  /**
   * Setup browser back/forward button handling
   * @param {Object} model - The events model containing all events
   */
  function setupPopstateListener(model) {
    window.addEventListener('popstate', () => {
      const eventId = getEventIdFromHash();
      const dialog = document.getElementById('eventDialog');
      
      if (eventId) {
        // Hash present: open dialog for this event
        const event = model.events.find(ev => ev.id === eventId);
        if (event) {
          openDialog(event);
        }
      } else {
        // No hash: close dialog if it's open
        if (dialog && dialog.matches(':popover-open')) {
          dialog.hidePopover();
        }
      }
    });
  }

  /***********************
   * Countdown
   ***********************/
  function startCountdowns() {
    function update() {
      const now = Date.now();
      document.querySelectorAll('.event-countdown[data-countdown]').forEach(el => {
        const start = +el.dataset.countdown;
        const diff = start - now;
        if (diff <= 0) {
          el.textContent = '';
          return;
        }
        const sec = Math.floor(diff / 1000);
        const d = Math.floor(sec / 86400);
        const h = Math.floor((sec % 86400) / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        el.textContent = `${d}d ${pad(h)}:${pad(m)}:${pad(s)}`;
      });
    }
    function pad(n) { return n.toString().padStart(2, '0'); }
    update();
    setInterval(update, 1000);
  }

  /***********************
   * Calendar Popover
   ***********************/
  function buildCalendarEvent(ev) {
    // Convert event data to format expected by calendar generator
    let startDate, endDate;

    if (ev.isDateOnly) {
      // Format as YYYY/MM/DD for date-only events
      const startD = new Date(ev.startTs);
      const endD = new Date(ev.endTs);
      startDate = `${startD.getFullYear()}/${String(startD.getMonth() + 1).padStart(2, '0')}/${String(startD.getDate()).padStart(2, '0')}`;
      endDate = `${endD.getFullYear()}/${String(endD.getMonth() + 1).padStart(2, '0')}/${String(endD.getDate()).padStart(2, '0')}`;
    } else {
      // Use ISO string for timed events
      startDate = new Date(ev.startTs).toISOString();
      endDate = new Date(ev.endTs).toISOString();
    }

    // Build description
    let description = '';
    if (ev.body) {
      // Strip basic markdown and HTML
      const bodyText = ev.body.replace(/<[^>]*>/g, '').replace(/[#*_`]/g, '').trim();
      if (bodyText) {
        description = bodyText;
      }
    } else if (ev.subTitle) {
      description = ev.subTitle;
    } else {
      description = ev.title;
    }

    return {
      id: ev.id,
      title: ev.title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      location: ev.location || '',
      url: ev.url || 'https://openui5.org/events'
    };
  }

  function populateAndShowCalendarPopover(ev, button) {
    const popover = document.getElementById('calendar-popover');
    if (!popover) return;

    // Check if calendar generator is available
    if (typeof window.calendarGenerate !== 'function') {
      console.warn('Calendar generator not available');
      return;
    }

    const calEvent = buildCalendarEvent(ev);

    // Generate calendar links
    const googleLink = window.calendarGenerate('google', calEvent);
    const office365Link = window.calendarGenerate('office365', calEvent);
    const icsLink = window.calendarGenerate('ics', calEvent);

    // Update the href and download attributes of existing links
    const googleEl = document.getElementById('cal-google');
    const office365El = document.getElementById('cal-office365');
    const icalEl = document.getElementById('cal-ical');
    const outlookEl = document.getElementById('cal-outlook');

    const downloadFilename = `${ev.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`;

    if (googleEl) googleEl.setAttribute('href', googleLink);
    if (office365El) office365El.setAttribute('href', office365Link);
    if (icalEl) {
      icalEl.setAttribute('href', icsLink);
      icalEl.setAttribute('download', downloadFilename);
    }
    if (outlookEl) {
      outlookEl.setAttribute('href', icsLink);
      outlookEl.setAttribute('download', downloadFilename);
    }

    // Position popover relative to button
    // CSS anchor positioning is not yet widely supported, so we use manual positioning
    const rect = button.getBoundingClientRect();

    // Calculate position: centered below button
    const left = rect.left + (rect.width + 20);
    const top = rect.bottom + 8;

    popover.style.position = 'fixed';
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    popover.style.transform = 'translateX(-50%)';
    popover.style.margin = '0';

    // Show popover
    popover.showPopover();

    // Focus first link for accessibility
    const firstLink = popover.querySelector('a');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 0);
    }

    // Add keyboard navigation
    const handleKeyNav = (e) => {
      const links = Array.from(popover.querySelectorAll('a'));
      const current = document.activeElement;
      const index = links.indexOf(current);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = links[(index + 1) % links.length];
        if (next) next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = links[(index - 1 + links.length) % links.length];
        if (prev) prev.focus();
      } else if (e.key === 'Escape') {
        popover.hidePopover();
      }
    };

    popover.addEventListener('keydown', handleKeyNav);

    // Clean up event listener when popover closes
    const cleanup = () => {
      popover.removeEventListener('keydown', handleKeyNav);
      popover.removeEventListener('toggle', cleanup);
    };
    popover.addEventListener('toggle', cleanup);
  }

  /***********************
   * Init
   ***********************/
  async function init() {
    try {
      const [eventsMd, personsMd] = await Promise.all([
        fetchText(EVENTS_MD_URL),
        fetchText(PERSONS_MD_URL)
      ]);

      const rawEvents = parseFencedYamlBlocks(eventsMd);
      const rawPersons = parseFencedYamlBlocks(personsMd);
      const model = buildModel(rawEvents, rawPersons);

      personsMap = model.personsMap;

      renderEventsList(model);
      startCountdowns();

      // setup dialog close listener to clear URL hash
      setupDialogCloseListener();

      // setup browser back/forward button handling
      setupPopstateListener(model);

      // check if URL hash contains an event ID and open dialog if so
      openDialogFromHash(model);

      // Time zone switcher: toggle between local time ("Your time") and Europe/Berlin
      const tzSwitcher = document.querySelector('.timezone');
      if (tzSwitcher) {
        const links = tzSwitcher.querySelectorAll('a');
        const localLink = links[0];
        const berlinLink = links[1];
        const setActive = (isBerlin) => {
          if (isBerlin) {
            localLink.classList.remove('active');
            berlinLink.classList.add('active');
          } else {
            localLink.classList.add('active');
            berlinLink.classList.remove('active');
          }
        };
        if (localLink) {
          localLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentTimeZone) {
              currentTimeZone = undefined; // user's local time
              setActive(false);
              renderEventsList(model); // re-render with new selection
            }
          });
        }
        if (berlinLink) {
          berlinLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentTimeZone !== 'Europe/Berlin') {
              currentTimeZone = 'Europe/Berlin';
              setActive(true);
              renderEventsList(model); // re-render with new selection
            }
          });
        }
      }
    } catch (e) {
      console.error('Events initialization failed:', e);
      const up = document.getElementById('upcoming-events');
      if (up) up.innerHTML = '<li class="latest-event" role="listitem"><p>Event data unavailable.</p></li>';
    }
  }

  window.addEventListener('load', init); // ensure UI5 bundle loaded first

})();
