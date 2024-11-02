<script setup>
import { ref } from 'vue'
import { registerUser } from '../api/user'
import { useRouter } from 'vue-router'

const message = ref('')

const email = ref('')
const password = ref('')
const user_name = ref('')

const ok = ref(false)

const router = useRouter()

const register = () => {
    const data = {
        email: email.value,
        password: password.value,
        user_name: user_name.value
    }

    registerUser(data).then(res => {
        if (res.data.code === 0) {
            router.push('/login')
        } else if (res.data.code === 300001) {
            // 邮箱格式错误
            ok.value = true
            message.value = res.data.msg

        } else if (res.data.code === 300010) {
            // 用户名格式错误
            ok.value = true
            message.value = res.data.msg
        } else if (res.data.code === 300009) {
            // 密码格式错误
            ok.value = true
            message.value = res.data.msg
        }
    }).catch(err => {
        console.log(err);
    })
}
</script>

<template>
    <div class="bg-base-200 flex items-center justify-center min-h-screen">
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-6">Create an account</h2>
                <form>

                    <!-- 邮箱 -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <label class="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="w-4 h-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input v-model="email" type="email" class="grow" placeholder="email@example.com" />
                        </label>
                    </div>

                    <!-- 用户名 -->
                    <div class="form-control mt-4">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <label class="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input v-model="user_name" type="text" class="grow" placeholder="Enter Username" />
                        </label>
                    </div>

                    <!-- 密码 -->
                    <div class="form-control mt-4">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <label class="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="w-4 h-4 opacity-70">
                                <path fill-rule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input v-model="password" type="password" class="grow" placeholder="Enter password" />
                        </label>
                    </div>

                    <!-- 注册按钮 -->
                    <div class="form-control mt-6">
                        <button @click="register" class="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>

                <div class="divider">OR</div>
                <div class="text-center">
                    <p>Already have an account?</p>
                    <RouterLink to="/login" class="link link-primary">Login here</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>