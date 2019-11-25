import Vue from 'vue';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axiosInstance from '@/api/request';
import FONT_AWESOME_ICONS from '@/vendor/font-awesome';
import App from './App.vue';
import router from './router';

// animate.css styles
import '@/vendor/animate';

// scss base styles
import '@/scss/main.scss';

Vue.config.productionTip = false;

// add axios to vue instance
Vue.use(VueAxios, axiosInstance);

// setup FontAwesomeIcon component
library.add(...FONT_AWESOME_ICONS);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
