import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Base path for the production build. Defaults to '/' for local dev/preview;
// the GitHub Pages workflow sets BASE_PATH ( '/' for *.github.io user sites,
// '/<repo>/' for project sites).
const base = process.env.BASE_PATH || '/'

// Rolldown (Vite 8's built-in bundler) — vendor code splitting via
// output.codeSplitting.groups (replacement for Rollup manualChunks and for
// Rolldown's deprecated `advancedChunks`, which is ignored if both are set).
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok-free.dev',
      '.ngrok.app',
      '.ngrok.dev',
      '.ngrok.io'
    ],
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor/react',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 20,
            },
            {
              name: 'vendor/motion',
              test: /node_modules[\\/]motion(-dom|-utils)?[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor/router',
              test: /node_modules[\\/]react-router[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor/i18n',
              test: /node_modules[\\/](i18next|react-i18next)[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor/icons',
              test: /node_modules[\\/](lucide-react|@icons-pack)[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor/common',
              test: /node_modules[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})
