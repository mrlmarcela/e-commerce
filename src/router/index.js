import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import DetailsProduct from '../views/DetailsProduct.vue';
import Requests from '../views/Requests.vue';
const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/details_product',
        name: 'details_product',
        component: DetailsProduct
    },
    {
        path: '/requests',
        name: 'requests',
        component: Requests
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
