# Businesses

Route: `/businesses` — `src/pages/Businesses/Businesses.jsx`. The pre-migration
`/services` path is retired and resolves to NotFound; it is not aliased here.

Sections:

1. **Hero** (`BusinessesHero`) — headline, lead, and partnership CTA.
2. **What we do** (`BusinessesIntro`) — defines the group's role using the six real business lines (F11) and twelve T46 units (F12).
3. **Property** (`BusinessesProperty`) — feature card with three capabilities (planning, design & construction, property management) and a two-image stack.
4. **Creative media** (`BusinessesMedia`) — three entity cards (MSS, Arcadia Segara Cita, Berkah Media Gemilang) with capability lists, plus platform icons.
5. **Technology** (`BusinessesTechnology`) — dark section: Authentic Guards Technology and Berkah Megah Abadi, with an image grid.
6. **Vamos Padelon** (`BusinessesVamos`) — partnership feature with facility tags and social links.
7. **Ecosystem teaser** (`BusinessesEcosystem`) — three example units linking to `/units/:slug` and a CTA to `/ecosystems/t46`; the full twelve live on the district page.
8. **Future projects** (`BusinessesProjects`) — four showcase cards (residential, digital hub, business ecosystem, sustainability).
9. **How we work** (`BusinessesProcess`) — four illustrative steps from `drafts.md` §C.
10. **FAQ teaser** and **final CTA** — shared components linking to `/faq` and `/contact`.

## Notes

- Section copy comes from `businesses.json` (`{ businesses: ... }` bundle, id + en) via `useStrings`.
- The namespace was migrated mechanically from `services.*`; no `services.*` keys remain.
- The footer shows the "creative ecosystem" gallery only on this route (route-aware, catalogue in `src/data/footerGallery.js`).
