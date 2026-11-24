import { defineConfig } from '@rspress/core'
import rspressPluginMermaid from 'rspress-plugin-mermaid'

export default defineConfig({
  root: 'docs',
  title: 'Lasuarindo Docs',
  lang: 'en',
  plugins: [rspressPluginMermaid()],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Structure', link: '/project-structure' },
      { text: 'Brand', link: '/brand' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
          ],
        },
        {
          text: 'Project',
          items: [
            { text: 'Project Structure', link: '/project-structure' },
            { text: 'Architecture', link: '/architecture' },
            { text: 'Configuration', link: '/configuration' },
            { text: 'Styling', link: '/styling' },
            { text: 'Brand', link: '/brand' },
            { text: 'Deployment', link: '/deployment' },
          ],
        },
        {
          text: 'Pages',
          items: [
            { text: 'Home', link: '/pages/home' },
            { text: 'About Us', link: '/pages/about-us' },
            { text: 'Services', link: '/pages/services' },
            { text: 'Contact', link: '/pages/contact' },
            { text: 'Privacy Policy', link: '/pages/privacy-policy' },
          ],
        },
      ],
    },
  },
})
