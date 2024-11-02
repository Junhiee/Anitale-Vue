import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/v1': {
  //       target: 'http://127.0.0.1:8001', // 后端服务器地址
  //       changeOrigin: true,              // 是否允许跨域
  //       rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
  //     }
  //   }
  // }
})
