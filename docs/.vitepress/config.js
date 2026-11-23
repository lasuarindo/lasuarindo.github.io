import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en',
  title: 'Lasuarindo Docs',
  description: 'Documentation for the PT Lasuarindo Group website project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Structure', link: '/project-structure' },
    ],
    sidebar: [
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lasuarindo/lasuarindo.github.io' },
    ],
  },
})
