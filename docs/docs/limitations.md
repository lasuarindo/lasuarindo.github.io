# Known limitations and migration notes

Facts about what is still open in the repository. These are development notes, not public company claims.

## Engagement routes use fallback metadata

`resolvePageMetaKey` in `src/data/pageMeta.js` has no cases for `/partnership`, `/investor` or `/collaboration`, so those pages currently take the `notFound` title and description. Status: open. No owner assigned.

## Static sitemap is out of date

`public/sitemap.xml` uses `www.lasuarindo.co.id` as its host and does not list the engagement routes. The repository `lasuarindo.github.io` is served at `https://lasuarindo.github.io/`. Status: open. No owner assigned.

## Contact form does not send messages

`ContactForm` validates entries in the browser and shows a success status. It makes no network request. Status: current behaviour.

## Completed migrations

- `/services` was retired in favour of `/businesses`; it is no longer registered.
- Locale namespaces moved from `services.*` to `businesses.*`; no `services.*` keys remain.
- Legacy language keys `app_language` and `lasuarindo_lang_pref` are migrated to `lasuarindo-language` on load.

Add a short summary here when work moves from open to done, and keep the status and owner fields explicit.
