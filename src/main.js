import Vue from 'vue'
import App from './app/App.vue'
import router from '@/shared/router/index'
import '@/shared/plugin/vant'

import './assets/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
