# Project Structure

```
lasuarindo.github.io/
├── .github/workflows/deploy.yml
├── .agents/rules/               # agent rules (index.md + leaves), not shipped
├── AGENTS.md
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── rspress.config.ts            # docs config: root, title, nav + sidebar
├── vite.config.js
├── .oxlintrc.json
├── public/
│   ├── favicon*.png, favicon.ico, apple-touch-icon.png
│   ├── icons.svg
│   └── robots.txt
├── src/
│   ├── main.jsx
│   ├── index.css                # imports tailwindcss + assets/css/*
│   ├── app/
│   │   ├── router.jsx           # createBrowserRouter + basename + RootLayout
│   │   ├── routes.jsx           # route table (paths + redirects + 404)
│   │   └── pages.jsx            # lazy page imports
│   ├── assets/css/              # tokens, base, layout, surfaces, chrome, animations
│   ├── assets/images/           # page imagery
│   ├── components/
│   │   ├── layout/              # RootLayout, Header, Footer, MobileMenu
│   │   └── ui/                  # AnimatedReveal, BackToTop, GradientDivider,
│   │                            # GradientText, Icon, LanguageSwitcher,
│   │                            # RouteFallback, SectionHeader, Stars
│   ├── constants/
│   │   ├── theme.js             # colour + font tokens
│   │   └── layout.js            # CONTAINER + font class constants
│   ├── data/
│   │   ├── company.js           # address, email, hours, social links
│   │   ├── navigation.js        # main menu, CTA, footer legal links
│   │   ├── sectors.js           # 7-sector catalogue
│   │   ├── units.js             # 12 T46 units + categories
│   │   ├── network.js           # institutional network (About page)
│   │   ├── pageMeta.js          # per-route SEO title/description
│   │   └── footerGallery.js     # services-only gallery
│   ├── hooks/
│   │   ├── useResponsive.js
│   │   └── usePageMeta.js       # syncs title + meta description per route
│   ├── i18n/
│   │   ├── index.js             # i18next init + registerNamespace()
│   │   ├── language.js          # LanguageContext + useLanguage()
│   │   ├── LanguageProvider.jsx # syncs <html lang>, storage, i18next
│   │   ├── useStrings.js        # registers a page namespace, returns t
│   │   └── locales/{id,en}/*.json
│   ├── pages/                   # one folder per page: Page.jsx + sections/
│   │   ├── Home/                # Home, AboutUs, Services, Contact,
│   │   ├── AboutUs/             # PrivacyPolicy, NotFound
│   │   ├── Services/
│   │   ├── Contact/
│   │   ├── PrivacyPolicy/
│   │   └── NotFound/
│   └── utils/localized.js       # localized({ id, en }, language)
├── docs/                        # Rspress sources (flat .md pages + pages/)
├── dist/                        # app build output (gitignored)
└── doc_build/                   # docs build output (gitignored)
```

## Notes

- `src/app/routes.jsx` is the single source of route definitions; `src/app/pages.jsx` holds the lazy page imports, and `router.jsx` only assembles `RootLayout` + routes.
- `RootLayout` renders the header, `<main id="main">`, footer, and back-to-top button. Pages do not import chrome themselves. It also keeps `document.title` and meta description in sync through `usePageMeta`.
- Factual content lives in `src/data/` (`company.js`, `units.js`, `sectors.js`, `network.js`, `navigation.js`); translatable fields use `{ id, en }` and are read with `localized()` from `src/utils/localized.js`.
- The sector catalogue in `src/data/sectors.js` is shared by the Home ecosystem grid and the Footer; the T46 catalogue in `src/data/units.js` feeds the Services ecosystem section.
- Shared layout constants (`CONTAINER`, `DISPLAY_FONT`, `BODY_FONT`) live in `src/constants/layout.js`; page sections import them instead of redefining local copies.
- The language control is a single `LanguageSwitcher` (`variant`: `pill`, `compact`, `drawer`) used by the header and the mobile menu.
- Locale JSON is imported by the page that uses it, so each page carries its own strings in its lazy chunk.
- `docs/` contains no build output; `doc_build/` is the Rspress artifact and is not committed.