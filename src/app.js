import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'

Vue.use(Vuetify)

/* eslint-disable-next-line no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
