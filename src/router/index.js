import {createRouter,createWebHistory} from 'vue-router'
import useAuthStore from '../stores/auth';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]


// Create router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     const auth = useAuthStore();
// });


export default router