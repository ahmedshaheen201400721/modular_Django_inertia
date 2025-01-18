import { defineConfig } from 'vite'
import { resolve } from "path"
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/static/",
  plugins: [
    react({
      include: '**/*.disabled',
    }),
  ],
  build: {
    outDir: resolve('./web/dist'),
    manifest: "manifest.json",
    rollupOptions: {
      input: './web/src/main.jsx',
    },
  },
  server: {
    origin: "http://localhost:5173",
    cors: {
      allowedHeaders: "*"
    }
  }
})
