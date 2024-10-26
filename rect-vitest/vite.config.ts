/// <reference types="vitest" />
/// <reference types="Vite/client" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals:true,
    
  }
})

    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
