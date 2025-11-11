'use strict';
Vue.component("social-links-section", {
  template:`<section class="ui5con-social-links-section">
  <h3>learn more</h3>
  <div class="ui5con-social-links-container">
      <social-link link="https://twitter.com/ui5con" :svg="svgs.twitter2" header="stay updated"></social-link>
      <social-link link="https://www.youtube.com/c/openui5videos/playlists" :svg="svgs.youtube" header="see past events"></social-link>
      <social-link link="mailto:openui5@sap.com?subject=[UI5con 2023] Question" :svg="svgs.mail" header="reach out to us"></social-link>
  </div>
</section>
  `
});
