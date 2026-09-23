import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '424b-2402-8780-101d-360c-4355-7605-6beb-e566.ngrok-free.app'
    ]
  }
})
