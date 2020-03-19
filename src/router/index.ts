import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/green',
    name: 'Green',
    component: () => import('../views/Green.vue')
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: () => import('../views/Yellow.vue')
  },
  {
    path: '/red',
    name: 'Red',
    component: () => import('../views/Red.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
