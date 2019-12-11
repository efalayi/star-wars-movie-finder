import Vue from 'vue';
import SvgIcon from '@/components/svg/SvgIcon';
import clickOutside from '@/directives/clickOutside';
import App from './App.vue';

// scss base styles
import '@/scss/main.scss';

Vue.config.productionTip = false;

// Add SvgIcon component
Vue.component('svg-icon', SvgIcon);

// Add directives
Vue.directive('click-outside', clickOutside);

new Vue({
  render: h => h(App)
}).$mount('#app');
