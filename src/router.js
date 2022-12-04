import { createRouter, createWebHistory } from 'vue-router';
import store from './store'
import Home from './views/HomeApp.vue'
import About from './views/AboutApp.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('./views/AuthApp.vue'),
        meta: {
            layout: 'auth'
        }
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const requierAuth = to.meta.auth
    // if(from.meta.auth && to.name === 'Auth') {
    //     return
    // }
    if(requierAuth && store.getters['auth/isAuthenticated']) {
        next()
    } else if (requierAuth && !store.getters['auth/isAuthenticated']) {
        next('/auth?=message=auth')
    } else {
        next()
    }
})

export default router;