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
│   ├── app/router.jsx           # createBrowserRouter + basename + lazy pages
│   ├── assets/css/              # tokens, base, layout, surfaces, chrome, animations
│   ├── assets/images/           # page imagery
│   ├── components/
│   │   ├── layout/              # RootLayout, Header, Footer, MobileMenu
│   │   └── ui/                  # AnimatedReveal, BackToTop, GradientDivider,
│   │                            # GradientText, Icon, RouteFallback, SectionHeader, Stars
│   ├── constants/
│   │   ├── theme.js             # colour + font tokens
│   │   └── layout.js            # CONTAINER + font class constants
│   ├── data/
│   │   ├── sectors.js           # 7-sector catalogue
│   │   ├── network.js           # institutional network (About page)
│   │   └── footerGallery.js     # services-only gallery
│   ├── hooks/useResponsive.js
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

- `src/app/router.jsx` is the single source of route definitions.
- `RootLayout` renders the header, `<main id="main">`, footer, and back-to-top button. Pages do not import chrome themselves.
- The sector catalogue lives in `src/data/sectors.js` and is shared by the Home ecosystem grid and the Footer. `localized()` lives in `src/utils/localized.js`.
- Shared layout constants (`CONTAINER`, `DISPLAY_FONT`, `BODY_FONT`) live in `src/constants/layout.js`; page sections import them instead of redefining local copies.
- Locale JSON is imported by the page that uses it, so each page carries its own strings in its lazy chunk.
- `docs/` contains no build output; `doc_build/` is the Rspress artifact and is not committed.