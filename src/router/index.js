import { createRouter, createWebHashHistory } from 'vue-router'
import cityRoute from './module/city-route'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import('@/views/home/Index.vue'),
  },
  {
    path: '/favor',
    component: () => import('@/views/favor/Index.vue'),
  },
  {
    path: '/order',
    component: () => import('@/views/order/Index.vue'),
  },
  {
    path: '/message',
    component: () => import('@/views/message/Index.vue'),
  },
  ...cityRoute,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
