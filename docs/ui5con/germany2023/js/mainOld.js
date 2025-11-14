'use strict';
var header = new Vue({
  el: '#header',
  data() {
    return {
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
      ]
    };
  }
});

var main = new Vue({
  el: '#main',
  data() {
    return {
      isExpanded: false,
      isModalVisible: false,
      showCalBlockers: false,
      committee: [
        {
          name: 'Stefania Santimbrean',
          country: 'Romania',
          company: 'BearingPoint',
          picture: 'images/committee/stefania-santimbrean.png',
          twitter: 'https://mobile.twitter.com/ssantimbrean',
          linkedin: 'https://www.linkedin.com/in/stefania-santimbrean/',
          github: 'https://github.com/stefania-santimbrean',
        },
        {
          name: 'Andreas Kunz',
          country: 'Germany',
          company: 'SAP',
          picture: 'images/committee/andreas-kunz.jpg',
          twitter: 'https://twitter.com/aku_dev',
          linkedin: 'https://www.linkedin.com/in/andreas-kunz-dev',
          github: 'https://github.com/akudev',
        },
        {
          name: 'Ethan Jewett',
          country: 'USA',
          company: 'Mindset Consulting LLC',
          picture: 'images/committee/ethan-jewett.jpg',
          twitter: 'https://twitter.com/esjewett',
          linkedin: 'https://www.linkedin.com/in/ethanjewett',
          github: 'https://github.com/esjewett',
        },
        {
          name: 'Stanislava Baltova',
          country: 'Bulgaria',
          company: 'SAP',
          picture: 'images/committee/stanislava-baltova.jpeg',
          twitter: 'https://twitter.com/KostSisi',
          linkedin: 'https://www.linkedin.com/in/stanislava-baltova',
        },
        {
          name: 'Ilja Postnovs',
          country: 'Latvia',
          company: 'Rimi Baltic',
          picture: 'images/committee/ilja-postnovs.jpg',
          linkedin: 'https://www.linkedin.com/in/ilja-postnovs-648b2a134/',
          github: 'https://github.com/iljapostnovs/',
        },
        {
          name: 'Marian Zeis',
          country: 'Germany',
          picture: 'images/committee/marian-zeis.jpg',
          twitter: 'https://twitter.com/mianbsp',
          linkedin: 'https://www.linkedin.com/in/marianzeis',
          github: 'https://github.com/marianfoo',
        },
        {
          name: 'Lea Zimmermann',
          country: 'Germany',
          company: 'j&s-soft GmbH',
          picture: 'images/committee/lea-zimmermann.jpg',
          linkedin: 'https://www.linkedin.com/in/lea-zimmermann/',
        },
        {
          name: 'Peter Spielvogel',
          country: 'USA',
          company: 'SAP',
          picture: 'images/committee/peter-spielvogel.jpg',
          twitter: 'https://twitter.com/peterspielvogel',
          linkedin: 'https://www.linkedin.com/in/peterspielvogel/',
        },
        {
          name: 'Wouter Lemaire',
          country: 'Belgium',
          company: 'LEMTECH BV',
          picture: 'images/committee/wouter-lemaire.jpg',
          twitter: 'https://twitter.com/wouter_lemaire',
          github: 'http://github.com/lemaiwo',
        },
        {
          name: 'Stefan Beck',
          country: 'Germany',
          company: 'SAP',
          picture: 'images/committee/stefan-beck.jpg',
          twitter: 'https://twitter.com/StefanBeck3',
          linkedin: 'https://linkedin.com/in/stefan-beck-a9319a82',
        },
      ],
      activeTab:  'talks-tab',
      agendaDay: 'day1',
      eventTime: 'event',
      localTime: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1],
      lineup: [],
      formattedLineup: [],
      activeSpeakers: null,
      lastFocussedElementID: null,
      agendaJson: agendaJson,
    };
  },
  computed: {
    displayedSchedule: function() {
      if (this.agendaDay === 'day1') {
        if (this.activeTab ===  'talks-tab') {
          return this.filerSortLineup("THU");
        }
        return this.filerSortLineup("THU2");
      } else {
        if (this.activeTab ===  'talks-tab') {
          return this.filerSortLineup("FRI");
        }
        return this.filerSortLineup("FRI2");
      }
    }
  },
  filters: {
    minutes: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[1];
    },
    hours: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[0].replace(/^0+/, '');
    },
    trimTime: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      let timeSplit = time.split(':');
      return timeSplit[0] + ':' + timeSplit[1];
    },
    convertTime: function(value, eventTime) {
      if(eventTime === 'local') {
       return luxon.DateTime.fromISO(value).toLocal().toISO({ suppressMilliseconds:true });
      }
      return value;
    },
    formatText: function(value) {
      if (value) {
        return value.replace(/&amp;/g, "&");
      }
    }
  },
  mounted() {
    this.lineup = agendaJson;
    this.formattedLineup = this.formatLineup();
  },
  methods: {
    handleShowHideCommitteeSection() {
      this.isExpanded = !this.isExpanded;
    },
    showSubscribeModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    focusToggleDay() {
      this.$refs.toggleDay.focus();
    },
    focusTabs() {
      document.getElementById('talks').focus();
    },
    focusToggleTimezone() {
      document.getElementById('timezone1').focus();
    },
    handleArrowKeys(e) {
      if(e.keyCode === 37 || e.keyCode === 39) {
        if(this.activeTab ===  'talks-tab') {
          this.activeTab = 'workshops-tab';
          document.getElementById('workshops').focus();
        } else if(this.activeTab === 'workshops-tab') {
          this.activeTab =  'talks-tab';
          document.getElementById('talks').focus();
        }
      }
    },
    isActive (tab) {
      return this.activeTab === tab;
    },
    setActive (tab) {
      this.activeTab = tab;
    },
    onDayChange($event) {
      this.agendaDay = $event.target.value;
    },
    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },
    getLocalTimeZone() {
      return luxon.DateTime.now().toFormat('Z');
    },
    formatLineup() {
      return this.lineup.map(session => {
        if(session.description) {
          let formattedDescription = session.description.replace(/&amp;/g, "&");
          session.description = formattedDescription;
        }

        if(session.type === 'keynote') {
          let originalTitle = session.title;
          session.title = "Keynote: " + originalTitle;
        }

        session.speakers.map(speaker => {
          let speakerTweeter = speaker.twitterHandle;
          let speakerLinkedIn = speaker.linkedInUrl;

          if(speakerTweeter && !speakerTweeter.startsWith('https:')) {
            speaker.twitterHandle = "https://twitter.com/" + speakerTweeter;
          }

          if(speakerLinkedIn && !speakerLinkedIn.startsWith('https:')) {
            speaker.linkedInUrl = "https://www.linkedin.com/in/" + speakerLinkedIn;
          }
        })

        let start = session.startTime;
        let end = session.endTime;

        if (session.location === "THU" || session.location === "THU2") {
          let newStartTime = "2022-07-07T" + start + ":00.000+02:00";
          let newEndTime = "2022-07-07T" + end + ":00.000+02:00";

          return {
            ...session,
            startTime: newStartTime,
            endTime: newEndTime,
            readMoreActivated: false
          }
        }
        else {
          let newStartTime = "2022-07-08T" + start + ":00.000+02:00";
          let newEndTime = "2022-07-08T" + end + ":00.000+02:00";

          return {
            ...session,
            startTime: newStartTime,
            endTime: newEndTime,
            readMoreActivated: false
          }
        }
      });
    },
    filerSortLineup(day) {
      const filteredSchedule = this.formattedLineup.filter(schedule => schedule.location === day);
      const sortedSchedule = filteredSchedule.sort((a, b) => (luxon.DateTime.fromISO(a.startTime) > luxon.DateTime.fromISO(b.startTime)) ? 1 : -1)

      return sortedSchedule;
    },
    openSpeakerInfoModal(speakers, id) {
      this.activeSpeakers=speakers;
      this.$refs.agenda.ariaHidden = true;
      this.$refs.speakerModal.ariaHidden = false;
      this.$refs.speakerModal.style.display = 'flex';
      this.lastFocussedElementID = id;

      setTimeout(() => {
        this.$refs.speakerModal.focus();
      }, 0);
    },
    closeSpeakerInfoModal() {
      this.activeSpeakers=null;
      this.$refs.agenda.ariaHidden = false;
      this.$refs.speakerModal.ariaHidden = true;
      this.$refs.speakerModal.style.display = 'none';

      for (const key in this.$refs ) {
        if (key.startsWith('twitter') || key.startsWith('github') || key.startsWith('linkedin')) {
          delete this.$refs[key];
        }
      }
      document.getElementById(this.lastFocussedElementID).focus();
    },
    focusTrapModal($event) {
      let focussableElements = [];
      focussableElements.push(this.$refs.close);

      for (const key in this.$refs ) {
        if (key.startsWith('twitter') || key.startsWith('github') || key.startsWith('linkedin')) {
          const element = this.$refs[key];
          if(Array.isArray(element)) {
            focussableElements.push(element[0]);
          } else {
            focussableElements.push(element);
          }
        }
      }

      const filteredFocussableElements = focussableElements.filter(el => el !== undefined);
      const activeElementIndex = filteredFocussableElements.indexOf($event.target);

      if(activeElementIndex != filteredFocussableElements.length - 1) {
        if($event.shiftKey) {
          if(activeElementIndex === 0) {
            filteredFocussableElements[filteredFocussableElements.length - 1].focus();
          } else {
            filteredFocussableElements[activeElementIndex-1].focus();
          }
        } else {
          filteredFocussableElements[activeElementIndex+1].focus();
        }
      } else {
        if($event.shiftKey) {
          filteredFocussableElements[activeElementIndex-1].focus();
        } else {
          filteredFocussableElements[0].focus();
        }
      }
    }
  },
});

var aboutTheTeam = new Vue({
  el: '#team',
  data() {
    return {
      team: [
        {
          name: 'Uliana Caceres',
          city: 'Munich',
          picture: 'images/team/uliana-caceres.png',
          linkedin: 'https://www.linkedin.com/in/ulianaa/',
          github: 'https://github.com/UlianaMunich',
        },
        {
          name: 'Eniela Vela',
          city: 'Montreal',
          picture: 'images/team/eniela.jpg',
          linkedin: 'https://ca.linkedin.com/in/eniela-vela-67aba3135',
        },
        {
          name: 'Victoria Maslova',
          city: 'Vancouver',
          picture: 'images/team/victoria-maslova.jpeg',
          linkedin: 'https://www.linkedin.com/in/victoria-maslova/',
        },
        {
          name: 'Margot Wollny',
          city: 'Heidelberg',
          picture: 'images/team/margot-wollny.png',
          linkedin: 'https://www.linkedin.com/in/margot-wollny-864ba96',
        },
        {
          name: 'Inna Atanasova',
          city: 'Montreal',
          picture: 'images/team/Inna.jpg',
          linkedin: 'https://www.linkedin.com/in/inna-atanasova-654933137/',
          github: 'https://github.com/InnaAtanasova',
        },
        {
          name: 'Frederic Berg',
          city: 'Walldorf',
          picture: 'images/team/frederic_berg.jpg',
          linkedin: 'https://www.linkedin.com/in/frederic-berg-2433b388/',
          twitter: 'https://twitter.com/frdrcbrg',
        },
        {
          name: 'Fabian Tempel',
          city: 'Potsdam',
          picture: 'images/team/fabian-tempel.jpg',
          linkedin: 'https://www.linkedin.com/in/fabian-tempel/',
          github: 'https://github.com/trilodge',
          twitter: 'https://www.twitter.com/trilodge',
        },
        {
          name: 'Peter Muessig',
          city: 'Walldorf',
          picture: 'images/team/peter-muessig.jpg',
          linkedin: 'https://www.linkedin.com/in/peter-muessig-7b40576/',
          github: 'https://github.com/petermuessig',
          twitter: 'https://twitter.com/pmuessig',
        },
        {
          name: 'Andreas Kunz',
          city: 'Walldorf',
          picture: 'images/committee/andreas-kunz.jpg',
          linkedin: 'https://www.linkedin.com/in/andreas-kunz-dev',
          github: 'https://github.com/akudev',
          twitter: 'https://twitter.com/aku_dev',
        },
        {
          name: 'Stefan Beck',
          city: 'Walldorf',
          picture: 'images/committee/stefan-beck.jpg',
          linkedin: 'https://linkedin.com/in/stefan-beck-a9319a82',
          twitter: 'https://twitter.com/StefanBeck3',
        },
        {
          name: 'Sebastian Moreno',
          city: 'Walldorf',
          picture: 'images/team/sebastian-moreno.jpg',
          linkedin: 'https://www.linkedin.com/in/sebastianmorenoagredo/',
        },
        {
          name: 'Arthur Trauter',
          city: 'Walldorf',
          picture: 'images/team/arthur-trauter.png',
          twitter: 'https://twitter.com/ArthurTrauter',
          github: 'https://github.com/ArthurTrauter'
        },
        {
          name: 'Dorota Josenhans',
          city: 'Walldorf',
          picture: 'images/team/dorota-josenhans.png',
          linkedin: 'https://www.linkedin.com/in/dorota-josenhans-b5615124/',
        },
        {
          name: 'Oliver Müller',
          city: 'Walldorf',
          picture: 'images/team/oliver-mueller.jpg',
          linkedin: 'https://www.linkedin.com/in/oliver-m%C3%BCller-648702a8/',
        },
        {
          name: 'Alexander Rauh',
          city: 'Walldorf',
          picture: 'images/team/alex-rauh.jpg',
          linkedin: 'https://www.linkedin.com/in/alexander-rauh-899579168/',
        },
      ],
    };
  },
});

