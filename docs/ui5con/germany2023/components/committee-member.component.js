'use strict';
Vue.component("committee-member", {
  props: ["member"],
  template:`
  <li :key="member.name" class="ui5con-people-list-item" role="listitem">
  <figure class="ui5con-people-member">
    <div class="frame">
      <img :src="member.picture" :alt="'Portrait of ' + member.name">
    </div>
    <figcaption>
      <h3 class="ui5con-people-name">{{member.name}}</h3>
      <p class="ui5con-people-country">{{member.country}}</p>
      <p class="ui5con-people-company">{{member.company}}</p>

      <ul class="ui5con-people-socials">
        <li v-if="member.twitter">
          <a class="ui5con-people-socials-item" :href="member.twitter" :aria-label="'Twitter Profile of ' + member.name" rel="nofollow" target="_blank" v-html="svgs.twitter">
          </a>
        </li>
        <li v-if="member.github">
          <a class="ui5con-people-socials-item" :href="member.github" :aria-label="'Github Profile of ' + member.name" rel="nofollow" target="_blank" v-html="svgs.github">
          </a>
        </li>
        <li v-if="member.linkedin">
          <a class="ui5con-people-socials-item" :href="member.linkedin" :aria-label="'LinkedIn Profile of ' + member.name" rel="nofollow" target="_blank" v-html="svgs.linkedin">
          </a>
        </li>
      </ul>

    </figcaption>
  </figure>
</li>
`
});
