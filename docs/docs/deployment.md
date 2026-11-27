# Deployment

This page follows a push to `main` from checkout through locale checks, build and the GitHub Pages deploy.

## Pipeline

`.github/workflows/deploy.yml` runs on every push to `main` and on manual dispatch. It deploys the app build, not the docs site.

```mermaid
flowchart LR
    A["Push to main / manual run"] --> B["Checkout"]
    B --> C["Derive BASE_PATH"]
    C --> D["Setup Node 22 + npm cache"]
    D --> E["npm ci"]
    E --> F["npm run check:parity"]
    F --> G["npm run build"]
    G --> H["Copy index.html to 404.html"]
    H --> I["Upload Pages artifact"]
    I --> J["Deploy to GitHub Pages"]
```

1. Checkout with `actions/checkout@v4`.
2. Derive `BASE_PATH` from `GITHUB_REPOSITORY`: `/` for `*.github.io` user or organisation sites, `/<repo>/` for project sites.
3. Set up Node 22 with npm caching (`actions/setup-node@v4`).
4. `npm ci`.
5. `npm run check:parity`, which fails the run if locale bundles are out of sync.
6. `npm run build` into `dist/`.
7. Copy `dist/index.html` to `dist/404.html` as an SPA fallback.
8. `actions/configure-pages@v5` and `actions/upload-pages-artifact@v3`.

### Workflow excerpt

The build job's steps in `.github/workflows/deploy.yml` (comments omitted):

```yaml
- name: Checkout
  uses: actions/checkout@v4

- name: Derive BASE_PATH
  run: |
    REPO="${GITHUB_REPOSITORY#*/}"
    if [[ "$REPO" == *.github.io ]]; then
      echo "BASE_PATH=/" >> "$GITHUB_ENV"
    else
      echo "BASE_PATH=/$REPO/" >> "$GITHUB_ENV"
    fi

- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22
    cache: npm

- name: Install dependencies
  run: npm ci

- name: Check i18n parity
  run: npm run check:parity

- name: Build
  run: npm run build

- name: SPA fallback for GitHub Pages
  run: cp dist/index.html dist/404.html

- name: Setup Pages
  uses: actions/configure-pages@v5

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: dist
```

A second job publishes the artifact with `actions/deploy-pages@v4`. The `pages` concurrency group with `cancel-in-progress` keeps one deploy at a time; the latest run wins.

## One-time activation

In the repository settings, set **Settings → Pages → Source** to **GitHub Actions**. No Pages build configuration is needed after that.

## Deep links

Deep links such as `/about-us` work because GitHub Pages serves `404.html` for unknown paths, and that file is a copy of `index.html`. The app then handles the path with React Router. Query strings, such as the `intent` parameter used by the engagement pages, are handled the same way.

## Static SEO assets

`robots.txt` and `sitemap.xml` are served as-is from `public/`. They are not generated from the route table, so a new public route must be added to the sitemap by hand. The sitemap uses `www.lasuarindo.co.id` as its host and does not include the engagement routes; the site is served at `https://lasuarindo.github.io/`. See [Troubleshooting](/docs/troubleshooting).

## Lock file

CI runs `npm ci`, which requires `package-lock.json` to match `package.json` exactly. Regenerate it with npm 10:

```bash
npx npm@10 install
```

Local npm 12+ resolves peer dependencies differently and has broken `npm ci` on CI before. Verify before pushing:

```bash
npx npm@10 ci --dry-run --ignore-scripts
```

## Docs site

The docs are built locally with `npm run docs:build` and previewed with `npm run docs:preview`; both pass `--base /`. `doc_build/` is gitignored. The deploy workflow uses `npm run docs:build:pages`, which keeps the `/docs/` base from `rspress.config.ts`, then copies the output into `dist/docs/`. One GitHub Pages artifact serves the app at `/` and the docs at `/docs/`. `siteOrigin: 'https://lasuarindo.github.io'` stays fixed for generated URLs. See [Quick start](/docs/quick-start) for the full script list.

Next: [Troubleshooting](/docs/troubleshooting).
