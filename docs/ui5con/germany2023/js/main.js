"use strict";

var header = new Vue({
  el: "#header",
  data() {
    return {
      isCalendarsVisible: false,
      date: "2023/07/06 09:00:00 +02:00",
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  methods: {
    showCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
    },
    hideCalendars() {
      this.isCalendarsVisible = false;
    },
    test() {
      return this.inna;
    },
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    dateInMilliseconds() {
      let germanyDate = this.date.toLocaleString("en-US", {
        timeZone: "Germany/Berlin",
      });
      return Math.trunc(Date.parse(germanyDate) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  filters: {
    two_digits: function (value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
});

var main = new Vue({
  el: "#main",
  data() {
    return {
      isExpanded: false,
      isModalVisible: false,
      isCalendarsVisible: false,
      isToggled: false,
      speakers: [],
      lineup: [],
      shuffledSpeakers: [],
      eventTime: "event",
      filter: "all",
      formattedLineup: [],
      activeSpeakers: null,
      speakerLineupJson: speakerLineupJson,
      proposalLineupJson: proposalLineupJson
    };
  },
  mounted() {
    // Speakers Lineup API
    this.speakers = speakerLineupJson;
    this.shuffledSpeakers = this.shuffleSpeakersArray(this.speakers).slice(
    0, 5);

    // Proposal Lineup API
    this.lineup = proposalLineupJson;
    this.formattedLineup = this.formatLineup();

    let interval;
    let timeNow = new Date().toISOString();
    const startCounterTime = new Date(
      "2023-07-06T08:50:00.000+02:00"
    ).toISOString();
    const endCounterTime = new Date(
      "2023-07-06T20:00:00.000+02:00"
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
    showCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
      this.isToggled = !this.isToggled;
    },
    hideCalendars() {
      this.isCalendarsVisible = false;
    },
    showSubscribeModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    createCalendars() {
      let newStartTime = "2023-07-06T00:00:00.000";
      let newEndTime = "2023-07-07T00:00:00.000";

      let calendarStartDate = new Date(newStartTime)
        .toISOString()
        .replace(/-|:|\.\d+/g, "");
      let calendarEndDate = new Date(newEndTime)
        .toISOString()
        .replace(/-|:|\.\d+/g, "");

      let officeStartDate = new Date(newStartTime).toISOString();
      let officeEndDate = new Date(newEndTime).toISOString();

      const forbiddenCharacters = new RegExp("#", "g");
      const removeForbiddenCharachters = (text) => {
        if (typeof text === "string") {
          let formattedText = text.replace(/(&amp;|&)/g, " and ");
          return formattedText.replace(forbiddenCharacters, "");
        }
        return "";
      };

      const removeForbiddenCharachtersOutlook = (text) => {
        if (typeof text === "string") {
          let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "\\n");
          return formattedText.replace(forbiddenCharacters, "");
        }
        return "";
      };

      let description =
        "Dear friend, \n\nWe are excited to announce that UI5con 2023 is taking place on July 06, 2023.\n\nThis year’s conference will be an in-person event, taking place in St. Leon-Rot/Germany.\nThis is the most important event of the year for developers working with UI5. Interesting keynotes and sessions held by the UI5 product team as well as ambassadors from the UI5 community will shed light on a variety of UI5 topics. On top of this, you will meet friends you didn't see for a while, get to know new people from the community and enjoy a great party in the evening event.\n\nPlease save the following details:\nDate: 06/07/2023\nLocation: SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)\n\nNote that seats are limited, and registration is needed to be able to take part in this event! The registration process will open End of April. For more details as the conference approaches, please visit our Conference Page https://openui5.org/ui5con/germany2023/ \n\nWe are looking forward seeing you there!\nYour UI5con Orga Team";

      let descriptionGoogle = `Dear friend, <br><br>We are excited to announce that UI5con 2023 is taking place on July 06, 2023.<br><br>This year’s conference will be an in-person event, taking place in St. Leon-Rot/Germany.<br><br>This is the most important event of the year for developers working with UI5. Interesting keynotes and sessions held by the UI5 product team as well as ambassadors from the UI5 community will shed light on a variety of UI5 topics. On top of this, you will meet friends you didn't see for a while, get to know new people from the community and enjoy a great party in the evening event.<br><br>Please save the following details:<br>Date: 06/07/2023<br>Location: SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)<br><br>Note that seats are limited, and registration is needed to be able to take part in this event! The registration process will open End of April. For more details as the conference approaches, please visit our <a href="https://openui5.org/ui5con/germany2023/" target="_blank">Conference Page</a>  <br><br>We are looking forward seeing you there!<br>Your UI5con Orga Team`;

      let cal = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "DTSTART:" + calendarStartDate,
        "DTEND:" + calendarEndDate,
        "SUMMARY:" + "UI5con 2023",
        "LOCATION:" +
          "SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)",
        "DESCRIPTION:" + removeForbiddenCharachtersOutlook(description),
        "UID:" + "1",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\n");

      return {
        calendars: [
          {
            google: encodeURI(
              [
                "https://www.google.com/calendar/render",
                "?action=TEMPLATE",
                "&text=" + "UI5con 2023",
                "&dates=" + calendarStartDate,
                "/" + calendarEndDate,
                "&location=" +
                  "SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)",
                "&details=" + removeForbiddenCharachters(descriptionGoogle),
                "&sprop=&sprop=name:",
              ].join("")
            ),
            office365: encodeURI(
              [
                "https://outlook.office365.com/owa/",
                "?path=/calendar/action/compose",
                "&rru=addevent",
                "&subject=" + "UI5con 2023",
                "&startdt=" + officeStartDate,
                "&enddt=" + officeEndDate,
                "&location=" +
                  "SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)",
                "&body=" + removeForbiddenCharachters(descriptionGoogle),
              ].join("")
            ),
            ics: encodeURI("data:text/calendar;charset=utf8," + cal),
          },
        ],
      };
    },
    shuffleSpeakersArray(array) {
      const newArray = [...array];
      const filteredArray = newArray.filter((el) => el.hasPhoto);
      const length = filteredArray.length;

      for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor(
          (filteredArray.length - start) * Math.random()
        );
        const randomItem = filteredArray.splice(randomPosition, 1);
        filteredArray.push(...randomItem);
      }

      return filteredArray;
    },
    getLocalTimeZone() {
      return luxon.DateTime.now().toFormat("Z");
    },
    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },
    getLocalTimeZone() {
      return luxon.DateTime.now().toFormat("Z");
    },
    onFilterChange($event) {
      this.filter = $event.target.value;
      this.formattedLineup = this.formatLineup();
    },
    convertTime: function (value, eventTime) {
      if (eventTime === "local") {
        return luxon.DateTime.fromISO(value)
          .toLocal()
          .toISO({ suppressMilliseconds: true });
      }
      return value;
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
          key.startsWith("linkedin")
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
          key.startsWith("linkedin")
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
    formatText: function (value) {
      if (value) {
        return value.replace(/&amp;/g, "&");
      }
    },
    formatLineup() {
      const tempLineUp = this.lineup.map((session) => {
        session.speakers.map((speaker) => {
          let speakerTweeter = speaker.twitterHandle;
          let speakerLinkedIn = speaker.linkedInUrl;

          if (speakerTweeter && !speakerTweeter.startsWith("https:")) {
            speaker.twitterHandle = "https://twitter.com/" + speakerTweeter;
          }

          if (speakerLinkedIn && !speakerLinkedIn.startsWith("https:")) {
            speaker.linkedInUrl =
              "https://www.linkedin.com/in/" + speakerLinkedIn;
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

        let newStartTime = "2023-07-06T" + start + ":00.000+02:00";
        let newEndTime = "2023-07-06T" + end + ":00.000+02:00";

        let calendarStartDate = new Date(newStartTime)
          .toISOString()
          .replace(/-|:|\.\d+/g, "");
        let calendarEndDate = new Date(newEndTime)
          .toISOString()
          .replace(/-|:|\.\d+/g, "");

        let officeStartDate = new Date(newStartTime).toISOString();
        let officeEndDate = new Date(newEndTime).toISOString();

        const forbiddenCharacters = new RegExp("#", "g");
        const removeForbiddenCharachters = (text) => {
          if (typeof text === "string") {
            let formattedText = text.replace(/(&amp;|&)/g, " and ");
            return formattedText.replace(forbiddenCharacters, "");
          }
          return "";
        };

        const removeForbiddenCharachtersOutlook = (text) => {
          if (typeof text === "string") {
            let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "\\n");
            let formattedText2 = formattedText.replace("<br>", "\\n");
            return formattedText2.replace(forbiddenCharacters, "");
          }
          return "";
        };

        const sessionLocation = (text) => {
          let firstLetter = text.charAt(0).toUpperCase();
          let remainingLetters = text.slice(1);

          return firstLetter + remainingLetters;
        };

        let timeNow = new Date().toISOString();
        let sessionTimeStart = new Date(newStartTime).toISOString();
        let sessionTimeEnd = new Date(newEndTime).toISOString();
        let sessionLiveStatus = false;

        if (timeNow > sessionTimeStart && timeNow < sessionTimeEnd) {
          sessionLiveStatus = true;
        }

        let cal = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          "DTSTART:" + calendarStartDate,
          "DTEND:" + calendarEndDate,
          "SUMMARY:" +
            "UI5con: " +
            removeForbiddenCharachtersOutlook(session.title),
          "LOCATION:" + sessionLocation(session.location),
          "DESCRIPTION:" +
            removeForbiddenCharachtersOutlook(session.description),
          "UID:" + session.id,
          "END:VEVENT",
          "END:VCALENDAR",
        ].join("\n");

        if (session.description) {
          let formattedDescription = session.description.replace(/&amp;/g, "&");

          session.description = formattedDescription.replace(
            /(?:\r\n|\r|\n)/g,
            "<br>"
          );
        }

        return {
          ...session,
          startTime: newStartTime,
          endTime: newEndTime,
          liveNow: sessionLiveStatus,
          calendars: [
            {
              google: encodeURI(
                [
                  "https://www.google.com/calendar/render",
                  "?action=TEMPLATE",
                  "&text=" +
                    "UI5con: " +
                    removeForbiddenCharachters(session.title),
                  "&dates=" + calendarStartDate,
                  "/" + calendarEndDate,
                  "&location=" + sessionLocation(session.location),
                  "&details=" + removeForbiddenCharachters(session.description),
                  "&sprop=&sprop=name:",
                ].join("")
              ),
              office365: encodeURI(
                [
                  "https://outlook.office365.com/owa/",
                  "?path=/calendar/action/compose",
                  "&rru=addevent",
                  "&subject=" +
                    "UI5con: " +
                    removeForbiddenCharachters(session.title),
                  "&startdt=" + officeStartDate,
                  "&enddt=" + officeEndDate,
                  "&location=" + sessionLocation(session.location),
                  "&body=" + removeForbiddenCharachters(session.description),
                ].join("")
              ),
              ics: encodeURI("data:text/calendar;charset=utf8," + cal),
            },
          ],
        };
      });

      const sortedScheduleTemp = tempLineUp.sort((a, b) =>
        luxon.DateTime.fromISO(a.startTime) >
        luxon.DateTime.fromISO(b.startTime)
          ? 1
          : -1
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
      } else if (this.filter === "w2") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.includes("w2")
        );
      } else if (this.filter === "w3") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.includes("w3")
        );
      } else {
        return sortedSchedule;
      }
    },
    getTalkType(value) {
      if (value.includes("hands")) {
        return "workshop";
      }

      if (value.includes("presentation")) {
        return "talk";
      }

      if (value.includes("expert")) {
        return "expert corner";
      }

      return "";
    },
    getFormattedRoom(value) {
      if (value.includes("expert")) {
        return "showfloor";
      }
      return value.replace(/_/g, " ");
    },
    updateLiveSession() {
      return this.formattedLineup.map((session) => {
        let timeNow = new Date().toISOString();
        let sessionTimeStart = new Date(session.startTime).toISOString();
        let sessionTimeEnd = new Date(session.endTime).toISOString();

        if (timeNow >= sessionTimeStart && timeNow < sessionTimeEnd) {
          session.liveNow = true;
        } else {
          session.liveNow = false;
        }
      });
    },
    getLinkName(link) {
      let tempLink = link.linkType.toLowerCase();
      let tempUrl = link.url;

      if (tempUrl.includes("youtu")) {
        return "recording";
      }

      if (tempLink.includes("slides")) {
        return "slides";
      }

      if (tempLink.includes("github") || tempLink.includes("git")) {
        return "GitHub";
      }

      if (tempLink.includes("code")) {
        return "code";
      }

      if (tempLink.includes("demo")) {
        return "demo";
      }

      if (tempLink.includes("documentation")) {
        return "documentation";
      }

      if (tempLink.includes("blog")) {
        return "blog";
      }

      return "link";
    },
  },
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding, vnode) => {
        let f = () => {
          let rect = el.getBoundingClientRect();
          let inView =
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

          if (inView) {
            el.classList.add(binding.value);
            window.removeEventListener("scroll", f);
          }
        };

        window.addEventListener("scroll", f);
        f();
      },
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
    formatText: function (value) {
      if (value) {
        return value.replace(/&amp;/g, "&");
      }
    },
  },
});

var aboutTheTeam = new Vue({
  el: "#team",
  data() {
    return {
      team: [
        {
          name: "Eniela Vela",
          city: "Montreal",
          picture: "images/team/eniela.jpg",
          linkedin: "https://ca.linkedin.com/in/eniela-vela-67aba3135",
        },
        {
          name: "Margot Wollny",
          city: "Heidelberg",
          picture: "images/team/margot-wollny.png",
          linkedin: "https://www.linkedin.com/in/margot-wollny-864ba96",
        },
        {
          name: "Paige Hetherington",
          city: "Vancouver",
          picture: "images/team/paige-hetherington.png",
          linkedin: "https://www.linkedin.com/in/paige-hetherington/",
        },
        {
          name: "Inna Atanasova",
          city: "Montreal",
          picture: "images/team/Inna.jpg",
          linkedin: "https://www.linkedin.com/in/inna-atanasova-654933137/",
          github: "https://github.com/InnaAtanasova",
        },
        {
          name: "Frederic Berg",
          city: "Walldorf",
          picture: "images/team/frederic_berg.jpg",
          linkedin: "https://www.linkedin.com/in/frederic-berg-2433b388/",
          twitter: "https://twitter.com/frdrcbrg",
        },
        {
          name: "Fabian Tempel",
          city: "Potsdam",
          picture: "images/team/fabian-tempel.jpg",
          linkedin: "https://www.linkedin.com/in/fabian-tempel/",
          github: "https://github.com/trilodge",
          twitter: "https://www.twitter.com/trilodge",
        },
        {
          name: "Peter Muessig",
          city: "Walldorf",
          picture: "images/team/peter-muessig.jpg",
          linkedin: "https://www.linkedin.com/in/peter-muessig-7b40576/",
          github: "https://github.com/petermuessig",
          twitter: "https://twitter.com/pmuessig",
        },
        {
          name: "Andreas Kunz",
          city: "Walldorf",
          picture: "images/committee/andreas-kunz.jpg",
          linkedin: "https://www.linkedin.com/in/andreas-kunz-dev",
          github: "https://github.com/akudev",
          twitter: "https://twitter.com/aku_dev",
        },
        {
          name: "Stefan Beck",
          city: "Walldorf",
          picture: "images/committee/stefan-beck.jpg",
          linkedin: "https://linkedin.com/in/stefan-beck-a9319a82",
          twitter: "https://twitter.com/StefanBeck3",
        },
        {
          name: "Angelika Kirilin",
          city: "Walldorf",
          picture: "images/team/angelika-kirilin.jpg",
          linkedin: "https://www.linkedin.com/in/angelika-kirilin-96b5b4231/",
        },
        {
          name: "Dirk Becker",
          city: "Walldorf",
          picture: "images/team/dirk-becker.jpg",
        },
        {
          name: "Nikolay Kolarov",
          city: "Walldorf",
          picture: "images/team/nikolay-kolarov.jpg",
          linkedin: "https://www.linkedin.com/in/nikolay-kolarov-58555671/",
        },
        {
          name: "Michael Zadikowitsch",
          city: "Walldorf",
          picture: "images/team/michael-zadikowitsch.jpg",
          linkedin:
            "https://www.linkedin.com/in/michael-zadikowitsch-68b2271b0/",
        },
        {
          name: "Rainer Liebisch",
          city: "Walldorf",
          picture: "images/team/rainer-liebisch.jpg",
        },
        {
          name: "Dorota Josenhans",
          city: "Walldorf",
          picture: "images/team/dorota-josenhans.png",
          linkedin: "https://www.linkedin.com/in/dorota-josenhans-b5615124/",
        },
        {
          name: "Dina Glatzel",
          city: "Walldorf",
          picture: "images/team/dina-glatzel.jpg",
          linkedin: "https://www.linkedin.com/in/dinaglatzel/",
        },
        {
          name: "Alexander Rauh",
          city: "Walldorf",
          picture: "images/team/alex-rauh.jpg",
          linkedin: "https://www.linkedin.com/in/alexander-rauh-899579168/",
        },
      ],
    };
  },
});

var teamHeader = new Vue({
  el: "#teamHeader",
  data() {},
});
