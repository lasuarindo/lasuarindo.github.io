# Quick start

Get a local copy running, make one verified change, and run the same checks CI runs. You need Node.js 22 and npm 10. The lock file was generated with npm 10; newer npm releases resolve peer dependencies differently and can break `npm ci` on CI.

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
| `npm run docs:build` | Build docs into `doc_build/` at `/` |
| `npm run docs:build:pages` | Build docs at `/docs/` for GitHub Pages |
| `npm run docs:preview` | Preview the built docs |

`check:parity` runs in CI before the app build. A key added to only one language fails the deploy, so run it locally before pushing.

## Your first verified change

Open `src/i18n/locales/id/home.json` and `src/i18n/locales/en/home.json`, find the `badge` key near the top, and replace both values with the same short phrase in the matching language. Keep the meaning identical; do not translate it mechanically.

The values below are deliberately fake examples, not the strings currently in the repo, so following the steps produces a visible change.

Indonesian, `src/i18n/locales/id/home.json`:

```json
{ "badge": "CONTOH BADGE — UBAH TEKS INI" }
```

English, `src/i18n/locales/en/home.json`:

```json
{ "badge": "EXAMPLE BADGE — CHANGE THIS TEXT" }
```

Start the app and check both languages:

```bash
npm run dev
```

Open `http://localhost:5173`. The new phrase appears in the home hero. Use the language switcher in the header to confirm the English value, then switch back to Indonesian.

## Verification

```bash
npm run check:parity
npm run lint
npm run build
npm run docs:build
```

The parity command must print a success line and exit 0. The other three commands must also exit 0. If parity fails, one locale has a key the other does not have.

## Lock file drift

When `package.json` changes, regenerate the lock file with npm 10 and check it without installing:

```bash
npx npm@10 install <package>
npx npm@10 ci --dry-run --ignore-scripts
```

See [Deployment](/docs/deployment) for the full CI sequence, and [How-to recipes](/docs/how-to) for task-specific procedures.
