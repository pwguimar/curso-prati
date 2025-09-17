// vite.config.css-global.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração específica para a versão CSS Global
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-css-global' // Pasta de saída diferente para cada build, se necessário
  },
  define: {
    __APP_VERSION__: JSON.stringify('css-global') // Define uma variável global para identificar a versão
  }
})