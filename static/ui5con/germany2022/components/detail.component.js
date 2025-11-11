'use strict';
Vue.component("detail", {
  props: ["svg", "header"],
  template:`
  <div class="ui5con-detail">
    <span v-html="svg"></span>
    <h3>{{header}}</h3>
    <slot></slot>
  </div>
`
});
