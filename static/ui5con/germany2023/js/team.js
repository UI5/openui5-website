'use strict';
var aboutTheTeam = new Vue({
  el: '#team',
  data() {
    return {
      team: [
        {
          name: 'Eniela Vela',
          city: 'Montreal',
          picture: 'images/team/eniela.jpg',
          linkedin: 'https://ca.linkedin.com/in/eniela-vela-67aba3135',
        },
        {
          name: 'Margot Wollny',
          city: 'Heidelberg',
          picture: 'images/team/margot-wollny.png',
          linkedin: 'https://www.linkedin.com/in/margot-wollny-864ba96',
        },
        {
          name: 'Paige Hetherington',
          city: 'Vancouver',
          picture: 'images/team/paige-hetherington.png',
          linkedin: 'https://www.linkedin.com/in/paige-hetherington/',
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
          name: 'Angelika Kirilin',
          city: 'Walldorf',
          picture: 'images/team/angelika-kirilin.jpg',
          linkedin: 'https://www.linkedin.com/in/angelika-kirilin-96b5b4231/',
        },
        {
          name: 'Dirk Becker',
          city: 'Walldorf',
          picture: 'images/team/dirk-becker.jpg',
        },
        {
          name: 'Nikolay Kolarov',
          city: 'Walldorf',
          picture: 'images/team/nikolay-kolarov.jpg',
          linkedin: 'https://www.linkedin.com/in/nikolay-kolarov-58555671/',
        },
        {
          name: 'Michael Zadikowitsch',
          city: 'Walldorf',
          picture: 'images/team/michael-zadikowitsch.jpg',
          linkedin: 'https://www.linkedin.com/in/michael-zadikowitsch-68b2271b0/',
        },
        {
          name: 'Rainer Liebisch',
          city: 'Walldorf',
          picture: 'images/team/rainer-liebisch.jpg',
        },
        {
          name: 'Dorota Josenhans',
          city: 'Walldorf',
          picture: 'images/team/dorota-josenhans.png',
          linkedin: 'https://www.linkedin.com/in/dorota-josenhans-b5615124/',
        },
        {
          name: 'Dina Glatzel',
          city: 'Walldorf',
          picture: 'images/team/dina-glatzel.jpg',
          linkedin: 'https://www.linkedin.com/in/dinaglatzel/',
        },
        {
          name: 'Alexander Rauh',
          city: 'Walldorf',
          picture: 'images/team/alex-rauh.jpg',
          linkedin: 'https://www.linkedin.com/in/alexander-rauh-899579168/',
        },
        {
          name: 'Katja Zoch',
          city: 'Walldorf',
          picture: 'images/team/katja-zoch.jpg',
          linkedin: 'http://linkedin.com/in/katjazoch',
        },
        {
          name: 'Sebastian Moreno',
          city: 'Walldorf',
          picture: 'images/team/sebastian-moreno.jpg',
          linkedin: 'https://www.linkedin.com/in/sebastianmorenoagredo/',
        },
        {
          name: 'Diana Petcheva',
          city: 'Sofia',
          picture: 'images/team/diana-petcheva.webp',
          github: 'https://github.com/didip1000',
          linkedin: 'https://www.linkedin.com/in/diana-petcheva-5525a6207/',
        },
        {
          name: 'Arthur Trauter',
          city: 'Walldorf',
          picture: 'images/team/arthur-trauter.webp',
          github: 'https://github.com/ArthurTrauter',
          twitter: 'https://twitter.com/ArthurTrauter',
        },
        {
          name: 'Jan Mummenthaler',
          city: 'Heidelberg',
          picture: 'images/team/jan-mummenthaler.webp',
          github: 'https://github.com/loginger'
        },
        {
          name: 'Johannes Gluch',
          city: 'Walldorf',
          picture: 'images/team/johannes-gluch.png',
          github: 'https://github.com/H4ze'
        },
        {
          name: 'Daniel Nowak',
          city: 'Walldorf',
          picture: 'images/team/daniel-nowak.jpg',
          github: 'https://github.com/nowakdaniel'
        },
        {
          name: 'Felix Schubert',
          city: 'Walldorf',
          picture: 'images/team/felix-schubert.jpg',
          linkedin: 'https://linkedin.com/in/felix-schubert'
        },

      ],
      committee: [
        {
          name: 'Stefania Santimbrean',
          country: 'Romania',
          company: 'Nexontis',
          picture: 'images/committee/stefania-santimbrean.png',
          linkedin: 'https://www.linkedin.com/in/stefania-santimbrean/',
          github: 'https://github.com/stefania-santimbrean',
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
          name: 'Diana Pazheva',
          country: 'Bulgaria',
          company: 'SAP',
          picture: 'images/committee/diana-pazheva.png',
          linkedin: 'https://www.linkedin.com/in/diana-alexandrova-18a20732/'
        },
        {
          name: 'Wouter Lemaire',
          country: 'Belgium',
          company: 'Independent Consultant',
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
        {
          name: 'Kristian Kraljic',
          country: 'Germany',
          company: 'SAP',
          picture: 'images/committee/kristian-kraljic.png',
          twitter: 'https://twitter.com/Kristian.Kralijc',
          github: 'https://github.com/kristian'
        },
        {
          name: 'Kateryna Sergieieva',
          country: 'Germany',
          company: 'SAP',
          picture: 'images/committee/kateryna-sergieieva.jpg',
          linkedin: 'https://www.linkedin.com/in/kateryna-sergieieva-6957a087/'
        },
        {
          name: 'Dimo Uzunov',
          country: 'Spain',
          company: 'Westernacher Consulting',
          picture: 'images/committee/dimo-uzunov.png',
          linkedin: 'https://www.linkedin.com/in/dimouzunov/'
        },
        {
          name: 'Marian Zeis',
          country: 'Germany',
          company: 'Independent Consultant',
          picture: 'images/committee/marian-zeis.jpg',
          twitter: 'https://twitter.com/mianbsp',
          linkedin: 'https://www.linkedin.com/in/marianzeis',
          github: 'https://github.com/marianfoo',
        },

      ],
    };
  },
});

var teamHeader = new Vue({
  el: '#teamHeader',
  data() {}
});