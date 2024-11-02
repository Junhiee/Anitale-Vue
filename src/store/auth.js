import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router/router'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    const token = ref(null)

    function login(userToken) {
        isAuthenticated.value = true
        token.value = userToken
        localStorage.setItem('token', userToken) // 保存 Token 在本地存储
        router.push('/') // 登录后跳转到首页
    }

    function logout() {
        isAuthenticated.value = false
        token.value = null
        localStorage.removeItem('token') // 清除本地存储的 Token
        router.push('/login') // 登出后跳转到登录页面
    }

    // 从本地存储获取 Token（保持登录状态）
    if (localStorage.getItem('token')) {
        isAuthenticated.value = true
        token.value = localStorage.getItem('token')
    }

    return { isAuthenticated, token, login, logout }
})