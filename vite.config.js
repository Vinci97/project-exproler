import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/variables/_colors.scss"; 
          @import "./src/scss/variables/_typography.scss"; 
          @import "./src/scss/variables/_animations.scss"; 
          @import "./src/scss/variables/_layout.scss"; 
          @import "./src/scss/helpers/_resolutions.scss";
          @import "./src/scss/helpers/_mixins.scss";
        `,
      },
    },
  },
  server: {
    host: true,
  }
})
