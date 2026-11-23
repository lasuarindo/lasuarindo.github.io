# Project Structure

```
lasuarindo.github.io/
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   ├── favicon*.png, favicon.ico, apple-touch-icon.png, favicon.svg
│   ├── icons.svg
│   └── robots.txt
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── app/router.jsx          # createBrowserRouter + basename
│   ├── assets/css/             # tokens, base, layout, surfaces, chrome, animations
│   ├── assets/images/          # page imagery
│   ├── components/             # AnimatedReveal, BackToTop, GradientText, Icon, RouteFallback
│   ├── constants/theme.js
│   ├── context/LanguageContext.jsx
│   ├── data/                   # footerGallery, sectors (+ localized)
│   ├── hooks/useResponsive.js
│   ├── i18n/                   # index.js, locales/id|en/*.json
│   ├── layouts/                # Header, Footer, MobileMenu, RootLayout, SectionHeader
│   └── pages/                  # Home, AboutUs, Services, Contact, PrivacyPolicy, NotFound
└── docs/                       # VitePress
```

## Notes

- `src/app/router.jsx` is the single source of route definitions.
- `RootLayout` renders the header, `<main id="main">`, footer, and back-to-top button.
- The single sector catalogue lives in `src/data/sectors.js`.
