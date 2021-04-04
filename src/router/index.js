import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/translate-game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'translate-game',
    component: Home
  },
  {
    path: '/translate-game',
    name: 'translate-game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-game.vue')
  },
  {
    path: '/translate-administration',
    name: 'translate-administration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/translate-administration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
