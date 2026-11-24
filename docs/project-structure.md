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
│   ├── app/router.jsx           # createBrowserRouter + basename
│   ├── assets/css/              # tokens, base, layout, surfaces, chrome, animations
│   ├── assets/images/           # page imagery
│   ├── components/              # AnimatedReveal, BackToTop, GradientText, Icon, RouteFallback
│   ├── constants/theme.js       # colour + font tokens
│   ├── data/
│   │   ├── sectors.js           # 7-sector catalogue (+ localized())
│   │   └── footerGallery.js     # services-only gallery
│   ├── hooks/useResponsive.js
│   ├── i18n/
│   │   ├── index.js             # i18next init + registerNamespace()
│   │   ├── language.js          # LanguageContext + useLanguage()
│   │   ├── LanguageProvider.jsx # syncs <html lang>, storage, i18next
│   │   ├── useStrings.js        # registers a page namespace, returns t
│   │   └── locales/{id,en}/*.json
│   ├── layouts/                 # RootLayout, Header, Footer, MobileMenu, SectionHeader
│   └── pages/                   # Home, AboutUs, Services, Contact, PrivacyPolicy, NotFound
├── docs/                        # Rspress sources (flat .md pages + pages/)
├── dist/                        # app build output (gitignored)
└── doc_build/                   # docs build output (gitignored)
```

## Notes

- `src/app/router.jsx` is the single source of route definitions.
- `RootLayout` renders the header, `<main id="main">`, footer, and back-to-top button. Pages do not import chrome themselves.
- The sector catalogue lives in `src/data/sectors.js` and is shared by the Home ecosystem grid and the Footer.
- Locale JSON is imported by the page that uses it, so each page carries its own strings in its lazy chunk.
- `docs/` contains no build output; `doc_build/` is the Rspress artifact and is not committed.