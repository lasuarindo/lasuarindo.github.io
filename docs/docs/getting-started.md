# Getting Started

## Prerequisites

- Node.js 22, the version used by CI.
- npm 10. The lock file was generated with npm 10; newer npm releases can resolve peer dependencies differently and break `npm ci` on CI.

## Install and run

```bash
npm ci
npm run dev        # http://localhost:5173
```

The documentation site runs separately:

```bash
npm run docs:dev
```

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | App dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Oxlint |
| `npm run check:parity` | Check that `id` and `en` bundles have matching keys and no draft markers |
| `npm run docs:dev` | Docs dev server |
| `npm run docs:build` | Build docs into `doc_build/` |
| `npm run docs:preview` | Preview the built docs |

`check:parity` runs in CI before the app build. A key added to only one language fails the deploy, so run it locally before pushing.

## A first change

**Copy.** Edit the key in both `src/i18n/locales/id/<bundle>.json` and `src/i18n/locales/en/<bundle>.json`, then run `npm run check:parity`.

**Factual data.** Business lines, units, districts, contact details and licensing live in `src/data/`. Translatable fields are `{ id, en }` pairs and are read with `localized(value, language)`.

**A new route.** Add the path to `src/app/paths.js`, the lazy import to `src/app/pages.jsx`, the route to `src/app/routes.jsx`, and a metadata entry to `src/data/pageMeta.js`. For a top-level page, also update `src/data/navigation.js` and `public/sitemap.xml`. For docs, add the page to its folder's `_meta.json`; a new section also needs an entry in `docs/_nav.json` and its own `_meta.json`.

## Verification

```bash
npm run check:parity
npm run lint
npm run build
npm run docs:build
```

All four commands must exit 0.

## Lock file drift

When `package.json` changes, regenerate the lock file with npm 10 and check it without installing:

```bash
npx npm@10 install <package>
npx npm@10 ci --dry-run --ignore-scripts
```

See [Deployment](/docs/deployment) for the full CI sequence.
