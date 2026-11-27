# Businesses

This page describes the six areas of business that make up the group and the companies connected to them.

## What you can find

- A plain introduction to what the group invests in and manages.
- An overview of the six business areas: investment, property and districts, technology, media and creative work, food and consumer goods, and lifestyle.
- Short sections on each area, with examples of the companies involved.
- A preview of the units operating in T46.
- A look at future projects.
- A short explanation of how the group works, still marked draft.
- A link to common questions and an invitation to contact the group.

## Where it links

- **Units** for the full directory of businesses.
- **T46** for the district those businesses operate in.
- **FAQ** for quick answers.
- **Contact** to discuss a partnership.

**Draft content.**

An older page called Services has been retired; this page is its replacement. The working-steps section and some project descriptions are illustrative and marked draft. See the [draft label definition](/docs/guide-contributing#draft-labels).

## For maintainers

- Route: `/businesses` → `src/pages/Businesses/Businesses.jsx`.
- Copy: `businesses.json` through `useBusinessesStrings`; the namespace was migrated from `services.*`.
- The sector grid reads `src/data/sectors.js`, the same catalogue used by Home.
- Unit previews read `src/data/units.js`.
- The footer gallery appears only on this route, using `src/data/footerGallery.js`.
