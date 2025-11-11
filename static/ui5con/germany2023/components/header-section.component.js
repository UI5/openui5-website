'use strict';
Vue.component("header-section", {
  data: function () {
    return {
      currentPage: ''
    }
  },
  methods: {
    isActive: function(name) {
      return this.currentPage.includes(name);
    }
  },
  mounted() {
    this.currentPage = window.location.href;
  },
  template:`<nav class="ui5con-header-nav" aria-label="Main navigation">
  <ul>
    <li class="ui5con-header-nav-item">
      <a href="index.html" class="ui5con-header-link" aria-label="Home" :aria-current="isActive('index')">
        <span class="sr-only">Link to Home Page</span>
        <span v-html="svgs.logo"></span>
      </a>
    </li>
    <li><a :class="{ active: isActive('agenda') }" href="index.html#agenda" :aria-current="isActive('agenda')">agenda</a>
    </li>
    <li><a :class="{ active: isActive('directions') }" href="directions.html" :aria-current="isActive('directions')">getting here</a>
    </li>
    <li><a :class="{ active: isActive('sponsors') }" href="sponsors.html" :aria-current="isActive('sponsors')">sponsors</a>
    </li>
    <li><a href="people.html" :class="{ active: isActive('people') }" :aria-current="isActive('people')">people</a></li>
    <li><a href="https://openui5.org/ui5con/" hreflang="en" rel="external" title="Click to open ui5con events webpage. Opens in a new window.">previous events</a></li>
  </ul>
</nav>`
});
