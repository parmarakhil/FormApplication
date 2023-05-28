import Vue from 'vue';
import App from './App.vue';
import index from './router/index.js';
import store from './store.js';

Vue.config.productionTip = false;

new Vue({
    index,
    store,
    render: (h) => h(App),
  }).$mount('#app');

 