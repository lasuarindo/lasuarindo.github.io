# Structure Rules

Source layout and conventions for `lasuarindo.github.io`. Load when working on source files.

## Layout

```
src/
├── main.jsx                # createRoot + RouterProvider (no App.jsx wrapper)
├── index.css               # Tailwind entry, imports assets/css/*
├── app/router.jsx          # createBrowserRouter, basename, lazy routes
├── assets/css/             # tokens, base, layout, surfaces, chrome, animations
├── assets/images/          # page imagery (large; optimisation deferred)
├── components/             # AnimatedReveal, BackToTop, GradientText, Icon, RouteFallback
├── data/                   # sectors.js, footerGallery.js
├── hooks/useResponsive.js
├── i18n/                   # index.js, language.js, LanguageProvider.jsx, useStrings.js, locales/id|en/*
├── layouts/                # RootLayout, Header, Footer, MobileMenu, SectionHeader
└── pages/                  # Home, AboutUs, Services, Contact, PrivacyPolicy, NotFound
```

## Routing & chrome

- Router is centralised in `src/app/router.jsx`; pages are `React.lazy` routes; basename from `import.meta.env.BASE_URL`.
- `RootLayout` is the single source of chrome: `LanguageProvider`, skip link, `Header`, `<main id="main" className="page">` with `Suspense` + `RouteFallback`, `Footer`, `BackToTop`.
- Pages render fragments only — no `div className="page"` wrapper (removed). Each page is split into section components (e.g. `HomeHero`, `HomeEcosystem`, `HomeJourney`).
- Do not reintroduce `App.jsx` or a per-page page wrapper.

## i18n

- i18next + react-i18next, 2 languages (`id`, `en`), storage key `lasuarindo-language`.
- Each caller imports its own locale JSON and calls `useStrings(bundle)`, which registers it under namespace `'app'` and returns a `t` supporting both `t.home.badge` and `t('home.badge')`.
- `LanguageProvider` syncs `i18n.changeLanguage` and `document.documentElement.lang`.
- Never centralise all locale imports in one module (eager bundle).
- When adding text, add it to both `id` and `en` bundles.

## Styling

- Tailwind CSS 4 via `@import "tailwindcss"`; no `tailwind.config.js`.
- Tokens: `src/assets/css/tokens.css` (CSS vars generated from `src/constants/theme.js`).
- Prefer Tailwind utility classes; keep inline `style` only for dynamic values (e.g. `backgroundImage: url(${img})`).
- `html`, `body`, `.page` use `overflow-x: clip` (not `hidden`) so `position: sticky` works (TOC in PrivacyPolicy).
- Constants like `CONTAINER`, `BODY_FONT` may be shared within a file; keep them defined if used as `className={CONST}`.

## Component conventions

- Class statics as plain strings; template literals only for genuinely dynamic classes.
- Navigation uses `<Link to>`, not `<button onClick={navigate}>`.
- Header uses `sticky top-0`, never `fixed`.
- Use relevant design skills (`design-taste-frontend`, `brandkit`, `impeccable`, `ui-ux-pro-max`) for visual work.
