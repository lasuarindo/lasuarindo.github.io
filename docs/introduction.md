# Introduction

Company profile website for PT Lasuarindo Group. Built with React 19 and Vite 8, deployed to GitHub Pages.

## Key features

- Routing based on `createBrowserRouter` (React Router 7) with per-page lazy loading and a shared `RootLayout`.
- Internationalisation `id`/`en` via `i18next` + `react-i18next`; each page registers only its own namespace through `useStrings`.
- Tailwind CSS 4 styling plus a global stylesheet split by domain (`src/assets/css/`).
- Automatic deploy via `.github/workflows/deploy.yml` with SPA fallback (`404.html`).
- Documentation built with Rspress v2 from `docs/`, configured in `rspress.config.ts`.

## Repository layout

The app lives in `src/`, the docs in `docs/`, and the docs site configuration in `rspress.config.ts`. See [Project Structure](/project-structure).