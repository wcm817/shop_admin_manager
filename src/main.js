import Vue from 'vue'
import ElementUi from 'element-ui' // 引入elementui组件
import 'element-ui/lib/theme-chalk/index.css' // 引入elementui全局样式
import '@/styles/element.less'
import '@/styles/index.less'

import router from '@/router/router.js' // 引入router配置

import App from './App.vue'
Vue.use(ElementUi) // 往vue中注入 Element-Ui

// 添加全局路由守卫
router.beforeEach((to, from, next) => {
  // 1. 获取token
  let mytoken = localStorage.getItem('icast_manager_37')
  // 2.判断
  if (mytoken || to.path === '/login') {
    // 如果有token值，证明已经登录过，随便访问，那么就next(),如果访问的是login，就直接跳转到login组件
    // 下一步
    next()
  } else {
    // 重定向，如果没有登录过，访问除了login之外的路径都跳转回login
    next({ path: '/login' })
  }

})

Vue.config.productionTip = false
new Vue({
  router, // 挂载router组件到App中
  render: h => h(App)
}).$mount('#app')
