import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//引入vite-plugin-eslint
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  css:{
    preprocessorOptions: {
      scss:{
        // 这里可以添加全局变量和 mixin 等配置
        additionalData: `@import "./src/assets/css/global.scss";`
      }
    }
  },
  resolve:{
    alias:{
      '@':path.resolve(process.cwd(), 'src'),
      '@components':path.resolve(process.cwd(),'src/components'),
      '@CSS': path.resolve(process.cwd(),'src/assets/css')
    }
  }
})
