// vite.config.css-modules.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-css-modules'
  },
  define: {
    __APP_VERSION__: JSON.stringify('css-modules')
  }
})