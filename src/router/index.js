import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/404.vue'),
    meta: { title: 'Projects' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/404.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/404.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/cv',
    beforeEnter() {
      window.open('https://docs.google.com/document/d/1G-RRMo8Wk4idBWkTkgw3RwQoNq9DFtnr7CzSrYSxIrM/export?format=pdf&attachment=false' , '_blank', 'noreferrer')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: { title: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(to => {
  const DEFAULT = 'Kent Leo L. Makibulan'
  document.title = to.meta.title ? to.meta.title + " - " + DEFAULT : DEFAULT
})

export default router
