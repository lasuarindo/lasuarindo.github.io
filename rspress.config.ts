import path from 'node:path'
import { defineConfig } from '@rspress/core'
import rspressPluginMermaid from 'rspress-plugin-mermaid'

export default defineConfig({
  root: 'docs',
  title: 'Lasuarindo Docs',
  lang: 'en',
  globalStyles: path.resolve('docs/theme.css'),
  plugins: [rspressPluginMermaid()],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lasuarindo' },
    ],
  },
})
