# Architecture

## Routing

`src/app/router.jsx` uses `createBrowserRouter` with a `basename` derived from `import.meta.env.BASE_URL`. Every page is lazy-loaded. Legacy Indonesian routes redirect to their English equivalents. `*` → `NotFound`.

## Layout

`RootLayout` (in `src/layouts/RootLayout.jsx`) renders:
- skip link to `#main`
- `Header`
- `<main id="main">` with `Suspense` + `RouteFallback`
- `Footer` (route-aware: the gallery only shows on `/services`)
- `BackToTop`

Pages no longer import chrome themselves.

## Internationalisation

`LanguageProvider` (in `src/context/LanguageContext.jsx`) is the single source of truth. Storage key: `lasuarindo-language` (migrated from `app_language`/`lasuarindo_lang_pref`). `document.documentElement.lang` is kept in sync. Dictionaries live in `src/i18n/locales/{id,en}/*.json`.

## Styling

Tailwind v4 via `@tailwindcss/vite`. `src/index.css` imports `src/assets/css/{tokens,base,layout,surfaces,chrome,animations}.css`. Colour tokens live in `:root` (`tokens.css`) and `src/constants/theme.js`.
