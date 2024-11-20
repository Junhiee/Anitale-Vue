<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-center">Modify Your Information</h2>

            <!-- 用户名修改 -->
            <form @submit.prevent="onSubmit" class="space-y-4">
                <!-- 修改用户名 -->
                <div>
                    <label for="username" class="block text-sm font-medium">Username</label>
                    <input v-model="form.username" id="username" type="text" placeholder="Enter your username"
                        class="input input-bordered w-full mt-1" required />
                    <p v-if="errors.username" class="text-sm text-red-500 mt-1">{{ errors.username }}</p>
                </div>

                <!-- 修改密码 -->
                <div>
                    <label for="password" class="block text-sm font-medium">Password</label>
                    <input v-model="form.password" id="password" type="password" placeholder="Enter your password"
                        class="input input-bordered w-full mt-1" required minlength="6" />
                    <p v-if="errors.password" class="text-sm text-red-500 mt-1">{{ errors.password }}</p>
                </div>

                <!-- 确认密码 -->
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium">Confirm
                        Password</label>
                    <input v-model="form.confirmPassword" id="confirmPassword" type="password"
                        placeholder="Confirm your password" class="input input-bordered w-full mt-1" required />
                    <p v-if="errors.confirmPassword" class="text-sm text-red-500 mt-1">{{ errors.confirmPassword }}</p>
                </div>

                <!-- 提交按钮 -->
                <div>
                    <button type="submit" class="btn btn-primary w-full" :disabled="isSubmitting">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// 表单数据
const form = reactive({
    username: '',
    password: '',
    confirmPassword: '',
})

// 错误信息
const errors = reactive({
    username: '',
    password: '',
    confirmPassword: '',
})

// 提交表单
const isSubmitting = ref(false)

function onSubmit() {
    // 清空错误信息
    errors.username = ''
    errors.password = ''
    errors.confirmPassword = ''

    // 表单验证
    if (!form.username) {
        errors.username = 'Username is required.'
    }
    if (!form.password || form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.'
    }
    if (form.password !== form.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match.'
    }

    // 如果有错误，阻止提交
    if (errors.username || errors.password || errors.confirmPassword) {
        return
    }

    // 模拟表单提交
    isSubmitting.value = true
    setTimeout(() => {
        alert('Form submitted successfully!')
        isSubmitting.value = false
    }, 1000)
}
</script>

<style scoped>
/* 自定义样式 */
</style>