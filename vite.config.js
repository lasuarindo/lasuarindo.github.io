import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// NOTE: @tailwindcss/vite is registered but inert — no app CSS imports
// 'tailwindcss' yet. See src/tailwind.css before activating.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
