import path from 'node:path'
import { defineConfig } from '@rspress/core'
import rspressPluginMermaid from 'rspress-plugin-mermaid'

export default defineConfig({
  root: 'docs',
  title: 'Lasuarindo Docs',
  lang: 'en',
  // Published as a subpath of the same GitHub Pages site as the application.
  base: '/docs/',
  siteOrigin: 'https://lasuarindo.github.io',
  // Symbol-only mark from public/favicon.png; it stays visible on light and dark.
  logo: { light: '/logo.png', dark: '/logo.png', width: 28, height: 28 },
  // Same two families the application loads in index.html.
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  globalStyles: path.resolve('docs/theme.css'),
  plugins: [rspressPluginMermaid()],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lasuarindo' },
    ],
  },
})
