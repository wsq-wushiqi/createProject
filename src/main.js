// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false

router.beforeEach(async(to, from, next) => {
  const token = sessionStorage.token
  if (token) {
    if (to.path === '/') {
      next()
    } else {
      next()
      // try {
      //   next({ path: '/main' })
      // } catch(error) {
      //   sessionStorage.clear()
      //   next({ path: '/' })
      // }
    }
  } else {
    console.log(1111);
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
