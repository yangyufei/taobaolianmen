import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/shouye',
    name: 'shouye',
    component: () => import('../views/pages/shouye')
  },
  {
    path: '/promotionManagement',
    name: 'promotionManagement',
    component: () => import('../views/pages/promotionManagement')
  },
  {
    path: '/iWantPromote',
    name: 'iWantPromote',
    component: () => import('../views/pages/iWantPromote')
  },
  {
    path: '/attractInvestment',
    name: 'attractInvestment',
    component: () => import('../views/pages/attractInvestment')
  },
  {
    path: '/effectReport',
    name: 'effectReport',
    component: () => import('../views/pages/effectReport')
  },
  {
    path: '/myTools',
    name: 'myTools',
    component: () => import('../views/pages/myTools')
  },
  {
    path: '/accountManagement',
    name: 'accountManagement',
    component: () => import('../views/pages/accountManagement')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
