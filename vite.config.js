import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),react(),  ],



  
  // Opcional pero recomendado si tienes muchos .jsx
  assetsInclude: ['**/*.JSX'],   // por si acaso
})
 