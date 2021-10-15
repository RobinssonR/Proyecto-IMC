import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

// URL base de la api

axios.defaults.baseURL = 'http://localhost:3000/api';


Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
