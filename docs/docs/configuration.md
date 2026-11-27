# Configuration

## App scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Local app server |
| `build` | `vite build` | Production build into `dist/` |
| `preview` | `vite preview` | Preview the production build |
| `lint` | `oxlint` | Lint source files |
| `check:parity` | `node scripts/check-i18n-parity.mjs` | Validate locale bundles |
| `docs:dev` | `rspress dev docs` | Local docs server |
| `docs:build` | `rspress build docs` | Docs build into `doc_build/` |
| `docs:preview` | `rspress preview docs` | Preview the built docs |

## Vite

`vite.config.js`:

- `base` comes from `process.env.BASE_PATH || '/'`. CI sets it; see [Deployment](/docs/deployment).
- The `@` alias points to `./src`.
- Plugins: `@vitejs/plugin-react` and `@tailwindcss/vite`.
- The dev server allows a small set of ngrok hosts so a local instance can be shared for review.

### Vendor chunks

Vite 8 bundles with Rolldown. Chunks are declared under `build.rolldownOptions.output.codeSplitting.groups`. The older `advancedChunks` option is deprecated and ignored when `codeSplitting` is present.

| Group | Matches | Priority |
|---|---|---|
| `vendor/react` | `react`, `react-dom`, `scheduler` | 20 |
| `vendor/motion` | `motion`, `motion-dom`, `motion-utils` | 15 |
| `vendor/router` | `react-router` | 15 |
| `vendor/i18n` | `i18next`, `react-i18next` | 15 |
| `vendor/icons` | `lucide-react`, `@icons-pack` | 15 |
| `vendor/common` | anything else in `node_modules` | 10 |

## Oxlint

`.oxlintrc.json` enables the `react` and `oxc` plugins. `react/rules-of-hooks` is an error; `react/only-export-components` is a warning with `allowConstantExport`.

## Locale parity

`npm run check:parity` runs `scripts/check-i18n-parity.mjs`. For every bundle in `src/i18n/locales/id/`, it requires a matching `en/` file and the same flattened keys in both languages. It also rejects the markers `[DRAFT:`, `[NEED:`, `undefined` and `NaN` in string values. CI runs the check before the app build.

This is why a copy change should always touch both locale files. See [Getting Started](/docs/getting-started).

## Environment

No `.env` file is required. `BASE_PATH` is the only build-time variable and is set by the deploy workflow. Nothing secret is needed to build or run the app.

## Docs (Rspress)

`rspress.config.ts` at the repository root uses `defineConfig` from `@rspress/core` (v2):

- `root: 'docs'`, `title: 'Lasuarindo Docs'`, `lang: 'en'`.
- `plugins: [rspressPluginMermaid()]`, which renders the Mermaid diagrams used in these pages.
- `globalStyles: docs/theme.css`, which overrides Rspress's `--rp-c-brand*` variables with the site's brand tokens.
- `themeConfig.nav`: Using the Docs, For Everyone, Docs, Pages, Changelog. The home page opens from the logo. Each destination opens a section with its own sidebar.
- `themeConfig.sidebar`: five keys, `/guide/` for using this site, `/docs/` for technical project documentation, `/for-everyone/` for plain-language explanations, `/pages/` for combined page notes, and `/changelog/` for the change record. See [Navigation](/guide/navigation) for the grouping and collapsible rule.
- Output is `doc_build/`, which is gitignored.

A new or renamed docs page must be registered under the matching sidebar key, and in `themeConfig.nav` if it is meant to be a top-level destination.
