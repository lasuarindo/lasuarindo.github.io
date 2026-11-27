# Configuration

Scripts, Vite settings, lint rules, locale parity checks and the build-time environment variable live here.

## App scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Local app server |
| `build` | `vite build` | Production build into `dist/` |
| `preview` | `vite preview` | Preview the production build |
| `lint` | `oxlint` | Lint source files |
| `check:parity` | `node scripts/check-i18n-parity.mjs` | Validate locale bundles |
| `docs:dev` | `rspress dev docs --base /` | Local docs server |
| `docs:build` | `rspress build docs --base /` | Local docs build into `doc_build/` |
| `docs:build:pages` | `rspress build docs` | Pages docs build at `/docs/` |
| `docs:preview` | `rspress preview docs --base /` | Preview the built docs |

## Vite

`vite.config.js`:

- `base` comes from `process.env.BASE_PATH || '/'`. CI sets it; see [Deployment](/docs/deployment).
- The `@` alias points to `./src`.
- Plugins: `@vitejs/plugin-react` and `@tailwindcss/vite`.
- The dev server allows a small set of ngrok hosts so a local instance can be shared for review.

The relevant part of the file (vendor chunk groups are covered below):

```js
// vite.config.js
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
```

### Vendor chunks

Vite 8 bundles with Rolldown. Chunks are declared under `build.rolldownOptions.output.codeSplitting.groups`. The older `advancedChunks` option is deprecated and ignored when `codeSplitting` is present:

```js
// vite.config.js
{
  name: 'vendor/react',
  test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
  priority: 20,
}
```

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

This is why a copy change should always touch both locale files. See [Quick start](/docs/quick-start).

## Environment

No `.env` file is required. `BASE_PATH` is the only build-time variable: `vite.config.js` falls back to `/` when it is unset, and the deploy workflow sets the correct value for the repository.

| Situation | `BASE_PATH` | Docs base |
|---|---|---|
| Organisation or user site (`<owner>.github.io`) | `/` | `/docs/` via `docs:build:pages` |
| Project site (`<owner>.github.io/<repo>/`) | `/<repo>/` | `/docs/` via `docs:build:pages` |
| Local `npm run dev`, `npm run preview`, `npm run docs:*` | unset, so `/` | `/` via `--base /` |

`rspress.config.ts` keeps `/docs/` as the published base; the local docs scripts override it with Rspress's `--base /` flag. Nothing secret is needed; see [Deployment](/docs/deployment).

## Documentation site

The Rspress setup, file-based navigation and theme live in the [Docs Guide](/docs/guide-overview) section.

Next: [Deployment](/docs/deployment).
