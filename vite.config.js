import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 必须是 '/'，不能写 '/dist/' 或其他子路径
  plugins: [react()],
})