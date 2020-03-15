import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册Toast Notify方法
import VanPlugin from './assets/vant/js'
import { Plugin } from 'vue-fragment'
// rem h5 适配
import 'amfe-flexible/index.js'
import './assets/css/index.less'


Vue.config.productionTip = false

Vue.use(Plugin)
Vue.use(VanPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
