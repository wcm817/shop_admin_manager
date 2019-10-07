import Vue from 'vue'
import ElementUi from 'element-ui' // 引入elementui组件
import 'element-ui/lib/theme-chalk/index.css' // 引入elementui全局样式
import '@/styles/element.less'
import '@/styles/index.less'

import router from '@/router/router.js' // 引入router配置

import App from './App.vue'
Vue.use(ElementUi) // 往vue中注入 Element-Ui


Vue.config.productionTip = false
new Vue({
  router, // 挂载router组件到App中
  render: h => h(App)
}).$mount('#app')
