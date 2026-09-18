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

                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="logo" viewBox="0 0 500 500">
                    <defs>
                        <linearGradient id="b" x1="367.979" x2="134.403" y1="467.608" y2="63.042" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#ff5a37"/>
                        <stop offset="1" stop-color="#ffa52d"/>
                        </linearGradient>
                        <clipPath id="a">
                        <path fill="none" d="M244.446-.491s-.052 20.81 54.346 53.859c105.617 64.167 105.261 122.994 105.261 135.339 0 52.44-54.58 86.34-79.904 58.903 0 0 24.849-18.441 24.849-46.799 0 0-18.223 12.01-27.748 14.081 0 0 12.424-21.95 6.626-60.466 0 0-9.94 19.465-41.83 35.203 0 0 12.425-27.748.829-54.254 0 0 2.485 33.132-72.89 68.335-75.376 35.203-52.184 70.406-52.184 70.406s15.026-15.956 40.535-4.75c34.512 15.16 20.565 75.999-34.932 75.999-54.03 0-89.495-58.76-89.495-104.642 0-18.971 2.057-53.874 36.332-92.262 27.261-30.533 60.877-46.642 68.093-80.405-37.36 34.617-104.72 57.21-144.778 116.451-35.98 53.213-24.299 123.598-17.822 145.248C49.11 427.945 140.14 499.51 247.884 499.51c131.503 0 239.478-105.233 239.478-236.736 0-199.082-189.264-220.207-242.916-263.264m-31.86 243.709c-4.007.932-7.844-.745-14.248-2.692-5.987-1.821-8.106-1.472-8.106-1.472a101.5 101.5 0 0 1 12.67-7.268c6.36-2.928 11.794-3.08 14.321 2.746 1.661 3.831-1.352 7.921-4.637 8.686"/>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#a)" style="isolation:isolate">
                        <path fill="#ff5a37" d="M244.446-.491s-.052 20.81 54.346 53.859c105.617 64.167 105.261 122.994 105.261 135.339 0 52.44-54.58 86.34-79.904 58.903 0 0 24.849-18.441 24.849-46.799 0 0-18.223 12.01-27.748 14.081 0 0 12.424-21.95 6.626-60.466 0 0-9.94 19.465-41.83 35.203 0 0 12.425-27.748.829-54.254 0 0 2.485 33.132-72.89 68.335-75.376 35.203-52.184 70.406-52.184 70.406s15.026-15.956 40.535-4.75c34.512 15.16 20.565 75.999-34.932 75.999-54.03 0-89.495-58.76-89.495-104.642 0-18.971 2.057-53.874 36.332-92.262 27.261-30.533 60.877-46.642 68.093-80.405-37.36 34.617-104.72 57.21-144.778 116.451-35.98 53.213-24.299 123.598-17.822 145.248C49.11 427.945 140.14 499.51 247.884 499.51c131.503 0 239.478-105.233 239.478-236.736 0-199.082-189.264-220.207-242.916-263.264"/>
                        <path fill="#ffa52d" d="M292.045 311.361s5.974 94.582-106.06 108.53C112.824 429 55.241 382.378 30.26 322.996c-17.392-41.34-18.985-88.865.963-128.077 0 0-72.655 69.25-69.314 172.891C-34.623 475.43 50.532 616.863 370 575.93c106.211-13.607 145.167-162.433 146.742-250.8 1.957-109.874-49.454-161.953-49.454-161.953s26.831 77.633-35.01 139.474c-34.46 34.46-93.093 46.383-140.233 8.71" opacity=".4" style="mix-blend-mode:lighten"/>
                        <path fill="#ffa52d" d="M464.505 366.235s-106.813 32.592-172.46-54.874c0 0 28.72 111.323-93.658 183.617 0 0 42.401 125.71 182.458 63.302 44.94-20.024 78.794-116.797 83.66-192.045" opacity=".6" style="mix-blend-mode:lighten"/>
                        <path fill="#ffa52d" d="M278.544 526.61s66.826-85.2 13.501-215.249c0 0 47.881 97.822 133.7 132.394 0 0-51.319 85.912-147.2 82.855" opacity=".8" style="mix-blend-mode:lighten"/>
                        <path fill="#ffa52d" d="M230.777 248.204c41.93-21.613 55.37-58.643 55.37-58.643s12.425-27.763.82-54.288c0 0 2.487 33.156-72.944 68.385-75.432 35.23-52.222 70.458-52.222 70.458 3.95-3.521 7.708-5.895 15.155-7.898 12.412-3.34 31.948-6.74 53.821-18.014" opacity=".6" style="mix-blend-mode:overlay"/>
                        <path fill="#ffa52d" d="M232.938 263.549c32.406 0 69.893-15.063 88.444-48.695 2.898-5.256 5.48-13.789 6.764-21.817 2.047-12.796 2.258-22.317-.108-39.606 0 0-6.142 17.205-41.89 36.13-12.977 6.87-29.613 13.74-51.612 20.416-85.238 25.868-72.735 64.139-72.735 64.139 13.433-8.891 13.514-10.567 71.137-10.567" opacity=".4" style="mix-blend-mode:overlay"/>
                        <path fill="#ffa52d" d="M232.938 263.549c29.792 0 70.294 1.675 91.33-15.958 12.902-10.814 24.681-25.106 24.903-46.885 0 0-17.648 11.648-27.793 14.152-14.034 3.465-39.287 8.778-62.391 7.466-78.406-4.45-97.186 51.792-97.186 51.792 10.812-9.999 23.969-10.567 71.137-10.567" opacity=".2" style="mix-blend-mode:overlay"/>
                        <path fill="url(#b)" d="M244.446-.491s-.052 20.81 54.346 53.859c105.617 64.167 105.261 122.994 105.261 135.339 0 52.44-54.58 86.34-79.904 58.903 0 0 24.849-18.441 24.849-46.799 0 0-18.223 12.01-27.748 14.081 0 0 12.424-21.95 6.626-60.466 0 0-9.94 19.465-41.83 35.203 0 0 12.425-27.748.829-54.254 0 0 2.485 33.132-72.89 68.335-75.376 35.203-52.184 70.406-52.184 70.406s15.026-15.956 40.535-4.75c34.512 15.16 20.565 75.999-34.932 75.999-54.03 0-89.495-58.76-89.495-104.642 0-18.971 2.057-53.874 36.332-92.262 27.261-30.533 60.877-46.642 68.093-80.405-37.36 34.617-104.72 57.21-144.778 116.451-35.98 53.213-24.299 123.598-17.822 145.248C49.11 427.945 140.14 499.51 247.884 499.51c131.503 0 239.478-105.233 239.478-236.736 0-199.082-189.264-220.207-242.916-263.264" style="mix-blend-mode:overlay"/>
                    </g>
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

            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="logo" viewBox="0 0 500 500">
                <defs>
                    <linearGradient id="b" x1="367.979" x2="134.403" y1="467.608" y2="63.042" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#ff5a37"/>
                    <stop offset="1" stop-color="#ffa52d"/>
                    </linearGradient>
                    <clipPath id="c">
                    <path fill="none" d="M244.446-.491s-.052 20.81 54.346 53.859c105.617 64.167 105.261 122.994 105.261 135.339 0 52.44-54.58 86.34-79.904 58.903 0 0 24.849-18.441 24.849-46.799 0 0-18.223 12.01-27.748 14.081 0 0 12.424-21.95 6.626-60.466 0 0-9.94 19.465-41.83 35.203 0 0 12.425-27.748.829-54.254 0 0 2.485 33.132-72.89 68.335-75.376 35.203-52.184 70.406-52.184 70.406s15.026-15.956 40.535-4.75c34.512 15.16 20.565 75.999-34.932 75.999-54.03 0-89.495-58.76-89.495-104.642 0-18.971 2.057-53.874 36.332-92.262 27.261-30.533 60.877-46.642 68.093-80.405-37.36 34.617-104.72 57.21-144.778 116.451-35.98 53.213-24.299 123.598-17.822 145.248C49.11 427.945 140.14 499.51 247.884 499.51c131.503 0 239.478-105.233 239.478-236.736 0-199.082-189.264-220.207-242.916-263.264m-31.86 243.709c-4.007.932-7.844-.745-14.248-2.692-5.987-1.821-8.106-1.472-8.106-1.472a101.5 101.5 0 0 1 12.67-7.268c6.36-2.928 11.794-3.08 14.321 2.746 1.661 3.831-1.352 7.921-4.637 8.686"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#c)" style="isolation:isolate">
                    <path fill="#ff5a37" d="M244.446-.491s-.052 20.81 54.346 53.859c105.617 64.167 105.261 122.994 105.261 135.339 0 52.44-54.58 86.34-79.904 58.903 0 0 24.849-18.441 24.849-46.799 0 0-18.223 12.01-27.748 14.081 0 0 12.424-21.95 6.626-60.466 0 0-9.94 19.465-41.83 35.203 0 0 12.425-27.748.829-54.254 0 0 2.485 33.132-72.89 68.335-75.376 35.203-52.184 70.406-52.184 70.406s15.026-15.956 40.535-4.75c34.512 15.16 20.565 75.999-34.932 75.999-54.03 0-89.495-58.76-89.495-104.642 0-18.971 2.057-53.874 36.332-92.262 27.261-30.533 60.877-46.642 68.093-80.405-37.36 34.617-104.72 57.21-144.778 116.451-35.98 53.213-24.299 123.598-17.822 145.248C49.11 427.945 140.14 499.51 247.884 499.51c131.503 0 239.478-105.233 239.478-236.736 0-199.082-189.264-220.207-242.916-263.264"/>
                    <path fill="#ffa52d" d="M292.045 311.361s5.974 94.582-106.06 108.53C112.824 429 55.241 382.378 30.26 322.996c-17.392-41.34-18.985-88.865.963-128.077 0 0-72.655 69.25-69.314 172.891C-34.623 475.43 50.532 616.863 370 575.93c106.211-13.607 145.167-162.433 146.742-250.8 1.957-109.874-49.454-161.953-49.454-161.953s26.831 77.633-35.01 139.474c-34.46 34.46-93.093 46.383-140.233 8.71" opacity=".4" style="mix-blend-mode:lighten"/>
                    <path fill="#ffa52d" d="M464.505 366.235s-106.813 32.592-172.46-54.874c0 0 28.72 111.323-93.658 183.617 0 0 42.401 125.71 182.458 63.302 44.94-20.024 78.794-116.797 83.66-192.045" opacity=".6" style="mix-blend-mode:lighten"/>
                    <path fill="#ffa52d" d="M278.544 526.61s66.826-85.2 13.501-215.249c0 0 47.881 97.822 133.7 132.394 0 0-51.319 85.912-147.2 82.855" opacity=".8" style="mix-blend-mode:lighten"/>
                    <path fill="#ffa52d" d="M230.777 248.204c41.93-21.613 55.37-58.643 55.37-58.643s12.425-27.763.82-54.288c0 0 2.487 33.156-72.944 68.385-75.432 35.23-52.222 70.458-52.222 70.458 3.95-3.521 7.708-5.895 15.155-7.898 12.412-3.34 31.948-6.74 53.821-18.014" opacity=".6" style="mix-blend-mode:overlay"/>
                    <path fill="#ffa52d" d="M232.938 263.549c32.406 0 69.893-15.063 88.444-48.695 2.898-5.256 5.48-13.789 6.764-21.817 2.047-12.796 2.258-22.317-.108-39.606 0 0-6.142 17.205-41.89 36.13-12.977 6.87-29.613 13.74-51.612 20.416-85.238 25.868-72.735 64.139-72.735 64.139 13.433-8.891 13.514-10.567 71.137-10.567" opacity=".4" style="mix-blend-mode:overlay"/>
                    <path fill="#ffa52d" d="M232.938 263.549c29.792 0 70.294 1.675 91.33-15.958 12.902-10.814 24.681-25.106 24.903-46.885 0 0-17.648 11.648-27.793 14.152-14.034 3.465-39.287 8.778-62.391 7.466-78.406-4.45-97.186 51.792-97.186 51.792 10.812-9.999 23.969-10.567 71.137-10.567" opacity=".2" style="mix-blend-mode:overlay"/>
                    <path fill="url(#b)" d="M244.446-.491s-.052 20.81 54.346 53.859c105.617 64.167 105.261 122.994 105.261 135.339 0 52.44-54.58 86.34-79.904 58.903 0 0 24.849-18.441 24.849-46.799 0 0-18.223 12.01-27.748 14.081 0 0 12.424-21.95 6.626-60.466 0 0-9.94 19.465-41.83 35.203 0 0 12.425-27.748.829-54.254 0 0 2.485 33.132-72.89 68.335-75.376 35.203-52.184 70.406-52.184 70.406s15.026-15.956 40.535-4.75c34.512 15.16 20.565 75.999-34.932 75.999-54.03 0-89.495-58.76-89.495-104.642 0-18.971 2.057-53.874 36.332-92.262 27.261-30.533 60.877-46.642 68.093-80.405-37.36 34.617-104.72 57.21-144.778 116.451-35.98 53.213-24.299 123.598-17.822 145.248C49.11 427.945 140.14 499.51 247.884 499.51c131.503 0 239.478-105.233 239.478-236.736 0-199.082-189.264-220.207-242.916-263.264" style="mix-blend-mode:overlay"/>
                </g>
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

        <p class="copyright">© 2026 SAP SE or an SAP affiliate company and OpenUI5 website contributors <br aria-hidden="true"/> This site is hosted by GitHub Pages.</p>

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