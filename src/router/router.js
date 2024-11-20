import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('@/pages/HomePage.vue') },
    { path: '/list', component: () => import('@/pages/ListPage.vue') },
    { path: '/list/:animeId', component: () => import('@/pages/DetailPage.vue') },
    { path: '/login', component: () => import('@/pages/LoginPage.vue') },
    { path: '/forgotpwd', component: () => import('@/pages/ForgotPwdPage.vue') },
    { path: '/register', component: () => import('@/pages/RegisterPage.vue') },
    { path: '/profiles', component: () => import('@/pages/ProfilePage.vue') },
    { path: '/settings', component: () => import('@/pages/SettingsPage.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router