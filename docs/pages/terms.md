# Terms and Conditions

This page sets out the general rules for using the website.

## What you can find

- A short introduction and the date the terms were last updated.
- Sixteen sections covering the usual terms of website use.
- A way to contact the group at the end.

**Where it links.**

The legal index links to the terms. The page also has a contact link.

**Legal review.**

The wording is general and is not written for a specific jurisdiction. It should be reviewed by a legal professional before anyone relies on it as a binding document.

## The sixteen sections

`sections` in `src/i18n/locales/en/terms.json` is an ordered array. Its `id` and `title` values are listed below; the full `paragraphs`, `bullets`, `definitions` and `callout` content stays in the locale bundles:

| # | `id` | Title |
|---|---|---|
| 1 | `acceptance` | Acceptance of Terms |
| 2 | `definitions` | Definitions |
| 3 | `changes` | Changes to These Terms |
| 4 | `use-of-site` | Use of the Site |
| 5 | `accounts` | Accounts and Security |
| 6 | `intellectual-property` | Intellectual Property |
| 7 | `user-content` | User Content |
| 8 | `privacy` | Privacy |
| 9 | `third-parties` | Third-Party Links and Services |
| 10 | `disclaimer` | Disclaimer |
| 11 | `limitation-of-liability` | Limitation of Liability |
| 12 | `indemnification` | Indemnification |
| 13 | `suspension` | Suspension and Termination |
| 14 | `governing-law` | Governing Law and Dispute Resolution |
| 15 | `miscellaneous` | Miscellaneous |
| 16 | `contact` | Contact |

An abridged shape from the bundle (the `paragraphs` fields are omitted here):

```json
{
  "sections": [
    { "id": "acceptance", "title": "Acceptance of Terms" },
    { "id": "definitions", "title": "Definitions" },
    { "id": "changes", "title": "Changes to These Terms" }
  ]
}
```

Four sections also set `"numbered": true`: `disclaimer`, `limitation-of-liability`, `governing-law` and `miscellaneous`. The bundle records `lastUpdatedDate` as `November 24, 2026`, and its `miscellaneous` entry states that the Indonesian version is the primary reference when interpretations differ.

## For maintainers

- Route: `/legal/term-condition` → `src/pages/Terms/Terms.jsx`, with `TermsHero` and `TermsContent`.
- Sixteen sections are rendered from `t.terms.sections` in `terms.json` (id + en) via `useTermsStrings`. `TermsLayout.jsx` has its own outline shell: a collapsible `<details>` list below `lg` and a sticky `lg:top-24` TOC on larger screens.
- Metadata uses the `terms` key in `src/data/pageMeta.js`.
