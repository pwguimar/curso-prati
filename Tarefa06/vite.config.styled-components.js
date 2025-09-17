// vite.config.styled-components.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // styled-components geralmente funciona com o plugin react padrão
  build: {
    outDir: 'dist-styled-components'
  },
  define: {
    __APP_VERSION__: JSON.stringify('styled-components')
  }
})