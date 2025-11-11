'use strict';
Vue.component("footer-section", {
  template:`<footer class="ui5con-footer">
<ul class="ui5con-share">
  <li>
    <a href="https://twitter.com/intent/tweet?text=UI5Con%20Germany%202023%20&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023" target="_blank" rel="noopener noreferrer">
      <span class="sr-only">Click to share on twitter. Opens in a new window.</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 33" aria-hidden="true">
        <path d="M23.833 1.5c-2.57 0-4.59 1.022-5.866 2.725-.933 1.243-1.313 2.639-1.427 3.8-3.537-.335-5.832-1.208-7.232-1.972-.895-.488-1.455-.948-1.76-1.237a3.567 3.567 0 0 1-.297-.312A3.167 3.167 0 0 0 1.5 6.334c0 2.332 1.113 4.17 2.365 5.516a3.153 3.153 0 0 0-.698 1.983c0 2.024 1.309 3.277 2.288 3.949a3.153 3.153 0 0 0-.622 1.885c0 1.65.829 2.72 1.711 3.394-.583.068-1.208.106-1.877.106-1.281 0-2.436.771-2.926 1.954-.238.576-.26 1.266-.124 1.88a3.275 3.275 0 0 0 1.196 1.908c.16.124.355.26.589.4l.772-1.286-.772 1.286a9.711 9.711 0 0 0 1.93.862c1.645.548 4.08.996 7.668.996 6.91 0 11.64-3.045 14.51-7.348 2.752-4.128 3.657-9.186 3.657-13.319 0-.133-.004-.277-.01-.422l2.378-2.302a3.167 3.167 0 0 0-3.378-5.216l-1.878.751a8.026 8.026 0 0 0-.19-.16l-.285.35.286-.35c-.932-.76-2.457-1.651-4.257-1.651Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023" target="_blank" rel="noopener noreferrer">
      <span class="sr-only">Click to share on facebook. Opens in a new window</span>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v10a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" fill="currentColor"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023&title=UI5Con Germany 2023&summary=UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development" target="_blank" rel="noopener noreferrer">
      <span class="sr-only">Click to share on LinkedIn. Opens in a new window</span>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.778A3.778 3.778 0 0 1 10.778 7 3.222 3.222 0 0 1 14 10.222V13a1 1 0 1 1-2 0v-2.778C12 9.547 11.453 9 10.778 9 9.796 9 9 9.796 9 10.778V13a1 1 0 1 1-2 0v-2.222Z" fill="currentColor"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="mailto:?subject=UI5con in July 2023&body=Mark your calendars: UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development. https://openui5.org/ui5con/germany2023/" target="_blank" rel="noopener noreferrer">
    <span class="sr-only">Click to share via e-mail.</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 36" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6.75A6.75 6.75 0 0 1 7.25 0h31.5a6.75 6.75 0 0 1 6.75 6.75v22.5A6.75 6.75 0 0 1 38.75 36H7.25A6.75 6.75 0 0 1 .5 29.25V6.75ZM7.25 4.5A2.25 2.25 0 0 0 5 6.75v22.5a2.25 2.25 0 0 0 2.25 2.25h31.5A2.25 2.25 0 0 0 41 29.25V6.75a2.25 2.25 0 0 0-2.25-2.25H7.25Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.092 5.558a2.25 2.25 0 0 1 3.1-.716l15.616 9.76a2.25 2.25 0 0 0 2.384 0l15.615-9.76a2.25 2.25 0 0 1 2.386 3.816l-15.615 9.76a6.75 6.75 0 0 1-7.155 0L3.807 8.657a2.25 2.25 0 0 1-.716-3.1Z" fill="currentColor"/>
      </svg>
    </a>
  </li>
</ul>

<div class="ui5con-footer-container-wrapper">
  <div class="ui5con-footer-container links">
    <div class="ui5con-social-links-container">
      <social-link link="https://twitter.com/openui5" header="stay updated" title="ui5con twitter profile"></social-link>
      <social-link link="https://www.youtube.com/c/openui5videos/playlists" header="see past events" title="ui5con past events youtube playlist"></social-link>
      <social-link link="mailto:openui5@sap.com?subject=[UI5con 2023] Question" header="reach out to us" title="openui5@sap.com email"></social-link>
    </div>

    <div class="ui5con-social-links-container">
      <social-link link="https://www.sap.com/about/legal/impressum.html" header="legal disclaimer" title="legal disclaimer page"></social-link>
      <social-link link="https://www.sap.com/about/legal/privacy.html" header="privacy" title="privacy page"></social-link>
      <social-link link="codeofconduct.html" header="code of conduct" title="code of conduct page"></social-link>
    </div>
  </div>

  <div class="ui5con-footer-container logo">
    <svg class="ui5con-sap-logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.367 368.439">
      <defs></defs>
      <path d="M0 367.887h375.32L743.367 0H0v367.887"></path>
      <path fill="#fff" fill-rule="evenodd" d="M440.783 69.143l-72.736-.014v174.015L304.039 69.129h-62.554l-55.28 145.531c-5.818-36.66-43.641-49.33-74.19-58.815-18.912-6.371-40.733-15.74-39.278-25.981 0-8.496 10.183-16.293 32.004-15.13 14.547.742 27.64 1.95 53.825 14.431L184.75 84.84c-24.73-11.987-56.735-19.566-82.92-19.595-32.004 0-58.19 10.066-74.191 26.752-10.183 11.609-17.457 26.345-17.457 42.682 0 22.475 8.729 38.42 24.73 51.12 16.003 10.691 33.46 17.66 50.916 22.766 20.366 6.299 36.368 11.754 36.368 23.45 0 4.32-1.454 8.248-4.364 11.405-5.819 5.222-13.092 7.2-24.73 7.448-20.366.378-34.914-2.866-59.644-17.311l-23.276 44.878c24.73 13.908 53.825 22.083 82.92 22.083l4.364-.029c24.73-.465 46.551-7.812 62.553-21.166 1.455-.786 1.455-1.513 2.91-2.24l-7.274 19.536h66.918l10.183-33.866c11.638 3.899 24.73 6.168 39.278 6.168 14.547 0 26.185-2.196 37.823-5.891l11.637 33.59h107.65v-70.25h24.73c56.735 0 90.194-29.109 90.194-77.93 0-54.348-32.004-79.297-103.286-79.297zm-168.748 148.98c-8.729 0-16.003-1.514-23.276-4.161l23.276-73.202 23.275 73.434c-7.273 2.503-14.547 3.928-23.275 3.928zm173.112-42.1h-16.002v-59.02h16.002c21.821 0 39.278 7.144 39.278 29.212 0 22.694-17.457 29.807-39.278 29.807"></path>
    </svg>
    <p class="ui5con-footer-copyright">Copyright 2023, SAP SE</p>
  </div>

</div>


</footer>
  `
});
