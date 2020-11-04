import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import VueAnime from 'vue-animejs';
import VueCarousel from 'vue-carousel';
import VueSplash from 'vue-splash';
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueKinesis)
Vue.use(VueAnime)
Vue.use(VueCarousel);
Vue.use(VueSplash);
 
Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})
