'use strict';

var main = new Vue({
  el: '#main',
  data() {
    return {
        upcomingEvents: [
            {
                name: 'UI5con Germany 2024',
                link: 'germany2024/',
                logo: 'launchpad/data/pictures/UI5con.png',
                where: 'Germany',
                when: 'June 5 / 2024'
            },
        ],
        pastEvents: [
            {
                name: 'UI5con Germany 2024',
                link: 'germany2024/',
                logo: 'launchpad/data/pictures/UI5con.png',
                where: 'Germany',
                when: 'June 5 / 2024'
            },
            {
                name: 'UI5con Germany 2023',
                link: 'germany2023/',
                logo: 'launchpad/data/pictures/UI5con.png',
                where: 'Germany',
                when: 'July 6 / 2023'
            },
            {
                name: 'UI5con Hybrid 2022',
                link: 'germany2022/',
                logo: 'launchpad/data/pictures/UI5conHybrid.svg',
                where: 'Hybrid',
                when: 'July 7-8 / 2022'
            },
            {
                name: 'UI5con ON AIR 2021',
                link: 'onair2021/',
                logo: 'launchpad/data/pictures/UI5conONAIR.png',
                where: 'Online',
                when: 'June 16-17 / 2021'
            },
            {
                name: 'UI5con ON AIR 2020',
                link: 'onair2020/',
                logo: 'launchpad/data/pictures/UI5conONAIR.png',
                where: 'Online',
                when: 'July 9-10 / 2020'
            },
            {
                name: 'UI5con@SAP 2020',
                link: 'germany2020/',
                logo: 'launchpad/data/pictures/UI5con.png',
                where: 'Cancelled',
                when: 'June 19 / 2020'
            },
            {
                name: 'UI5con Belgium',
                link: 'belgium2020/',
                logo: 'launchpad/data/pictures/Belgium2020.png',
                where: 'Belgium',
                when: 'February 14 / 2020'
            },
            {
                name: 'UI5con India',
                link: 'india2019',
                logo: 'launchpad/data/pictures/BLR.png',
                where: 'India',
                when: 'July 4 / 2019'
            },
            {
                name: 'UI5con@SAP 2019',
                link: 'germany2019',
                logo: 'launchpad/data/pictures/UI5con.png',
                where: 'Germany',
                when: 'June 28 / 2019'
            },
            {
                name: 'UI5con India 2018',
                link: 'india2019/material2018.html',
                logo: 'launchpad/data/pictures/BLR.png',
                where: 'India',
                when: 'July 20 / 2018'
            },
            {
                name: 'UI5con@SAP 2018',
                link: 'germany2019/material2018.html',
                logo: 'launchpad/data/pictures/UI5con.png',
                where: 'Germany',
                when: 'June 22nd, 2018'
            },
            {
                name: 'UI5con@SAP 2017',
                link: 'germany2019/material2017.html',
                logo: 'launchpad/data/pictures/UI5con2017.png',
                where: 'Germany',
                when: 'June 30 / 2017'
            },
            {
                name: 'UI5con Frankfurt 2017',
                logo: 'launchpad/data/pictures/Frankfurt2017.png',
                where: 'Germany',
                when: 'March 24 / 2017'
            },
            {
                name: 'UI5con Netherlands 2016',
                logo: 'launchpad/data/pictures/Netherlands2016.png',
                where: 'Netherlands',
                when: 'November 25 / 2016'
            },
            {
                name: 'UI5con Frankfurt 2016',
                logo: 'launchpad/data/pictures/Frankfurt.png',
                where: 'Germany',
                when: 'March 11 / 2016'
            },
        ],
    };
  },
});