# Lasuarindo Group Website

Company profile site for **PT Lasuarindo Group**, an integrated business and investment group. The site is bilingual (Indonesian and English) and deployed to GitHub Pages.

## Tech stack

- **React 19** with **React Router 7** (`react-router`) for routing
- **Vite 8** for dev and build, with Rolldown vendor chunk splitting
- **Tailwind CSS 4** for styling, plus a global stylesheet at `src/index.css`
- **i18next** + **react-i18next** for internationalisation
- **Oxlint** for linting

Runtime libraries: `motion`, `lucide-react`, `@tabler/icons-react`.

## Scripts

```bash
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview the build
npm run lint      # lint with oxlint
```

## Project layout

```
src/
├── App.jsx                 # createBrowserRouter + LanguageProvider
├── main.jsx                # React entry
├── index.css               # global stylesheet (design tokens + base)
├── assets/images/          # page imagery
├── components/             # AnimatedReveal, BackToTop, GradientText, Icon
├── constants/theme.js      # shared colour tokens
├── context/                # LanguageContext
├── hooks/useResponsive.js  # responsive breakpoints
├── i18n/                   # i18next setup + locales/id|en/*.json
├── layouts/                # Header, Footer, MobileMenu, RootLayout, SectionHeader
└── pages/                  # one file per route
```

Each page is a lazy route, so it ships as its own chunk and is fetched only when a visitor lands on that URL.

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about-us` | About Us |
| `/services` | Services |
| `/contact` | Contact |
| `/faq` | FAQ Center |
| `/legal/privacy-policy` | Privacy Policy |
| `/legal/term-condition` | Terms & Conditions |
| `*` | Redirects to `/` |

## Internationalisation

Two locales live in `src/i18n/locales/`: `id` and `en`. The active language is managed by `LanguageProvider` and stored in `localStorage`; Indonesian is the default and fallback.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, and can also be run manually from **Actions → Deploy to GitHub Pages → Run workflow**.

The base path is derived from the repository name at build time:

- a repository whose name ends in `.github.io` is served from `/`
- any other repository is served from `/<repo>/`

The current remote is `lasuarindo/lasuarindo.github.io`, so the site builds with `BASE_PATH=/` and is served at `https://lasuarindo.github.io/`.

Pages needs to be enabled once: **Settings → Pages → Source: GitHub Actions**.

Deep links such as `/about-us` keep working because the workflow copies `dist/index.html` to `dist/404.html`, which GitHub Pages serves for unknown paths as an SPA fallback.

## Notes

- `dist/` and `node_modules/` are gitignored build output.
- Internal working notes live in `.ignore/` (gitignored, never committed).
- Page imagery under `src/assets/images/` is currently large; asset optimisation is tracked as a separate improvement step.
- See `AGENTS.md` for project conventions.
