'use strict';

// wait until DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    function isActive(name) {
      return currentPage.includes(name);
    }

    // header navigation
    document.getElementsByTagName('nav-section')[0].outerHTML = `<ul class="anchor-nav">
        <li>
            <a href="index.html" class="" ${isActive('index.html') ? 'aria-current="true"' : ''} aria-label="Home">
                <span class="sr-only">Link to Home Page</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="logo" aria-hidden="true">
                    <path fill="currentColor" d="M489 .8c0 2 4.2 12.9 6.6 17.1 15.9 27.7 49.2 56.4 106.9 92.1 36.5 22.6 71.1 47.9 97 70.9 12.4 11.1 40.9 40.8 50 52.1 32.5 40.6 52.5 83.3 57.4 122.5 1.6 12.9.6 40.4-1.8 51.3-6.2 28.1-19.7 53.5-38.6 72.7-22.8 23.2-50.5 35.9-76.1 34.9-14.3-.6-30.1-7.2-38.6-16.1l-2.8-2.9 8.2-7.9c19.5-19.1 31.7-38.9 37.6-61 2.2-8.3 4-24.5 2.8-24.5-.4 0-3.1 1.5-5.9 3.4-14.4 9.3-39.1 21.9-45.4 23.2l-3.1.6 3.5-8.6c4.2-10.5 7.6-23.8 9.9-38.3 2.3-14.3 2.7-48.2.8-61.8-.7-5.5-1.3-10.5-1.4-11 0-.6-1.7 1.6-3.9 4.8-14 21.1-45.4 47.3-73.9 61.7-4.8 2.3-5.9 2.2-4.4-.7 1.4-2.6 5.8-18.4 7.2-25.8 3.1-16.8 3.4-40 .6-53.4-2.2-10.6-6.5-24.3-7.4-23.7-.4.3-.9 2.1-1 4.1-.4 5.7-5.9 19.7-11.3 28.6-12.3 20.5-33.3 41.5-60.4 60.4-21 14.6-38.7 24.7-76.5 43.3-14.6 7.2-31.4 16.2-37.5 20-36.8 23.3-58.6 46.5-67.2 71.5-2.5 7.3-2.8 9.6-2.8 20.7 0 10.5.4 13.6 2.3 19.2 1.3 3.7 2.7 7 3.2 7.3s3.1-1.1 5.7-3.1c18.9-14.6 45.3-17.2 71.4-7.3 19.9 7.6 32.7 21 39 40.8 2.8 8.6 3.4 26.6 1.2 36.6-8.1 38-39.2 66.1-81.8 74.1-12.2 2.3-34.8 2.2-48-.1-53.1-9.3-101.1-48.9-129.5-107-8.1-16.6-10.7-23.1-15.4-38.7-7.2-23.9-9.1-37.1-9.1-64.3 0-33 3.4-55.4 12.3-81.5 18.1-52.5 48.3-94 105.2-144.1 52.7-46.4 68.2-63.4 80.2-87.4 3.9-7.7 8.3-19.5 9.7-25.7l.9-4-2.1 1.9c-7.7 6.9-10.8 9.5-20.5 17-14.2 11.1-39.7 28.3-72.7 49-79.7 50-109.5 71.8-144.4 105.7-55.4 53.9-84.8 109.7-95.5 181.1-3.4 22.8-4.1 33-4.1 61 .1 54 7.5 95.8 25.1 141.3 2.4 6.3 5 12.8 5.8 14.5.8 1.8 2.9 6.6 4.7 10.7 4.4 10.1 17.6 35.7 23.4 45.5 10.2 17.1 29.3 45 37.6 55 1 1.1 5.5 6.5 10 12 32.5 39.1 80.5 79.1 125.9 105.2 59.5 34.2 130.4 56.6 196 61.8 4.1.3 9.8.8 12.5 1 6.6.6 54.3.6 57.5.1 1.4-.2 6.8-.7 12-1.1 65-4.2 140.3-27.5 199.7-61.8 22.3-12.9 51-32.6 67.7-46.7 14.3-12 36.8-33.5 48.6-46.5 23.8-26 48.8-60.9 64-89 2.4-4.4 5.2-9.6 6.3-11.5 6-10.8 22.7-49.6 27-63 6.1-18.7 8-25.2 11.1-37.5 3.3-13.5 6.9-30.2 8-37.5.7-5 2.6-18 3.1-21.5.2-1.7.7-6.4 1.1-10.5.3-4.1.8-8.6 1.1-10 .8-4.3 1.1-63.1.3-72-.5-4.7-1.1-12.3-1.5-17-.3-4.7-.8-9.4-1-10.5s-.7-4.4-1-7.4c-.6-5.5-2.1-16.4-3-21.6-14-78.8-44.2-143.7-93-200.2-9.2-10.8-32.4-34.1-42.1-42.4-2.7-2.4-7-6.1-9.5-8.2-2.4-2.1-11.4-9.1-19.9-15.5-49.3-37.3-98.2-64-194-106.2-66.7-29.3-90.5-41.3-111.2-55.6-8-5.6-8.8-6-8.8-4.6zM427.8 462c6.7 4.1 8.9 11.6 5.2 17.7-4.8 7.9-11.8 8.5-31.9 2.4-7.4-2.3-14.8-4.1-16.5-4.1-2.9 0-2.7-.2 3.2-4 3.5-2.2 9.1-5.5 12.5-7.2 13.9-7 21.6-8.4 27.5-4.8z" class="a"/>
                </svg>
            </a>
        </li>
        <li>
            <a href="documentation.html" class="${isActive('documentation') ? 'active' : ''}" ${isActive('documentation') ? 'aria-current="true"' : 'false'}>Documentation</a>
        </li>
        <li>
            <a href="releases.html" class="${isActive('releases') ? 'active' : ''}" ${isActive('releases') ? 'aria-current="true"' : 'false'}>Releases</a>
        </li>
        <li>
            <a href="events.html" class="${isActive('events') ? 'active' : ''}" ${isActive('events') ? 'aria-current="true"' : 'false'}>Events</a>
        </li>
        <li>
            <a href="community.html" class="${isActive('community') ? 'active' : ''}" ${isActive('community') ? 'aria-current="true"' : 'false'}>Community</a>
        </li>
        <li>
            <a href="https://github.com/UI5/openui5" rel="external nofollow" target="_blank">

                <span class="sr-only">Github</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="github" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>
        </li>
    </ul>`;

    // mobile header navigation
    document.getElementsByTagName('nav-section-mobile')[0].outerHTML = `<div class="mobile-nav">
    <div class="mobile-nav-container">
        <a href="index.html" aria-label="Home">
            <span class="sr-only">Link to Home Page</span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="logo" aria-hidden="true">
                <path fill="currentColor" d="M489 .8c0 2 4.2 12.9 6.6 17.1 15.9 27.7 49.2 56.4 106.9 92.1 36.5 22.6 71.1 47.9 97 70.9 12.4 11.1 40.9 40.8 50 52.1 32.5 40.6 52.5 83.3 57.4 122.5 1.6 12.9.6 40.4-1.8 51.3-6.2 28.1-19.7 53.5-38.6 72.7-22.8 23.2-50.5 35.9-76.1 34.9-14.3-.6-30.1-7.2-38.6-16.1l-2.8-2.9 8.2-7.9c19.5-19.1 31.7-38.9 37.6-61 2.2-8.3 4-24.5 2.8-24.5-.4 0-3.1 1.5-5.9 3.4-14.4 9.3-39.1 21.9-45.4 23.2l-3.1.6 3.5-8.6c4.2-10.5 7.6-23.8 9.9-38.3 2.3-14.3 2.7-48.2.8-61.8-.7-5.5-1.3-10.5-1.4-11 0-.6-1.7 1.6-3.9 4.8-14 21.1-45.4 47.3-73.9 61.7-4.8 2.3-5.9 2.2-4.4-.7 1.4-2.6 5.8-18.4 7.2-25.8 3.1-16.8 3.4-40 .6-53.4-2.2-10.6-6.5-24.3-7.4-23.7-.4.3-.9 2.1-1 4.1-.4 5.7-5.9 19.7-11.3 28.6-12.3 20.5-33.3 41.5-60.4 60.4-21 14.6-38.7 24.7-76.5 43.3-14.6 7.2-31.4 16.2-37.5 20-36.8 23.3-58.6 46.5-67.2 71.5-2.5 7.3-2.8 9.6-2.8 20.7 0 10.5.4 13.6 2.3 19.2 1.3 3.7 2.7 7 3.2 7.3s3.1-1.1 5.7-3.1c18.9-14.6 45.3-17.2 71.4-7.3 19.9 7.6 32.7 21 39 40.8 2.8 8.6 3.4 26.6 1.2 36.6-8.1 38-39.2 66.1-81.8 74.1-12.2 2.3-34.8 2.2-48-.1-53.1-9.3-101.1-48.9-129.5-107-8.1-16.6-10.7-23.1-15.4-38.7-7.2-23.9-9.1-37.1-9.1-64.3 0-33 3.4-55.4 12.3-81.5 18.1-52.5 48.3-94 105.2-144.1 52.7-46.4 68.2-63.4 80.2-87.4 3.9-7.7 8.3-19.5 9.7-25.7l.9-4-2.1 1.9c-7.7 6.9-10.8 9.5-20.5 17-14.2 11.1-39.7 28.3-72.7 49-79.7 50-109.5 71.8-144.4 105.7-55.4 53.9-84.8 109.7-95.5 181.1-3.4 22.8-4.1 33-4.1 61 .1 54 7.5 95.8 25.1 141.3 2.4 6.3 5 12.8 5.8 14.5.8 1.8 2.9 6.6 4.7 10.7 4.4 10.1 17.6 35.7 23.4 45.5 10.2 17.1 29.3 45 37.6 55 1 1.1 5.5 6.5 10 12 32.5 39.1 80.5 79.1 125.9 105.2 59.5 34.2 130.4 56.6 196 61.8 4.1.3 9.8.8 12.5 1 6.6.6 54.3.6 57.5.1 1.4-.2 6.8-.7 12-1.1 65-4.2 140.3-27.5 199.7-61.8 22.3-12.9 51-32.6 67.7-46.7 14.3-12 36.8-33.5 48.6-46.5 23.8-26 48.8-60.9 64-89 2.4-4.4 5.2-9.6 6.3-11.5 6-10.8 22.7-49.6 27-63 6.1-18.7 8-25.2 11.1-37.5 3.3-13.5 6.9-30.2 8-37.5.7-5 2.6-18 3.1-21.5.2-1.7.7-6.4 1.1-10.5.3-4.1.8-8.6 1.1-10 .8-4.3 1.1-63.1.3-72-.5-4.7-1.1-12.3-1.5-17-.3-4.7-.8-9.4-1-10.5s-.7-4.4-1-7.4c-.6-5.5-2.1-16.4-3-21.6-14-78.8-44.2-143.7-93-200.2-9.2-10.8-32.4-34.1-42.1-42.4-2.7-2.4-7-6.1-9.5-8.2-2.4-2.1-11.4-9.1-19.9-15.5-49.3-37.3-98.2-64-194-106.2-66.7-29.3-90.5-41.3-111.2-55.6-8-5.6-8.8-6-8.8-4.6zM427.8 462c6.7 4.1 8.9 11.6 5.2 17.7-4.8 7.9-11.8 8.5-31.9 2.4-7.4-2.3-14.8-4.1-16.5-4.1-2.9 0-2.7-.2 3.2-4 3.5-2.2 9.1-5.5 12.5-7.2 13.9-7 21.6-8.4 27.5-4.8z" class="a"/>
            </svg>
        </a>

        <button class="mobile-nav-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <ul class="mobile-nav-menu">
        <li>
            <a href="documentation.html" class="${ isActive('documentation') ? 'active' : '' }" ${isActive('documentation') ? 'aria-current="true"' : ''}>Documentation</a>
        </li>
        <li>
            <a href="releases.html" class="${ isActive('releases') ? 'active' : '' }" ${isActive('releases') ? 'aria-current="true"' : ''}>Releases</a>
        </li>
        <li>
            <a href="events.html" class="${ isActive('events') ? 'active' : '' }" ${isActive('events') ? 'aria-current="true"' : ''}>Events</a>
        </li>
        <li>
            <a href="community.html" class="${ isActive('community') ? 'active' : '' }" ${isActive('community') ? 'aria-current="true"' : ''}>Community</a>
        </li>
        <li>
            <a href="https://github.com/UI5/openui5" rel="external nofollow" target="_blank">Github</a>
        </li>
    </ul>
  </div>
  `;

    // footer
    document.getElementsByTagName('footer-section')[0].outerHTML = `<div class="wrap">

      <div class="footer-container">

        <p class="copyright">© 2025 SAP SE or an SAP affiliate company and OpenUI5 contributors <br aria-hidden="true"/> This site is hosted by GitHub Pages.</p>

          <div class="links-container">
              <a href="https://www.sap.com/impressum" rel="noopener noreferrer" target="_blank"
                  hreflang="en">Legal Disclosure</a>
              <a href="https://www.sap.com/terms-of-use" rel="noopener noreferrer" target="_blank"
                  hreflang="en">Terms of use</a>
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener noreferrer" target="_blank"
                  hreflang="en" title="This site is hosted by GitHub Pages. Please see the GitHub Privacy Statement for any information how GitHub processes your personal data.">Privacy</a>
              <a href="https://www.sap.com/trademark" rel="noopener noreferrer" target="_blank"
                  hreflang="en">Trademark</a>
              <a href="https://www.sap.com/copyright" rel="noopener noreferrer" target="_blank"
                  hreflang="en">Copyright</a>
          </div>

      </div>
  </div>`;

    const navBtn = document.querySelector('.mobile-nav-btn');
    navBtn.addEventListener('click', function () {
        navBtn.classList.toggle('open');
        // toggle the hamburgerMenuVisible class of ul.mobile-nav-menu
        document.querySelector('.mobile-nav-menu').classList.toggle('hamburgerMenuVisible');
    });
}, false);