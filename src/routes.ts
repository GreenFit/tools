const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/time',
    name: '时间工具',
    component: () => import('@tool/Time.vue')
  }
]

export default routes