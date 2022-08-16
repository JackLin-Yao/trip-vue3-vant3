import { createRouter, createWebHashHistory } from 'vue-router'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
