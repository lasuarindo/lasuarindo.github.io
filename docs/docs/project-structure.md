# Structure

The app and the docs are two separate builds in the same repository. The app uses Vite and lives in `src/`; the docs use Rspress and live in `docs/`.

```
lasuarindo.github.io/
├── .github/workflows/deploy.yml   # app deploy workflow
├── .agents/rules/                 # agent rules, not shipped
├── AGENTS.md, README.md
├── index.html                     # static shell, fonts, default SEO tags
├── package.json, package-lock.json
├── rspress.config.ts              # docs config: root, title, nav + sidebar
├── vite.config.js                 # base path, alias, plugins, vendor chunks
├── .oxlintrc.json
├── public/
│   ├── favicon*.png, favicon.ico, apple-touch-icon.png, icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/check-i18n-parity.mjs  # id/en key parity check
├── docs/                          # Rspress sources (this site)
├── src/
│   ├── main.jsx                   # createRoot + RouterProvider
│   ├── index.css                  # Tailwind entry, imports assets/css/*
│   ├── app/
│   │   ├── paths.js               # every internal destination
│   │   ├── routes.jsx             # path -> page table
│   │   ├── pages.jsx              # lazy page imports
│   │   └── router.jsx             # createBrowserRouter + basename
│   ├── assets/
│   │   ├── css/                   # tokens, base, layout, surfaces, chrome,
│   │   │                          # animations, editorial
│   │   └── images/                # opt/ (shipped WebP), raw/ (source JPEG), logos
│   ├── components/
│   │   ├── layout/                # RootLayout, Header, Footer, MobileMenu
│   │   ├── legal/                 # shared legal page pieces
│   │   └── ui/                    # shared UI pieces
│   ├── constants/                 # theme.js, layout.js
│   ├── data/                      # company, sectors, units, ecosystems,
│   │                              # licences, navigation, pageMeta, ...
│   ├── hooks/                     # useResponsive, usePageMeta, useActiveSection
│   ├── i18n/
│   │   ├── index.js               # i18next init + registerNamespace
│   │   ├── language.js            # LanguageContext + useLanguage
│   │   ├── LanguageProvider.jsx   # <html lang>, storage, i18next sync
│   │   ├── useStrings.js          # page-owned bundle registration
│   │   └── locales/{id,en}/*.json
│   ├── pages/                     # one folder per area; sections/ inside
│   └── utils/                     # localized.js, scrollToSection.js
├── dist/                          # app build output (gitignored)
└── doc_build/                     # docs build output (gitignored)
```

## Where to change what

| Change | Start here |
|---|---|
| Add or rename an internal URL | `src/app/paths.js`, `routes.jsx`, `pages.jsx` |
| Change a page's translated copy | `src/i18n/locales/{id,en}/<page>.json` |
| Add a business line | `src/data/sectors.js` |
| Add a T46 unit or category | `src/data/units.js` and the unit theme/visual data files |
| Add a district | `src/data/ecosystems.js`; the shared district page renders it by key |
| Update contact details | `src/data/company.js` (Footer and Contact read the same object) |
| Add a menu or footer link | `src/data/navigation.js` and `common.json` |
| Change page titles or descriptions | `src/data/pageMeta.js` |
| Change design tokens or the editorial system | `src/constants/theme.js`, `assets/css/tokens.css`, `assets/css/editorial.css` |
| Add a docs page | `docs/` and `rspress.config.ts` |

## Conventions worth knowing

- `paths.js` is the single source of truth for internal destinations. Components use a key or a builder from `routePaths` instead of hardcoding URLs.
- `RootLayout` owns the header, `<main id="main">`, footer, skip link, back-to-top button, metadata and structured data. Pages render their own content only.
- `useStrings` registers a caller-owned `{ id, en }` bundle under the shared `app` namespace. i18next deep-merges contributions, and the strings stay in the page's lazy chunk.
- `pageMeta.js` resolves the more specific route first, so `/units/:slug` and `/ecosystems/t46` do not inherit their parent's metadata.
- The footer gallery is route-aware: it appears only on `/businesses`.
- Pages import imagery from `src/assets/images/opt/`; `raw/` keeps the source JPEGs and is not imported by the app.
