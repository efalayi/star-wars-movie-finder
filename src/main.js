import Vue from 'vue';
import VueAxios from 'vue-axios';
// import axios from 'axios';
import axiosInstance from '@/api/request';
import App from './App.vue';
import router from './router';

// animate.css styles
import '@/vendor/animate';

// scss base styles
import '@/scss/main.scss';

Vue.config.productionTip = false;

// add axios to vue instance
Vue.use(VueAxios, axiosInstance);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
