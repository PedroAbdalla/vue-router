import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  // metodo de  ancora
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
