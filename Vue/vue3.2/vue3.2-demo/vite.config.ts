import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias: {
    //   'vue': 'vue/dist/vue.esm-bundler.js',
    //   '@': './src'
    // },
    alias: [
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
      { find: '@',  replacement: '/src'},
    ],
  },
})
