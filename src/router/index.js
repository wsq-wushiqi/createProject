import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
import Main from '@/views/main'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
