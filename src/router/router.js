import Vue from 'vue'
import vueRouter from 'vue-router' // 引入vueRouter组件
import Login from '@/views/login.vue' // Login登录组件
Vue.use(vueRouter) // 往Vue中注入vueRouter组件

export default new vueRouter({
  routes: [
    { name: 'default', path: '/', redirect: { name: 'login' } },
    { name: 'login', path: '/login', component: Login }
  ]
})