# Configuration

## Vite

`vite.config.js`:

- `base` from `process.env.BASE_PATH || '/'` (CI sets it; see [Deployment](/deployment)).
- alias `@` → `./src`.
- React + Tailwind plugins.

### Code splitting

Vite 8 bundles with Rolldown. Vendor chunks are declared under `build.rolldownOptions.output.codeSplitting.groups` (`advancedChunks` is deprecated and ignored when `codeSplitting` is present):

| Group | Matches | Priority |
|---|---|---|
| `vendor/react` | `react`, `react-dom`, `scheduler` | 20 |
| `vendor/motion` | `motion`, `motion-dom`, `motion-utils` | 15 |
| `vendor/router` | `react-router` | 15 |
| `vendor/i18n` | `i18next`, `react-i18next` | 15 |
| `vendor/icons` | `lucide-react`, `@icons-pack` | 15 |
| `vendor/common` | anything else in `node_modules` | 10 |

## Oxlint

`.oxlintrc.json`: `react` + `oxc` plugins; `react/rules-of-hooks` is an error, `react/only-export-components` is a warning with `allowConstantExport`.

## Environment

No required `.env`. `BASE_PATH` is set by CI and read at build time.

## Docs (Rspress)

`rspress.config.ts` at the repo root, using `defineConfig` from `@rspress/core` (v2):

- `root: 'docs'`, `title: 'Lasuarindo Docs'`, `lang: 'en'`.
- `themeConfig.nav`: Home, Introduction, Getting Started, Structure.
- `themeConfig.sidebar`: Introduction / Project / Pages — 14 Markdown pages (including [Brand](/brand)).
- Output: `doc_build/` (gitignored).
- Scripts: `docs:dev`, `docs:build`, `docs:preview`.

New or renamed doc pages must be registered in `themeConfig.nav` or `themeConfig.sidebar`.