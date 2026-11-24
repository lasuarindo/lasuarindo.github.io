# Deployment

## GitHub Pages

`.github/workflows/deploy.yml` runs on every push to `main` (and on manual dispatch). It deploys the app build, not the docs site.

1. Checkout (`actions/checkout@v4`).
2. Derive `BASE_PATH` from `GITHUB_REPOSITORY`: `/` for `*.github.io` user/organisation sites, `/<repo>/` for project sites.
3. Setup Node 22 with npm cache (`actions/setup-node@v4`).
4. `npm ci`.
5. `npm run build`.
6. Copy `dist/index.html` → `dist/404.html` (SPA fallback for deep links).
7. `actions/configure-pages@v5` → `actions/upload-pages-artifact@v3`.

A second job deploys the artifact with `actions/deploy-pages@v4`. A `concurrency` group (`pages`, `cancel-in-progress`) keeps one deploy at a time; the latest run wins.

## One-time activation

Settings → Pages → Source: **GitHub Actions**.

## Deep links

Deep links such as `/about-us` work because GitHub Pages serves `404.html` for unknown paths and that file is a copy of `index.html`.

## Lock file

CI runs `npm ci`, which requires `package-lock.json` to match `package.json` exactly. Regenerate it with npm 10:

```bash
npx npm@10 install
```

Local npm 12+ resolves peer dependencies differently and has broken `npm ci` on CI before. Verify before pushing:

```bash
npx npm@10 ci --dry-run --ignore-scripts
```