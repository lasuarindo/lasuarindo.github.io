# Troubleshooting

Solutions to the failures that come up most often in this repository.

## `npm ci` fails with EUSAGE

The lock file was generated with npm 10. Local npm 12 resolves peer dependencies differently and breaks CI.

```bash
npx npm@10 install
npx npm@10 ci --dry-run --ignore-scripts
```

The dry run must exit 0 before you push.

## Locale parity fails

`npm run check:parity` compares flattened keys in `src/i18n/locales/id` and `en`. The error names the file and key. Add the missing side of the pair, or remove the stray key. It also rejects draft markers and the strings `undefined` and `NaN`.

## A docs page does not appear in the sidebar

Navigation is file-based. Add the page to the `_meta.json` of its folder. A new section also needs an entry in `docs/_nav.json`. `rspress.config.ts` no longer registers pages.

## A deep link returns 404

The deploy workflow copies `dist/index.html` to `dist/404.html` so GitHub Pages can serve unknown paths to the SPA. Local `npm run preview` does not reproduce that fallback; check deep links after deploying.

## The table of contents stops sticking

An ancestor with `overflow-x: hidden` or `auto` becomes the scroll container and breaks `position: sticky`. Use `overflow-x: clip` on `html`, `body` and `.page`, as described in [Styling](/docs/styling):

```css
html,
body,
.page {
  overflow-x: clip;
}
```

## Dark mode uses the wrong colours

`docs/theme.css` defines overrides under `html.rp-dark` and `html.dark`. Check that the `--rp-c-*` and `--rp-home-*` variables there still use tokens from `src/constants/theme.js`:

```css
html.rp-dark,
html.dark {
  --rp-c-brand: #ffb4a3;
  --rp-home-hero-secondary-color: #ffb4a3;
}
```

## The docs home page still looks like default Rspress

The hero and feature cards use separate `--rp-home-*` variables. Overriding only `--rp-c-brand` is not enough; see `docs/theme.css` for the full set.
