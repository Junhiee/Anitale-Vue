import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from 'node:url'
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      /** 设置 `@` 指向 `src` 目录 */
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // server: {
  //   proxy: {
  //     '/v1': {
  //       target: 'http://127.0.0.1:8001', // 后端服务器地址
  //       changeOrigin: true,              // 是否允许跨域
  //       rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
  //     }
  //   }
  // }
});
