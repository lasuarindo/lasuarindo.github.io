# Troubleshooting

Solutions to failures that come up in the application, plus the known limitations still open in the repository. For documentation-site problems, see [Docs Guide contributing](/docs/guide-contributing#docs-site-troubleshooting).

## `npm ci` fails with EUSAGE

The lock file was generated with npm 10. Local npm 12 resolves peer dependencies differently and breaks CI.

```bash
npx npm@10 install
npx npm@10 ci --dry-run --ignore-scripts
```

The dry run must exit 0 before you push.

## Locale parity fails

`npm run check:parity` compares flattened keys in `src/i18n/locales/id` and `en`. The error names the file and key. Add the missing side of the pair, or remove the stray key. It also rejects draft markers and the strings `undefined` and `NaN`.

## A deep link returns 404

The deploy workflow copies `dist/index.html` to `dist/404.html` so GitHub Pages can serve unknown paths to the SPA. Local `npm run preview` does not reproduce that fallback; check deep links after deploying.

## The table of contents stops sticking

An ancestor with `overflow-x: hidden` or `auto` becomes the scroll container and breaks `position: sticky`. Use `overflow-x: clip` on `html`, `body` and `.page`, as described in [Design system](/docs/design-system):

```css
html,
body,
.page {
  overflow-x: clip;
}
```

## Known limitations

- **Engagement metadata.** `resolvePageMetaKey` in `src/data/pageMeta.js` has no cases for `/partnership`, `/investor` or `/collaboration`, so those pages use the `notFound` title and description. Status: open. No owner assigned.
- **Static sitemap.** `public/sitemap.xml` uses `www.lasuarindo.co.id` as its host and does not list the engagement routes. The repository is served at `https://lasuarindo.github.io/`. Status: open. No owner assigned.
- **Contact form.** `ContactForm` validates entries in the browser and shows a success status. It makes no network request. Status: current behaviour.

## Completed migrations

- `/services` was retired in favour of `/businesses`; it is no longer registered.
- Locale namespaces moved from `services.*` to `businesses.*`; no `services.*` keys remain.
- Legacy language keys `app_language` and `lasuarindo_lang_pref` are migrated to `lasuarindo-language` on load.

Add a short summary here when work moves from open to done, and keep the status and owner fields explicit.
