'use strict';

// ========================
// Constants
// ========================
const API_BASE_URL = "https://ui5con.cfapps.eu12.hana.ondemand.com/api";
const API_ENDPOINTS = {
  speakerLineup: `${API_BASE_URL}/speaker/lineup`,
  proposalLineup: `${API_BASE_URL}/proposal/lineup`,
};

const EVENT_DATE = "2026-07-14";
const EVENT_TIMEZONE = "+02:00";
const EVENT_START_TIME = `${EVENT_DATE}T00:50:00.000${EVENT_TIMEZONE}`;
const EVENT_END_TIME = `${EVENT_DATE}T18:10:00.000${EVENT_TIMEZONE}`;
const UPDATE_INTERVAL_MS = 30000; // 30 seconds

// Location mapping for display
const LOCATION_MAP = {
  audimax: "Audimax",
  w1: "W1/W2",
  w2: "W1/W2",
  w3: "W3",
  expert: "Expert Corner",
  canteen: "Canteen",
};

// ========================
// Utility Functions
// ========================

/**
 * Pads a time string with leading zero if needed (e.g., "9:30" -> "09:30")
 */
function padTimeComponent(timeStr) {
  if (!timeStr) return timeStr;

  const colonIndex = timeStr.indexOf(":");
  if (colonIndex === -1) return timeStr;

  const hours = timeStr.substring(0, colonIndex);
  if (hours.length === 1 && !hours.startsWith("0")) {
    return `0${timeStr}`;
  }
  return timeStr;
}

/**
 * Converts a time string (e.g., "9:30") to ISO 8601 format
 */
function timeToISO(timeStr) {
  const paddedTime = padTimeComponent(timeStr);
  return `${EVENT_DATE}T${paddedTime}:00.000${EVENT_TIMEZONE}`;
}

/**
 * Checks if current time is within the event window
 */
function isWithinEventWindow(now) {
  const startTime = new Date(EVENT_START_TIME);
  const endTime = new Date(EVENT_END_TIME);
  return now > startTime && now <= endTime;
}

/**
 * Decodes HTML entities in a string
 */
function decodeHtmlEntities(html) {
  if (!html) return '';
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

// ========================
// Vue App Factory
// ========================

/**
 * Creates a Vue app instance for displaying session lineup
 * @param {string} mountElementId - DOM element ID to mount the app
 * @param {Function} roomFilterFn - Function to filter sessions by room/location
 */
function createLineupApp(mountElementId, roomFilterFn) {
  const { createApp } = Vue;

  const app = createApp({
    data() {
      return {
        lineup: [],
        formattedLineup: [],
        updateIntervalId: null,
        isLoading: true,
        error: null,
      };
    },
    computed: {
      /**
       * Returns only non-past events for display
       * More efficient than using v-show or inline styles
       */
      visibleEvents() {
        return this.formattedLineup.filter(event => !event.isPast);
      }
    },
    async mounted() {
      await this.fetchLineup();
      this.startAutoUpdate();

      // Store app instance globally for debug access
      if (window.DebugMonitor) {
        window.DebugMonitor._appInstance = this;
      }
    },
    beforeUnmount() {
      this.stopAutoUpdate();
    },
    methods: {
      /**
       * Fetches proposal lineup from API and initializes data
       */
      async fetchLineup() {
        try {
          this.isLoading = true;
          this.error = null;

          const response = await fetch(API_ENDPOINTS.proposalLineup);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const proposalData = await response.json();
          this.lineup = proposalData.filter(roomFilterFn);
          this.formattedLineup = this.formatLineup();

        } catch (error) {
          console.error('Failed to fetch proposal lineup:', error);
          this.error = error.message;
          this.lineup = [];
          this.formattedLineup = [];
        } finally {
          this.isLoading = false;
        }
      },

      /**
       * Formats the lineup with ISO timestamps and live/past status
       */
      formatLineup() {
        const now = new Date();

        const formatted = this.lineup.map((session) => {
          const startTimeISO = timeToISO(session.startTime);
          const endTimeISO = timeToISO(session.endTime);

          const startDate = new Date(startTimeISO);
          const endDate = new Date(endTimeISO);

          return {
            ...session,
            startTime: startTimeISO,
            endTime: endTimeISO,
            isLive: now >= startDate && now < endDate,
            isPast: now >= endDate,
          };
        });

        // Sort by start time using Luxon
        return formatted.sort((a, b) =>
          luxon.DateTime.fromISO(a.startTime) - luxon.DateTime.fromISO(b.startTime)
        );
      },

      /**
       * Updates the live and past status of all sessions
       * More efficient than reformatting the entire lineup
       */
      updateLiveSession() {
        const now = new Date();

        this.formattedLineup.forEach((session) => {
          const startDate = new Date(session.startTime);
          const endDate = new Date(session.endTime);

          session.isLive = now >= startDate && now < endDate;
          session.isPast = now >= endDate;
        });
      },

      /**
       * Starts automatic updates if within event window
       */
      startAutoUpdate() {
        const now = new Date();

        if (isWithinEventWindow(now)) {
          this.updateIntervalId = setInterval(() => {
            const currentTime = new Date();

            // Stop updates if event has ended
            if (!isWithinEventWindow(currentTime)) {
              this.stopAutoUpdate();
              return;
            }

            this.updateLiveSession();
          }, UPDATE_INTERVAL_MS);
        }
      },

      /**
       * Stops automatic updates
       */
      stopAutoUpdate() {
        if (this.updateIntervalId) {
          clearInterval(this.updateIntervalId);
          this.updateIntervalId = null;
        }
      },

      /**
       * Returns CSS class object for location badge
       */
      getLocationClass(location) {
        if (!location) return {};

        const lower = location.toLowerCase();
        return {
          w1: lower.includes('w1') || lower.includes('w2'),
          w3: lower.includes('w3'),
          experts: lower.includes('expert'),
          canteen: lower.includes('canteen'),
          other: lower.includes('other') && !lower.includes('w1') && !lower.includes('w2') && !lower.includes('w3'),
        };
      },

      /**
       * Formats time for display (removes leading zeros from hours)
       */
      trimTime(value) {
        if (!value) return '';

        const time = value.substring(value.indexOf("T") + 1);
        const [hour, minute] = time.split(":");
        const trimmedHour = hour.startsWith("0") ? hour.substring(1) : hour;

        return `${trimmedHour}:${minute}`;
      },

      /**
       * Formats location name for display
       */
      formatLocation(value) {
        if (!value) return '';

        const lowerValue = value.toLowerCase();

        // Check each location mapping
        for (const [key, displayName] of Object.entries(LOCATION_MAP)) {
          if (lowerValue.includes(key)) {
            return displayName;
          }
        }

        // Return original value if no match found
        return value;
      },

      /**
       * Formats proficiency level (capitalizes first letter)
       */
      formatLevel(value) {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
      },

      /**
       * Decodes HTML entities in text
       */
      decodeHtml(value) {
        return decodeHtmlEntities(value);
      }
    }
  });

  return app.mount(`#${mountElementId}`);
}
