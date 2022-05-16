import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('../views/Teste.vue')
    },
  ]
})

export default router
