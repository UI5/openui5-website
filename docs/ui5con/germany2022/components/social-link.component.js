'use strict';
Vue.component("social-link", {
  props: ["link", "svg", "header"],
  template:`
  <a :href="link" class="ui5con__link" target="_blank" rel="noopener noreferrer" hreflang="en">
    <span v-html="svg"></span> 
    {{header}}
  </a>
`
});
