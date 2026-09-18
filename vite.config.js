import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  appType: 'spa',
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
  },
})
