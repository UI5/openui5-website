'use strict';
Vue.component("social-link", {
  props: ["link", "header", "title"],
  template:`
  <a :href="link" class="ui5con-social-link" target="_blank" rel="noopener noreferrer" hreflang="en" :title="'Click to open ' + title + '. Opens in a new window.'">
    {{header}}
  </a>
`
});
