import path from 'node:path'
import { defineConfig } from '@rspress/core'
import rspressPluginMermaid from 'rspress-plugin-mermaid'

// Build-time only: tells the custom Link override which base the artifact uses.
const docsBase = process.env.DOCS_BASE_PATH || '/'

export default defineConfig({
  root: 'docs',
  title: 'Lasuarindo Docs',
  lang: 'en',
  // Published as a subpath of the same GitHub Pages site as the application.
  // Local scripts override this with `--base /`.
  base: '/docs/',
  siteOrigin: 'https://lasuarindo.github.io',
  // Symbol-only mark from public/favicon.png; it stays visible on light and dark.
  // Served from the site root in both the local and Pages artifacts.
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
  builderConfig: {
    source: {
      define: {
        __DOCS_BASE__: JSON.stringify(docsBase),
      },
    },
  },
  plugins: [rspressPluginMermaid()],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lasuarindo' },
    ],
  },
})
