import { createRouter, createWebHashHistory } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
    { path: '/', component: () => import('../pages/HomePage.vue') },
    { path: '/login', component: () => import('../pages/LoginPage.vue') },
    { path: '/register', component: () => import('../pages/RegisterPage.vue') },
    { path: '/profile', component: () => import('../pages/ProfilePage.vue') },
    { path: '/settings', component: () => import('../pages/SettingsPage.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router