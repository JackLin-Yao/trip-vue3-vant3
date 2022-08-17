export default [
  {
    path: '/city',
    component: () => import('@/views/city/Index.vue'),
    meta:{
      hideTabBar:true
    }
  },
]
