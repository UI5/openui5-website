'use strict';
/**
 * Events Loader (Separation: Data vs Presentation)
 * - Phase 1: Fetch + Parse fenced YAML blocks into plain JS objects (no DOM work)
 * - Phase 2: Render using HTML <template> elements (cards, dialog, speakers)
 * - Dialog uses UI5 Web Components bundle (dialog.open())
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
        console.warn('[events-loader] timezone parse fallback used for', str, e);
        // Fallback: treat provided wall time as local browser time (may be wrong but better than NaN)
        return { ts: new Date(+y, +mo - 1, +d, +h, +mi, 0).getTime(), isDateOnly: false };
      }
    }
    m = DATE_ONLY_RE.exec(trimmed);
    if (m) {
      const [_, y, mo, d] = m;
      return { ts: new Date(+y, +mo - 1, +d, 0, 0, 0).getTime(), isDateOnly: true };
    }
    console.warn('Date format unsupported', str);
    return { ts: NaN, isDateOnly: false };
  }

  function buildModel(eventsRaw, personsRaw) {
    const personsMap = {};
    personsRaw.forEach(p => { if (p.id) personsMap[p.id] = p; });

    const events = eventsRaw
      .filter(e => e.id && e.start && e.end && e.title)
      .map(e => {
        const start = parseDateFlexible(e.start);
        const end = parseDateFlexible(e.end);
        return {
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
        };
      });

    return { events, personsMap };
  }

  /***********************
   * Formatting Helpers
   ***********************/
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
    const tplId = ev.external && ev.url ? 'tpl-event-card-external' : 'tpl-event-card';
    const node = cloneTpl(tplId);
    if (!node) return null;

    const titleEl = node.querySelector('.event-title');
    const descEl = node.querySelector('.event-desc');
    const logoEl = node.querySelector('.event-logo');
    const timeEl = node.querySelector('.event-time');
    const platformEl = node.querySelector('.event-platform');
    const interactiveRoot = node.querySelector(ev.external ? '.event-link' : '.event-card-btn');

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
      if (isPast) {
        // Past events: show month and day(s), e.g. "July 7" or "July 7-8" for multi-day events
        timeEl.textContent = formatPastEventDate(ev, currentTimeZone);
        timeEl.setAttribute('datetime', new Date(ev.startTs).toISOString());
      } else {
        timeEl.textContent = formatEventDateRange(ev, currentTimeZone);
        timeEl.setAttribute('datetime', new Date(ev.startTs).toISOString());
        // Countdown (upcoming only)
        if (!ev.isDateOnly && ev.startTs > Date.now()) {
          const countdownSpan = document.createElement('span');
            countdownSpan.className = 'event-countdown';
            countdownSpan.dataset.countdown = String(ev.startTs);
            timeEl.appendChild(document.createTextNode(' '));
            timeEl.appendChild(countdownSpan);
        }
      }
    }
    if (platformEl) {
      platformEl.textContent = ev.location || '';
      if (!ev.location) platformEl.style.display = 'none';
    }

    if (interactiveRoot) {
      if (ev.external && ev.url) {
        interactiveRoot.setAttribute('href', ev.url);
      } else {
        interactiveRoot.dataset.eventId = ev.id;
        interactiveRoot.addEventListener('click', () => openDialog(ev));
      }
    }

    return node;
  }

  function renderEventsList(model) {
    const upcomingContainer = document.getElementById('upcoming-events');
    const pastContainer = document.getElementById('past-events');
    if (!upcomingContainer || !pastContainer) return;

    const now = Date.now();
    const upcoming = model.events.filter(e => e.startTs >= now).sort((a, b) => a.startTs - b.startTs);
    const past = model.events.filter(e => e.startTs < now).sort((a, b) => b.startTs - a.startTs);

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
        const sep = document.createElement('li');
        sep.className = 'year-separator';
        sep.setAttribute('aria-hidden', 'true');
        sep.innerHTML = `<div class="year-separator-inner"><span class="year-label">${y}</span></div>`;
        pastContainer.appendChild(sep);
      }
      const card = renderEventCard(ev, true);
      if (card) pastContainer.appendChild(card);
    });
  }

  function buildSpeakerItem(person) {
    const node = cloneTpl('tpl-speaker-item');
    if (!node) return null;

    const avatar = node.querySelector('ui5-avatar');
    const avatarImage = node.querySelector('ui5-avatar .speaker-photo');
    const nameEl = node.querySelector('.speaker-name');
    const companyEl = node.querySelector('.speaker-company');
    const socialsEl = node.querySelector('.speaker-socials');

    if (nameEl) nameEl.textContent = person.name || '';
    if (companyEl) companyEl.textContent = person.company || '';

    if (avatar) {
      if (person.photo && person.photo !== "./") {
        avatarImage.setAttribute('src', person.photo);
      } else {
        avatar.setAttribute('initials', initials(person.name));
      }
    }

    if (socialsEl) {
      socialsEl.innerHTML = buildSocialLinks(person);
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
    return defs
      .filter(([_, handle]) => !!handle)
      .map(([icon, handle, fn, sprite]) =>
        `<a href="${fn(handle)}" target="_blank" rel="external nofollow" aria-label="${icon}">
          <svg aria-hidden="true" class="icon"><use xlink:href="images/icons/sprite.svg#${sprite}"></use></svg>
        </a>`
      ).join('');
  }

  function initials(name = '') {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('');
  }

  /***********************
   * Dialog Rendering
   ***********************/
  function openDialog(ev) {
    const dialog = document.getElementById('eventDialog');
    if (!dialog) return;

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
        logoEl.src = ev.logo.replace('./logos/', 'images/events/');
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
          bodyEl.innerHTML = marked.parse(ev.body);
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
        // Speakers can be defined either by person id (preferred) or by full name.
        // Older event data uses display names which don't match ids, causing lookup failure.
        // Fallback: if direct id lookup fails, attempt case-insensitive name match across persons.
        const personsArr = Object.values(personsMap || {});
        ev.speakers.forEach(ref => {
          let person = personsMap[ref];
          if (!person) {
            const lower = String(ref).toLowerCase();
            person = personsArr.find(p => String(p.name).toLowerCase() === lower);
          }
          if (!person) {
            // Attempt loose matching by removing punctuation and comparing startsWith for multi-part names
            const norm = String(ref).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
            person = personsArr.find(p => {
              const pname = String(p.name).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
              return pname === norm || pname.startsWith(norm);
            });
          }
          if (person) {
            const item = buildSpeakerItem(person);
            if (item) speakersList.appendChild(item);
          } else {
            console.warn('[events-loader] Speaker reference not resolved:', ref);
          }
        });
      } else {
        speakersList.parentElement.style.display = 'none';
      }
    }
    if (linksEl) {
      const parts = [];
      if (ev.recordingUrl) {
        parts.push(`<a href="${ev.recordingUrl}" target="_blank" rel="external nofollow">Recording</a>`);
      }
      if (ev.url && !ev.external) {
        parts.push(`<a href="${ev.url}" target="_blank" rel="external nofollow">Join / More Info</a>`);
      }
      linksEl.innerHTML = parts.join(' | ');
      if (!parts.length) linksEl.style.display = 'none';
    }
    
    // Close on block layer click (element lives inside shadow DOM of static area)
    // We use a capturing listener and inspect the composed path for an element with class 'ui5-block-layer'.
    const handleBlockLayerClick = (e) => {
      // Only act if dialog currently open
      if (!dialog.open) return;
      const path = e.composedPath ? e.composedPath() : [];
      if (path.some(el => el && el.classList && el.classList.contains('ui5-block-layer'))) {
        dialog.open = false;
      }
    };
    // Attach once per open; remove after close to avoid stacking listeners
    document.addEventListener('click', handleBlockLayerClick, true);
    const cleanup = () => {
      document.removeEventListener('click', handleBlockLayerClick, true);
      dialog.removeEventListener('afterClose', cleanup);
    };
    dialog.addEventListener('afterClose', cleanup);

    // Clear previous dynamic content safely
    dialog.innerHTML = '';
    dialog.appendChild(wrapper);
    dialog.setAttribute('accessible-name', ev.title || 'Event details');
    dialog.open = true;
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
