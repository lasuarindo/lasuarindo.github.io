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
    nav: [
      { text: 'Using the Docs', link: '/guide/' },
      { text: 'For Everyone', link: '/for-everyone/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Pages', link: '/pages/' },
      { text: 'Changelog', link: '/changelog/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Start here',
          collapsible: false,
          items: [
            { text: 'Using the Docs', link: '/guide/' },
          ],
        },
        {
          text: 'Using this site',
          collapsible: false,
          items: [
            { text: 'Navigation', link: '/guide/navigation' },
            { text: 'Reading a page', link: '/guide/reading-a-page' },
            { text: 'Conventions', link: '/guide/conventions' },
          ],
        },
        {
          text: 'Contributing',
          collapsible: false,
          items: [
            { text: 'Making a change', link: '/guide/making-a-change' },
          ],
        },
      ],
      '/docs/': [
        {
          text: 'Start here',
          collapsible: false,
          items: [
            { text: 'Project Documentation', link: '/docs/' },
            { text: 'Introduction', link: '/docs/introduction' },
            { text: 'Getting Started', link: '/docs/getting-started' },
          ],
        },
        {
          text: 'Understanding the project',
          collapsible: false,
          items: [
            { text: 'Project Structure', link: '/docs/project-structure' },
            { text: 'Architecture', link: '/docs/architecture' },
            { text: 'Configuration', link: '/docs/configuration' },
            { text: 'Deployment', link: '/docs/deployment' },
          ],
        },
        {
          text: 'Look and feel',
          collapsible: false,
          items: [
            { text: 'Brand', link: '/docs/brand' },
            { text: 'Styling', link: '/docs/styling' },
          ],
        },
        {
          text: 'Other sections',
          collapsible: false,
          items: [
            { text: 'Using the Docs', link: '/guide/' },
            { text: 'For Everyone', link: '/for-everyone/' },
            { text: 'Pages', link: '/pages/' },
            { text: 'Changelog', link: '/changelog/' },
          ],
        },
      ],
      '/for-everyone/': [
        {
          text: 'Start here',
          collapsible: false,
          items: [
            { text: 'The website, simply', link: '/for-everyone/' },
          ],
        },
        {
          text: 'The website in plain language',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'The group', link: '/for-everyone/the-group' },
            { text: 'Businesses and T46', link: '/for-everyone/businesses-and-t46' },
            { text: 'Working with us', link: '/for-everyone/working-with-us' },
            { text: 'Legal and privacy', link: '/for-everyone/legal-and-privacy' },
            { text: 'Contact and help', link: '/for-everyone/contact-and-help' },
          ],
        },
      ],
      '/pages/': [
        {
          text: 'Start here',
          collapsible: false,
          items: [
            { text: 'Website pages', link: '/pages/' },
            { text: 'Using the Docs', link: '/guide/' },
            { text: 'For Everyone', link: '/for-everyone/' },
          ],
        },
        {
          text: 'The website',
          collapsible: false,
          items: [
            { text: 'Home', link: '/pages/home' },
            { text: 'About Us', link: '/pages/about-us' },
            { text: 'Businesses', link: '/pages/businesses' },
            { text: 'Ecosystems & Units', link: '/pages/ecosystems-and-units' },
          ],
        },
        {
          text: 'Work with us',
          collapsible: false,
          items: [
            { text: 'Engagement Pages', link: '/pages/engagement' },
            { text: 'Contact', link: '/pages/contact' },
          ],
        },
        {
          text: 'Help & legal',
          collapsible: false,
          items: [
            { text: 'FAQ Center', link: '/pages/faq' },
            { text: 'Licensing & Legal', link: '/pages/licence-and-legal' },
            { text: 'Privacy Policy', link: '/pages/privacy-policy' },
            { text: 'Terms & Conditions', link: '/pages/terms' },
          ],
        },
      ],
      '/changelog/': [
        {
          text: 'Changelog',
          collapsible: false,
          items: [
            { text: 'Overview', link: '/changelog/' },
          ],
        },
      ],
    },
  },
})
