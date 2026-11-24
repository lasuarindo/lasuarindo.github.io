# Terms & Conditions

Route: `/legal/term-condition` — `src/pages/Terms/Terms.jsx`.

- **Hero** — title, intro, and last-updated date.
- **Seven articles** rendered from `t.terms.sections` in `terms.json` (id + en), separated by dividers.
- **Contact CTA** — links to `/contact`.

## Notes

- The copy is intentionally generic. It must be reviewed by legal counsel before being relied on as a binding document.
- Legacy redirect: `/syarat-ketentuan` → `/legal/term-condition`; `/terms` also redirects to `/legal/term-condition`.
- Metadata comes from `src/data/pageMeta.js` (`terms` key).