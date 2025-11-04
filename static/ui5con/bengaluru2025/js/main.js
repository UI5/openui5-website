'use strict';

var nav = new Vue({
	el: '#nav',
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
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},
	methods: {
		onResize() {
			this.windowHeight = window.innerHeight
			this.windowWidth = window.innerWidth
		},
	}
});

var header = new Vue({
	el: '#header',
	data() {
		return {
			isCalendarsVisible: false,
			eventDate: new Date("December 13, 2025 00:00:00").getTime(),
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			timer: null,
			eventStarted: false
		};
	},
	mounted() {
		this.toggleNewsBanner();
		this.startCountdown();
	},
	beforeUnmount() {
		clearInterval(this.timer);
	},
	methods: {
		toggleCalendars() {
			this.isCalendarsVisible = !this.isCalendarsVisible;
		},
		createCalendars() {

			let newStartTime = "2025-12-13T00:00:00.000";
			let newEndTime = "2025-12-14T00:00:00.000";

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



			let description = "Join us for UI5con 2025, the community event organized by the developers of the OpenUI5 framework. This event brings together the UI5 community to meet, learn from each other, and have fun. The event will take place on July 8, 2025, in SAP-Allee 27, St.Leon-Rot, Germany. For those unable to attend in person, parts of the event will be live-streamed on the UI5 YouTube channel, allowing everyone to participate and engage with the community. \n\nEvent Details: \nDate: July 8, 2025 \nLocation: SAP-Allee 27, St.Leon-Rot \nLive Stream: https://www.youtube.com/user/openui5videos \nWebsite: https://openui5.org/ui5con/germany2025/\n\nImportant Dates:\nCall for Content: January 23, 2025 - March 10, 2025\nRegistration for Onsite Attendees: Opens on April 10, 2025\nEarly Bird Ticket Application: Ends March 10, 2025\n\nVisit our event page at https://openui5.org/ui5con for more information and stay tuned for updates. If you have any further questions, please don't hesitate to contact us at ui5con.bengaluru@sap.com.\n\nWe look forward to seeing you at UI5con 2025!"

			let descriptionOffice = `Join us for UI5con 2025, the community event organized by the developers of the OpenUI5 framework. This event brings together the UI5 community to meet, learn from each other, and have fun. The event will take place on July 8, 2025, in SAP-Allee 27, St.Leon-Rot, Germany. For those unable to attend in person, parts of the event will be live-streamed on the UI5 YouTube channel, allowing everyone to participate and engage with the community. <br><br> Event Details: <br> Date: July 8, 2025 <br> Location: SAP-Allee 27, St.Leon-Rot <br> Live Stream: https://www.youtube.com/user/openui5videos <br> Website: https://openui5.org/ui5con/germany2025/ <br><br> Important Dates: <br> Call for Content: January 23, 2025 - March 10, 2025 <br> Registration for Onsite Attendees: Opens on April 10, 2025 <br> Early Bird Ticket Application: Ends March 10, 2025 <br><br> Visit our event page at https://openui5.org/ui5con for more information and stay tuned for updates. If you have any further questions, please don't hesitate to contact us at ui5con.bengaluru@sap.com.<br><br> We look forward to seeing you at UI5con 2025!`

			let descriptionGoogle = `<br>Join us for UI5con 2025, the community event organized by the developers of the OpenUI5 framework. This event brings together the UI5 community to meet, learn from each other, and have fun. The event will take place on July 8, 2025, in SAP-Allee 27, St.Leon-Rot, Germany. For those unable to attend in person, parts of the event will be live-streamed on the UI5 YouTube channel, allowing everyone to participate and engage with the community. <br><br>Event Details: <br>Date: July 8, 2025 <br>Location: SAP-Allee 27, St.Leon-Rot <br>Live Stream: <a href="https://www.youtube.com/user/openui5videos" target="_blank">https://www.youtube.com/user/openui5videos</a> <br>Website: <a href="https://openui5.org/ui5con/germany2025/" target="_blank">https://openui5.org/ui5con/germany2025/</a><br><br>Important Dates:<br>Call for Content: January 23, 2025 - March 10, 2025<br>Registration for Onsite Attendees: Opens on April 10, 2025<br>Early Bird Ticket Application: Ends March 10, 2025<br><br>Visit our event page at <a href="https://openui5.org/ui5con" target="_blank">https://openui5.org/ui5con</a> for more information and stay tuned for updates. If you have any further questions, please don't hesitate to contact us at <a href="mailto:ui5con.bengaluru@sap.com">ui5con.bengaluru@sap.com</a>.<br><br>We look forward to seeing you at UI5con 2025!`

			let cal = [
				'BEGIN:VCALENDAR',
				'VERSION:2.0',
				'BEGIN:VEVENT',
				'DTSTART:' + calendarStartDate,
				'DTEND:' + calendarEndDate,
				'SUMMARY:' + 'Save the Date: UI5con 2025',
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
							'&text=' + 'Save the Date: UI5con 2025',
							'&dates=' + calendarStartDate,
							'/' + calendarEndDate,
							'&location=' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
							'&details=' + removeForbiddenCharachters(descriptionGoogle),
							'&sprop=&sprop=name:'
						].join('')),
						office365: encodeURI([
							'https://outlook.office365.com/owa/',
							'?path=/calendar/action/compose',
							'&rru=addevent',
							'&subject=' + 'Save the Date: UI5con 2025',
							'&startdt=' + officeStartDate,
							'&enddt=' + officeEndDate,
							'&location=' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
							'&body=' + removeForbiddenCharachters(descriptionOffice)
						].join('')),
						ics: encodeURI('data:text/calendar;charset=utf8,' + cal)
					}
				]
			}
		},
		startCountdown() {
			this.updateCountdown(); // Initial update
			this.timer = setInterval(this.updateCountdown, 1000);
		},
		updateCountdown() {
			const now = new Date().getTime();
			const timeRemaining = this.eventDate - now;

			if (timeRemaining <= 0) {
				clearInterval(this.timer);
				this.eventStarted = true;
				return;
			}

			this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
			this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
		},
		toggleNewsBanner() {
			const wasClosed = localStorage.getItem('newsBannerClosed');
			if (wasClosed === 'true') {
				const banner = document.getElementById('news-banner');
				if (banner) {
					banner.style.display = 'none';
				}
			}
		},
		closeNewsBanner() {
			const banner = document.getElementById('news-banner');
			if (banner) {
				banner.style.display = 'none';
				localStorage.setItem('newsBannerClosed', 'true');
			}
		}
	}
});

var main = new Vue({
	el: '#main',
	data() {
		return {
			team: [
				{
					name: 'Gaurav Rawat',
					location: 'gaurav.rawat@sap.com',
					image: 'images/team/Gaurav.jpeg',
					email: 'gaurav.rawat@sap.com'
				},
				{
					name: 'Rounak Roy',
					location: 'rounak.roy@sap.com',
					image: 'images/team/Rounak-Roy.jpg',
					email: 'rounak.roy@sap.com'
				},
				{
					name: 'Reshma Remesh',
					location: 'r.remesh@sap.com',
					image: 'images/team/Reshma-Remesh.jpg',
					email: 'r.remesh@sap.com'
				},
				{
					name: 'Freddy Jetty Johnson',
					location: 'freddy.jetty.johnson@sap.com',
					image: 'images/team/Freddy-Jetty-Johnson.jpg',
					email: 'freddy.jetty.johnson@sap.com'
				},
				{
					name: 'Harshitha S',
					location: 'harshitha.s@sap.com',
					image: 'images/team/Harshitha-S.jpg',
					email: 'harshitha.s@sap.com'
				},
				{
					name: 'Aman Singh',
					location: 'aman.singh09@sap.com',
					image: 'images/team/Aman.jpg',
					email: 'aman.singh09@sap.com'
				}
			],
			committee: [
				{
					name: "Andreas Kunz",
					role: "Lead Architect - SAP SE",
					image: "images/committee/Andreas.jpg",
				},
				{
					name: "Rohith Deraje",
					role: "Lead Product Manager - SAP Labs India",
					image: "images/committee/Rohith.jpg",
				},
				{
					name: "Sandeep R S",
					role: "Product Manager - SAP Labs India",
					image: "images/committee/Sandeep.jpg",
				},
				{
					name: "Shrinivasan Neelamegam",
					role: "Developer Advocate - SAP",
					image: "images/committee/Shrinivasan.jpg",
				},
				{
					name: "Rohit Kumar",
					role: "Program Lead - SAP Labs India",
					image: "images/committee/Rohit.jpg",
				}
			]
		}
	}
});

var footer = new Vue({
	el: '#footer',
	data() {
		return {

		};
	},
});

