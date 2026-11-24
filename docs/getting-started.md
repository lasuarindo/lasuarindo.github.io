# Getting Started

## Prerequisites

- Node.js 22 — the version used by the CI workflow.
- npm 10 — the lock file is generated with npm 10. Newer local npm releases can resolve peer dependencies differently and break `npm ci` on CI.

## Installation

```bash
npm ci
npm run dev        # http://localhost:5173
```

## Regenerating the lock file

If you change `package.json`, regenerate `package-lock.json` with npm 10 so it stays in sync with CI:

```bash
npx npm@10 install <package>
```

Check that the lock file still satisfies CI without installing:

```bash
npx npm@10 ci --dry-run --ignore-scripts
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | app dev server |
| `npm run build` | production build (`dist/`) |
| `npm run preview` | preview the production build |
| `npm run lint` | oxlint |
| `npm run docs:dev` | docs dev server |
| `npm run docs:build` | build docs (`doc_build/`) |
| `npm run docs:preview` | preview the built docs |

## Verification

```bash
npm run lint
npm run build
npm run docs:build
```

Both builds must exit 0. See [Deployment](/deployment) for what CI runs.