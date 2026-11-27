---
pageType: home
title: Lasuarindo Docs
titleSuffix: Documentation for the group website
hero:
  name: Lasuarindo Docs
  text: The group's website, explained.
  tagline: Four sections — a plain-language overview, page notes, technical docs, and what shipped.
  actions:
    - theme: brand
      text: For Everyone
      link: /for-everyone/
    - theme: alt
      text: Docs
      link: /docs/quick-start
features:
  - title: For Everyone
    details: Plain-language pages about the group and its work, plus contact and legal.
    link: /for-everyone/
  - title: Docs
    details: From quick start and recipes through the reference pages and deployment.
    link: /docs/
  - title: Pages
    details: One entry per website route, with a plain explanation and maintainer notes.
    link: /pages/
  - title: Docs › Docs Guide
    details: Rspress setup and contributing rules for the docs site.
    link: /docs/guide-overview
  - title: Docs › Design system
    details: Brand tokens and type scale, with contrast ratios and the accessibility checklist.
    link: /docs/design-system
  - title: Changelog
    details: Shipped work grouped by date and summarised from commits.
    link: /changelog/
specs:
  eyebrow: Under the hood
  title: The tools behind the pages.
  note: CI checks locale parity, builds the app, then publishes to GitHub Pages.
  groups:
    - label: Stack
      items:
        - term: Docs
          value: Rspress v2
          url: https://www.npmjs.com/package/@rspress/core
        - term: Diagrams
          value: rspress-plugin-mermaid
          url: https://www.npmjs.com/package/rspress-plugin-mermaid
        - term: App
          value: React 19
          url: https://www.npmjs.com/package/react
        - term: Routing
          value: React Router 7
          url: https://www.npmjs.com/package/react-router
        - term: Build
          value: Vite 8
          url: https://www.npmjs.com/package/vite
        - term: Styling
          value: Tailwind CSS 4
          url: https://www.npmjs.com/package/tailwindcss
        - term: Copy
          value: i18next
          url: https://www.npmjs.com/package/i18next
        - term: Checks
          value: oxlint
          url: https://www.npmjs.com/package/oxlint
    - label: Environment
      items:
        - term: Node
          value: 22
          url: https://nodejs.org/
        - term: npm
          value: 10
          url: https://www.npmjs.com/package/npm
        - term: App out
          value: dist/
        - term: Docs out
          value: doc_build/
        - term: Host
          value: GitHub Pages
          url: https://docs.github.com/en/pages
        - term: Source
          value: github.com/lasuarindo
          url: https://github.com/lasuarindo
  action:
    text: Full setup
    link: /docs/quick-start
---
