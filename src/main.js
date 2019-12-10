import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FONT_AWESOME_ICONS from '@/vendor/font-awesome';
import SvgIcon from '@/components/svg/SvgIcon';
import App from './App.vue';

// scss base styles
import '@/scss/main.scss';

Vue.config.productionTip = false;

// setup FontAwesomeIcon component
library.add(...FONT_AWESOME_ICONS);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('svg-icon', SvgIcon);

new Vue({
  render: h => h(App)
}).$mount('#app');
