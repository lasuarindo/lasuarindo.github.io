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
          value: Rspress v2 + Mermaid
        - term: App
          value: React 19 + React Router 7
        - term: Build
          value: Vite 8 + Tailwind CSS 4
        - term: Copy
          value: i18next — id / en
        - term: Checks
          value: oxlint
    - label: Environment
      items:
        - term: Node
          value: 22
        - term: npm
          value: 10
        - term: App out
          value: dist/
        - term: Docs out
          value: doc_build/
        - term: Host
          value: GitHub Pages
        - term: Source
          value: github.com/lasuarindo
  action:
    text: Full setup
    link: /docs/quick-start
---
