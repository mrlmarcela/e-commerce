import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shopping_cart',
    name: 'shopping_cart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/details_product',
      name: 'details_product',
      component: () => import('../views/DetailsProduct.vue')
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('../views/Requests.vue')
    }
]

const router = createRouter({
      history: createWebHistory(),
      routes
    });
    
    export default router;
