'use strict';
Vue.component("gallery-img", {
  props: ["src", "alt", "mobile"],
  template:`<figure class="ui5con-gallery-item" :class="{mobile : mobile}">
  <img :src="src" :alt="alt">
  <figcaption class="sr-only">{{alt}}</figcaption>
</figure>
`
});
