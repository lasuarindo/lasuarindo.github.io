# Deployment

## GitHub Pages

`.github/workflows/deploy.yml`:
1. Checkout
2. Derive `BASE_PATH` (`/` for `*.github.io`, `/<repo>/` otherwise)
3. Setup Node 22 + npm cache
4. `npm ci`
5. `npm run build`
6. Copy `dist/index.html` → `dist/404.html` (SPA fallback for deep links)
7. `configure-pages` → upload artifact → deploy

## One-time activation

Settings → Pages → Source: **GitHub Actions**.

## Deep links

Deep links such as `/about-us` work because of the `404.html` fallback.
