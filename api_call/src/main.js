import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// Make Axios globally available
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
