import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/salud/', // Requerido para GitHub Pages (repositorio /salud/)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
