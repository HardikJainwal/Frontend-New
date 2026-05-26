import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api/chat": {
        target: "http://65.2.21.144:8001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/chat/, "/chat"),
      },
    },
  },
})
