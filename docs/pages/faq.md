# FAQ Center

Route: `/faq` — `src/pages/Faq/Faq.jsx`.

- **Hero** — title and intro.
- **Accordion** — native `<details>` / `<summary>` elements built from `t.faq.items` in `faq.json` (id + en). No client-side state is required.
- **Contact CTA** — links to `/contact`.

## Notes

- Answers reuse facts already published on the site (sectors, office address, contact channels); no new company facts are introduced.
- The accordion is keyboard-accessible by default because it relies on `details` / `summary`.
- Metadata comes from `src/data/pageMeta.js` (`faq` key).