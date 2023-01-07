// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/timeline',
    name: 'TimeLine',
    component: () => import('@/views/TimeLineView.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
