'use strict';
var sponsors = new Vue({
  el: '#sponsors',
  data() {
    return {
      sponsors: [
        {
          package: 'Price',
          basic: '490 €',
          pro: '890 €'
        },
        {
          package: 'Company Logo on the website + link to the website (maintained 1 year)',
          basic: '✓',
          pro: '✓'
        },
        {
          package: 'Online mentioning (twitter (2-3 times), broadcasting)',
          basic: '✓',
          pro: '✓'
        },
        {
          package: 'Mentioning company in the subscription newsletter',
          basic: '✓',
          pro: '✓'
        },
        {
          package: 'Dedicated company banner presented on the breaks, 1 day',
          basic: '✓',
          pro: '✓'
        },
        {
          package: 'Dedicated company banner presented on the breaks, both days (designed and provided by company)',
          basic: '-',
          pro: '✓'
        },
        {
          package: 'Spread small branded goodies to the attendees and speakers (company needs to send it to Walldorf before 1.07.2022) ',
          basic: '-',
          pro: '✓'
        },
        {
          package: 'Included attendees ticket (s)',
          basic: 1,
          pro: 2
        },
      ],
    };
  },
});
