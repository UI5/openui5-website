'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel-wrap').forEach(function (wrap) {
    const track = wrap.querySelector('.carousel');
    const dotsNav = wrap.querySelector('.carousel-dots');
    const items = Array.from(track.children);

    if (!track || !dotsNav || items.length === 0) {
      return;
    }

    let itemsPerView = 1;
    let pageCount = 1;

    function layoutItems() {
      const trackWidth = track.clientWidth;
      const gap = parseFloat(getComputedStyle(items[0]).marginLeft) +
        parseFloat(getComputedStyle(items[0]).marginRight);

      itemsPerView = Math.max(1, Math.min(3, Math.floor(trackWidth / (260 + gap))));
      const itemWidth = trackWidth / itemsPerView - gap;
      track.style.setProperty('--carousel-item-width', itemWidth + 'px');
    }

    function buildDots() {
      layoutItems();
      pageCount = Math.ceil(items.length / itemsPerView);

      dotsNav.classList.toggle('is-hidden', itemsPerView <= 1);
      dotsNav.innerHTML = '';
      for (let page = 0; page < pageCount; page++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Page ' + (page + 1));
        dot.addEventListener('click', function () {
          items[page * itemsPerView].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        });
        dotsNav.appendChild(dot);
      }
      updateActiveDot();
    }

    function updateActiveDot() {
      const page = Math.min(pageCount - 1, Math.round(track.scrollLeft / track.clientWidth));
      dotsNav.querySelectorAll('button').forEach(function (dot, index) {
        dot.classList.toggle('active', index === page);
      });
    }

    let resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(buildDots, 150);
    });

    track.addEventListener('scroll', function () {
      clearTimeout(track._scrollTimeout);
      track._scrollTimeout = setTimeout(updateActiveDot, 100);
    });

    buildDots();
  });
});
