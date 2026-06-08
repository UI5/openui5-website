/**
 * Debug utilities for testing agenda/program functionality
 *
 * Usage:
 * 1. Include this script in your program.html:
 *    <script src="./js/agenda-debug.js"></script>
 *
 * 2. Open browser console and use:
 *    DebugAgenda.setTestTime('2026-07-14T09:30:00+02:00')
 *    DebugAgenda.setTestTime('2026-07-14T14:45:00+02:00')
 *    DebugAgenda.reset()
 *
 * 3. Or use the UI controls that appear at the top of the page
 */

(function() {
  'use strict';

  // Store original Date constructor
  const OriginalDate = Date;
  let mockTime = null;

  // Global debug object
  window.DebugAgenda = {
    _appInstance: null, // Will be set when the Vue app mounts

    /**
     * Set a specific time to simulate
     * @param {string} isoString - ISO 8601 date string (e.g., '2026-07-14T09:30:00+02:00')
     */
    setTestTime(isoString) {
      mockTime = new OriginalDate(isoString);
      console.log('🕐 Test time set to:', mockTime.toISOString());
      console.log('   Local time:', mockTime.toLocaleString());

      // Trigger a re-render if Vue app exists
      this.refreshApp();
    },

    /**
     * Reset to real time
     */
    reset() {
      mockTime = null;
      console.log('✅ Test time reset - using real time now');
      this.refreshApp();
    },

    /**
     * Get current mock time or real time
     */
    getCurrentTime() {
      return mockTime || new OriginalDate();
    },

    /**
     * Set time to a session start (useful for testing if slot is live)
     */
    setToSessionStart(sessionTitle) {
      const app = this.getVueApp();
      if (!app) {
        console.error('Vue app not found');
        return;
      }

      const session = app.formattedLineup.find(s =>
        s.title.toLowerCase().includes(sessionTitle.toLowerCase())
      );

      if (session) {
        // Set time to 5 minutes after start
        const startTime = new OriginalDate(session.startTime);
        startTime.setMinutes(startTime.getMinutes() + 5);
        this.setTestTime(startTime.toISOString());
        console.log('📍 Set to session:', session.title);
      } else {
        console.error('Session not found:', sessionTitle);
      }
    },

    /**
     * Jump to event start time
     */
    jumpToEventStart() {
      this.setTestTime('2026-07-14T08:55:00+02:00');
    },

    /**
     * Jump to mid-morning (should show live sessions)
     */
    jumpToMidMorning() {
      this.setTestTime('2026-07-14T10:30:00+02:00');
    },

    /**
     * Jump to lunch time
     */
    jumpToLunch() {
      this.setTestTime('2026-07-14T12:15:00+02:00');
    },

    /**
     * Jump to afternoon
     */
    jumpToAfternoon() {
      this.setTestTime('2026-07-14T15:00:00+02:00');
    },

    /**
     * Jump to event end
     */
    jumpToEventEnd() {
      this.setTestTime('2026-07-14T18:15:00+02:00');
    },

    /**
     * Get Vue app instance
     */
    getVueApp() {
      return this._appInstance;
    },

    /**
     * Refresh the Vue app - recalculates all session times
     */
    refreshApp() {
      const vueInstance = this.getVueApp();

      if (vueInstance) {
        console.log('🔄 Refreshing Vue app with new time...');

        // Update live session status with the new mocked time
        if (vueInstance.updateLiveSession) {
          vueInstance.updateLiveSession();
        }

        // Force Vue to re-evaluate computed properties and re-render
        if (vueInstance.$forceUpdate) {
          vueInstance.$forceUpdate();
          console.log('✅ Forced Vue re-render');
        }

        // Log current session state
        const liveSlots = this.getLiveSessions();
        console.log(`   Live sessions: ${liveSlots.length}`);
        if (liveSlots.length > 0) {
          console.log('   Currently live:', liveSlots.map(s => s.title).join(', '));
        }
      } else {
        console.warn('⚠️ Vue app not ready yet. Wait a moment and try again.');
      }
    },

    /**
     * Get currently live sessions
     */
    getLiveSessions() {
      const app = this.getVueApp();
      if (!app || !app.formattedLineup) {
        return [];
      }

      const now = this.getCurrentTime();
      return app.formattedLineup.filter(session => {
        if (!session.startTime || !session.endTime) return false;
        const start = new OriginalDate(session.startTime);
        const end = new OriginalDate(session.endTime);
        return now >= start && now < end;
      });
    },

    /**
     * Show debug UI
     */
    showUI() {
      if (document.getElementById('debug-agenda-ui')) {
        return; // Already shown
      }

      const ui = document.createElement('div');
      ui.id = 'debug-agenda-ui';
      ui.innerHTML = `
        <style>
          #debug-agenda-ui {
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }
          #debug-agenda-ui h3 {
            margin: 0 0 10px 0;
            font-size: 14px;
            color: #ffa500;
          }
          #debug-agenda-ui .time-display {
            background: rgba(255, 255, 255, 0.1);
            padding: 8px;
            border-radius: 4px;
            margin-bottom: 10px;
            font-size: 11px;
          }
          #debug-agenda-ui button {
            background: #007bff;
            color: white;
            border: none;
            padding: 6px 12px;
            margin: 2px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
          }
          #debug-agenda-ui button:hover {
            background: #0056b3;
          }
          #debug-agenda-ui button.reset {
            background: #dc3545;
          }
          #debug-agenda-ui button.reset:hover {
            background: #c82333;
          }
          #debug-agenda-ui .close-btn {
            position: absolute;
            top: 5px;
            right: 5px;
            background: transparent;
            color: #999;
            font-size: 16px;
            padding: 0;
            width: 20px;
            height: 20px;
          }
          #debug-agenda-ui input {
            width: 100%;
            padding: 6px;
            margin: 5px 0;
            border: 1px solid #555;
            border-radius: 4px;
            background: rgba(255,255,255,0.1);
            color: white;
            font-family: monospace;
            font-size: 11px;
          }
          #debug-agenda-ui .live-sessions {
            background: rgba(76, 175, 80, 0.2);
            padding: 8px;
            border-radius: 4px;
            margin-top: 10px;
            font-size: 11px;
            border-left: 3px solid #4caf50;
          }
          #debug-agenda-ui .live-sessions strong {
            color: #4caf50;
          }
        </style>
        <button class="close-btn" onclick="this.parentElement.remove()">×</button>
        <h3>🐛 Debug Agenda</h3>
        <div class="time-display">
          <strong>Current Time:</strong><br>
          <span id="current-time-display">—</span>
        </div>
        <div class="live-sessions">
          <strong>Live Now:</strong><br>
          <span id="live-sessions-display">—</span>
        </div>
        <div>
          <input type="datetime-local" id="custom-time-input" step="1">
          <button onclick="DebugAgenda.setCustomTime()">Set Custom Time</button>
        </div>
        <div style="margin-top: 10px;">
          <strong>Quick Jump:</strong><br>
          <button onclick="DebugAgenda.jumpToEventStart()">Event Start (8:55)</button>
          <button onclick="DebugAgenda.jumpToMidMorning()">Mid Morning (10:30)</button>
          <button onclick="DebugAgenda.jumpToLunch()">Lunch (12:15)</button>
          <button onclick="DebugAgenda.jumpToAfternoon()">Afternoon (15:00)</button>
          <button onclick="DebugAgenda.jumpToEventEnd()">Event End (18:15)</button>
        </div>
        <div style="margin-top: 10px;">
          <button class="reset" onclick="DebugAgenda.reset()">Reset to Real Time</button>
        </div>
      `;

      document.body.appendChild(ui);

      // Update time display every second
      setInterval(() => {
        const timeEl = document.getElementById('current-time-display');
        const liveEl = document.getElementById('live-sessions-display');

        if (timeEl) {
          const now = DebugAgenda.getCurrentTime();
          const isMocked = mockTime !== null;
          timeEl.innerHTML = `
            ${now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' })}<br>
            <small style="color: ${isMocked ? '#ffa500' : '#0f0'}">
              ${isMocked ? '⚠️ MOCK TIME' : '✓ Real time'}
            </small>
          `;
        }

        if (liveEl) {
          const liveSessions = DebugAgenda.getLiveSessions();
          if (liveSessions.length > 0) {
            liveEl.innerHTML = liveSessions.map(s =>
              `<div style="margin: 2px 0;">• ${s.title.substring(0, 30)}...</div>`
            ).join('');
          } else {
            liveEl.innerHTML = '<em style="color: #999;">No sessions live</em>';
          }
        }
      }, 1000);
    },

    /**
     * Set custom time from input field
     */
    setCustomTime() {
      const input = document.getElementById('custom-time-input');
      if (!input || !input.value) {
        console.error('No time selected');
        return;
      }

      // Convert local datetime to ISO with Berlin timezone offset
      const localDate = new OriginalDate(input.value);
      const isoString = localDate.toISOString().replace('Z', '+02:00');
      this.setTestTime(isoString);
    }
  };

  // Override Date constructor only when mock time is set
  window.Date = function(...args) {
    if (args.length === 0 && mockTime) {
      return new OriginalDate(mockTime);
    }
    return new OriginalDate(...args);
  };

  // Copy static methods from original Date
  Object.setPrototypeOf(window.Date, OriginalDate);
  Object.setPrototypeOf(window.Date.prototype, OriginalDate.prototype);
  window.Date.now = function() {
    return mockTime ? mockTime.getTime() : OriginalDate.now();
  };

  // Only auto-show UI if explicitly in debug mode (check for data attribute or test page)
  if (document.documentElement.hasAttribute('data-debug-mode')) {
    setTimeout(() => {
      if (document.body) {
        DebugAgenda.showUI();
      }
    }, 1000);
  }
})();
