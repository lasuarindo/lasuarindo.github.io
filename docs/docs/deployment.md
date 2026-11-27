# Deployment

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

The docs are built locally with `npm run docs:build` and previewed with `npm run docs:preview`. They are not part of the GitHub Pages workflow. `doc_build/` is gitignored. See [Quick start](/docs/quick-start) for the full script list.
