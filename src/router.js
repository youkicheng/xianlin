import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Active from './views/Active.vue'
import Things from './views/Things.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home,
    },

    {
      path: '/active',
      name: 'active',
      component: Active
    },
    {
      path: '/things',
      name: 'things',
      component: Things
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
