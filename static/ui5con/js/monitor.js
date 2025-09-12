'use strict';

function createLineupApp(mountElementId, roomFilterFn) {
  return new Vue({
    el: `#${mountElementId}`,
    data() {
      return {
        lineup: [],
        formattedLineup: [],
        proposalLineupJson: proposalLineupJson,
      }
    },
    mounted() {
      this.lineup = proposalLineupJson.filter(roomFilterFn); // Filter by room
      this.formattedLineup = this.formatLineup();

      this.updateLiveSession();
      let interval;

      let timeNow = new Date().toISOString();

      const startCounterTime = new Date(
        "2025-07-08T00:50:00.000+02:00"
      ).toISOString();

      const endCounterTime = new Date(
        "2025-07-08T18:10:00.000+02:00"
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
      formatLineup() {
        const tempLineUp = this.lineup.map((session) => {
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

          let newStartTime = "2025-07-08T" + start + ":00.000+02:00";
          let newEndTime = "2025-07-08T" + end + ":00.000+02:00";

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
            isLive: sessionLiveStatus,
            isPast: timeNow > sessionTimeEnd,
          };
        });

        return tempLineUp.sort((a, b) =>
          luxon.DateTime.fromISO(a.startTime) - luxon.DateTime.fromISO(b.startTime)
        );
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

          if( timeNow > sessionTimeEnd) {
            session.isPast = true;
          }
      
        });
      },
    },
   
    filters: {
      formatLocation(value) {
        if (!value) return '';
        value = value.toLowerCase();
        if (value.includes("audimax")) return "Yellow";
        if (value.includes("w1") || value.includes("w2")) return "Blue";
        if (value.includes("w3")) return "Orange";
        if (value.includes("expert")) return "Expert Corner";
        if (value.includes("canteen")) return "Canteen";
        return value;
      },
      formatLevel(value) {
        if (!value) return '';
        return value.charAt(0).toUpperCase();
      },
      trimTime(value) {
        let time = value.substring(value.indexOf("T") + 1);
        let [hour, minute] = time.split(":");
        if (hour.startsWith("0")) hour = hour.substring(1);
        return `${hour}:${minute}`;
      },
      decodeHtml(value) {
        if (!value) return '';
        const txt = document.createElement('textarea');
        txt.innerHTML = value;
        return txt.value;
      }
    }
  });
}
