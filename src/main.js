import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './Store/store'
import {routes} from './routes'
import VueGeolocation from 'vue-browser-geolocation';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Vue.use(VueAxios, axios)
Vue.use(VueGeolocation);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
