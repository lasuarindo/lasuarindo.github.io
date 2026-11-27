# Terms and Conditions

This page sets out the general rules for using the website.

## What you can find

- A short introduction and the date the terms were last updated.
- Seven numbered sections covering the usual terms of website use.
- A way to contact the group at the end.

**Where it links.**

The legal index links to the terms. The page also has a contact link.

**Legal review.**

The wording is general and is not written for a specific jurisdiction. It should be reviewed by a legal professional before anyone relies on it as a binding document.

## For maintainers

- Route: `/legal/term-condition` → `src/pages/Terms/Terms.jsx`, with `TermsHero` and `TermsContent`.
- Seven articles are rendered from `t.terms.sections` in `terms.json` (id + en) via `useTermsStrings`.
- Metadata uses the `terms` key in `src/data/pageMeta.js`.
