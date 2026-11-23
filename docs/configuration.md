# Configuration

## Vite

`vite.config.js`:
- `base` from `process.env.BASE_PATH || '/'`
- alias `@` → `./src`
- React + Tailwind plugins
- Rolldown `codeSplitting.groups` for vendor chunks (react, motion, router, i18n, icons, common)

## Oxlint

`.oxlintrc.json`: react + oxc plugins; `react/rules-of-hooks` is an error, `react/only-export-components` is a warning.

## Environment

No required `.env`. `BASE_PATH` is set by CI.
