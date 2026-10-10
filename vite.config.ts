import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'https://b50c-2402-8780-101d-7a1-6e5d-183c-f630-a774.ngrok-free.app'
    ]
  }
})
