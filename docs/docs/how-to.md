# How-to Recipes

Short procedures for common changes. Each recipe assumes the app is installed and `npm ci` has been run.

## Add a business unit

1. Add an entry to `src/data/units.js` with a unique `slug`, a `sector`, an `ecosystem`, a `category`, a name, an icon, and bilingual `desc`, `overview` and `capabilities`. A trimmed entry looks like this:

   ```js
   {
     slug: 'pro',
     sector: 'investment',
     ecosystem: 't46',
     category: 'managed',
     name: 'PRO',
     icon: 'trending_up',
     status: 'draft',
     desc: {
       id: 'Investasi & kepemilikan bisnis.',
       en: 'Investment & business ownership.',
     },
   }
   ```

2. Use `{ id, en }` objects for every translatable field. Do not add staff or contract fields.
3. Pick a variant in `src/data/unitTheme.js` and imagery in `src/data/unitVisual.js` so the detail page is distinct.
4. If the unit is still illustrative, set `status: 'draft'` so the UI shows the draft marker.
5. Run `npm run check:parity` and open `/units/<slug>` to check the result.

## Add a district

1. Add an entry to `src/data/ecosystems.js` with a unique `key`, bilingual name and intro, and a theme accent.
2. The shared `District.jsx` page renders it at `/ecosystems/<key>`; no new page component is needed.
3. Set `status: 'draft'` for a planned district so readers see the draft note.
4. Check both `/ecosystems` and the new district URL.

## Add a translation key

1. Add the key to `src/i18n/locales/id/<bundle>.json` and `src/i18n/locales/en/<bundle>.json`.
2. Keep the same nesting in both files so the flattened keys match.
3. Run `npm run check:parity`. It also rejects `[DRAFT:`, `[NEED:`, `undefined` and `NaN` in string values.

## Add a route

1. Add the path to `src/app/paths.js`:

   ```js
   export const paths = {
     home: '/',
     about: '/about-us',
     businesses: '/businesses',
     // ...
   }
   ```

2. Add a lazy import in `src/app/pages.jsx` and a route in `src/app/routes.jsx`.
3. Add an entry to `src/data/pageMeta.js` for the title and description.
4. For a top-level page, update `src/data/navigation.js` and `public/sitemap.xml`.
5. For docs, add the page to its folder's `_meta.json`:

   ```json
   { "type": "file", "name": "first-change", "label": "First change" }
   ```

   A new section also needs an entry in `docs/_nav.json` and its own `_meta.json`.

## Review a change remotely

The dev server allows a small set of ngrok hosts in `vite.config.js`. Start `npm run dev`, expose the port with your ngrok account, and share the generated URL. The allowed hosts are fixed in config, so use one of those domains.

Next: [Deployment](/docs/deployment).
