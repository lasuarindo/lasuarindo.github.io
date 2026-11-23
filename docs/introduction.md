# Introduction

Company profile website for PT Lasuarindo Group. Built with React 19 and Vite 8, deployed to GitHub Pages.

## Key features

- Routing based on `createBrowserRouter` (React Router 7) with per-page lazy loading.
- Internationalisation `id`/`en` via `i18next` + `react-i18next`, unified in `LanguageProvider`.
- Tailwind CSS 4 styling plus a global stylesheet split by domain (`src/assets/css/`).
- Automatic deploy via `.github/workflows/deploy.yml` with SPA fallback (`404.html`).
