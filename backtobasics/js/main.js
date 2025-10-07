'use strict';

var nav = new Vue({
  el: '#nav',
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  computed: {
    showMobileNav: function () {
      if (this.windowWidth < 780) {
        return true;
      } else {
        return false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
  }
});

// var header = new Vue({
//   el: '#header',
//   data() {
//     return {
//     };
//   },
//   mounted() {},
//   methods: {}
// });

var footer = new Vue({
  el: '#footer',
  data() {
    return {
    };
  },
});
