import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/product/:id', // how to refresh page when requesting different product?
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/signInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signUpView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  window.scrollTo({top: 0, left: 0, behavior: "auto"});
})

export default router
