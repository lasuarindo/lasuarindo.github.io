# Privacy Policy

Route: `/legal/privacy-policy` — `src/pages/PrivacyPolicy/PrivacyPolicy.jsx`.

- **Hero** — title and intro.
- **Sticky table of contents** — a sidebar list of the eight articles. It is `position: sticky` only from the `lg` breakpoint (`lg:top-[100px]`); below that it stacks above the content.
- **Eight articles**, each an anchored block: `pendahuluan`, `informasi-dikumpulkan`, `penggunaan-informasi`, `perlindungan-data`, `berbagi-data`, `cookies`, `hak-pengguna`, `perubahan-kebijakan`.

## Notes

- TOC entries come from `t.privacy.toc` in `privacy.json` and are matched to the article `id`s, so adding an article means adding one entry to both locales.
- In-page jumps rely on `scroll-behavior: smooth` (set on `html`).
- The sticky TOC is the reason `overflow-x: clip` is used instead of `hidden` on `html`, `body`, and `.page` — see [Styling](/styling).
- Hero, TOC, and all eight articles come from `privacy.json` (`{ privacy: ... }` bundle, id + en), including the cookie table and user-rights content.
- Legacy redirect: `/kebijakan-privasi` → `/legal/privacy-policy`; `/privacy-policy` also redirects to `/legal/privacy-policy`.