import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Rolldown (Vite 8's built-in bundler) — vendor code splitting via
// output.codeSplitting.groups (replacement for Rollup manualChunks and for
// Rolldown's deprecated `advancedChunks`, which is ignored if both are set).
// Groups whose modules are not imported yet (e.g. motion, router, i18n,
// icons) simply emit no chunk until the app starts using them.
// NOTE: @tailwindcss/vite is registered but inert — no app CSS imports
// 'tailwindcss' yet. See src/tailwind.css before activating.
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
