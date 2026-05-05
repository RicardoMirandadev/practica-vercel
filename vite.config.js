import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'                   
import { fileURLToPath } from 'url'              
import { dirname } from 'path'  

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   build:{
    rollupOptions:{
        input:{
            main: resolve(__dirname, 'index.html'),
            pagina3: resolve(__dirname, 'pagina-1.html'),
            pagina2: resolve(__dirname, 'pagina-2.html'),
            Pagina3: resolve(__dirname, 'pagina-3.html')
        }
    }
  }
})