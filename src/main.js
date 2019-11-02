import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './Router/Router';
import VueAWN from "vue-awesome-notifications";
require("vue-awesome-notifications/dist/styles/style.css");

let options = {
  durations: {global: 2000},
  icons :
  {
  enabled:true,
  prefix: "<img style='width:60px;border-radius: 40px;' src='",
  success: "/OK.png",
  info: "/inof.png",
  warning: "/warning.png",
  alert: "/warning.png",
  suffix: "'/>",
 }
}

Vue.use(VueAWN, options)
 
Vue.use(router);
 
Vue.config.productionTip = false
  
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
