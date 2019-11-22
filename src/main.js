import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

// scss base styles
import '@/scss/main.scss';

Vue.config.productionTip = false;

// bind axios to Vue instance
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
