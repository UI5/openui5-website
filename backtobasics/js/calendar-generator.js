const formatTime = (date, bReplaceColon) => {
    if (date) {
        let sDate = new Date(date).toISOString()
        return bReplaceColon ? sDate.replace(/-|:|\.\d+/g, '') : sDate;
    }
    return '';
};

const formatDateWithoutTime = (date, bNextDate, bReplaceColon) => {
    let [year, month, day] = date.split('/');
    //month from 0 to 11
    let utcDate = new Date(Date.UTC(year, month - 1, day));
    if (bNextDate) {
        utcDate.setDate(utcDate.getDate() + 1)
    }
    let sDate = utcDate.toISOString();
    sDate = sDate.substr(0, sDate.indexOf('T'))
    return bReplaceColon ? sDate.replace(/-|:|\.\d+/g, '') : sDate;;
}

const getJoinLink = (url) => {
    return `Join the event: <a href="${url}">${url}</a>`;
};

const generator = {
    google: function (event) {
        let startTime;
        let endTime;
        if (event.startDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
            startTime = formatDateWithoutTime(event.startDate, false, true)
            endTime = formatDateWithoutTime(event.endDate, true, true)
        } else {
            startTime = formatTime(event.startDate, true);
            endTime = formatTime(event.endDate, true);
        }
        return encodeURI([
            'https://www.google.com/calendar/render',
            '?action=TEMPLATE',
            '&text=' + event.title,
            '&dates=' + startTime ,
            '/' + endTime,
            '&location='+ event.location,
            '&details=' + event.description.replaceAll('#', '') + '<br/>' + getJoinLink(event.url),
            '&sprop=&sprop=name:'
        ].join(''));
    },
    office365: function (event) {
        let startTime;
        let endTime;
        if (event.startDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
            startTime = formatDateWithoutTime(event.startDate, false);
            endTime = formatDateWithoutTime(event.endDate, true);
        } else {
            startTime = formatTime(event.startDate);
            endTime = formatTime(event.endDate);
        }
        let url = encodeURI([
            'https://outlook.office365.com/owa/',
            '?path=/calendar/action/compose',
            '&rru=addevent',
            '&subject=' + event.title,
            '&startdt=' + startTime,
            '&enddt=' + endTime,
            !!event.startDate.match(/^\d{4}\/\d{2}\/\d{2}$/) ? '&allday=true' : '',
            '&location=' + event.location,
            '&body=' + event.description.replaceAll('#', '') + '<br/>' + getJoinLink(event.url)
        ].join(''));
        return url
    },
    ics: function (event) {
        let startTime;
        let endTime;
        if (event.startDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
            startTime = formatDateWithoutTime(event.startDate, false, true);
            endTime = formatDateWithoutTime(event.endDate, true, true);
        } else {
            startTime = formatTime(event.startDate, true);
            endTime = formatTime(event.endDate, true);
        }

        var cal = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            // 'URL:' + document.URL, work without it. Not sure if it is required...
            'DTSTART;TZID="Berlin":' + startTime,
            'DTEND;TZID="Berlin":' + endTime,
            'SUMMARY:' + event.title,
            'LOCATION:' + event.location,
            `DESCRIPTION:Find more details about the event: https://openui5.org/events\\n\\n Join the event: ${event.url}`,
            'UID:' + event.id,
            'END:VEVENT',
            'END:VCALENDAR'].join('\n');

        return encodeURI('data:text/calendar;charset=utf8,' + cal);
    }
};


// Make available as global function instead of ES module
window.calendarGenerate = (sType, event) => {
    return generator[sType] ? generator[sType](event) : "";
};
