# Services

Route: `/services` — `src/pages/Services.jsx`.

Six sections:

1. **Hero** (`ServicesHero`) — headline, lead, and CTAs.
2. **Property** (`ServicesProperty`) — feature card with three capabilities (planning, design & construction, property management) and a two-image stack.
3. **Creative media** (`ServicesMedia`) — three service cards (MSS, Arcadia Segara Cita, Berkah Media Gemilang) with capability lists, plus platform icons.
4. **Technology** (`ServicesTechnology`) — dark section: Authentic Guards Technology and Berkah Megah Abadi, with an image grid.
5. **Vamos Padelon** (`ServicesVamos`) — partnership feature with facility tags and social links.
6. **Future projects** (`ServicesProjects`) — project cards (residential, digital hub, business ecosystem, sustainability).

## Notes

- The footer shows the "creative ecosystem" gallery only on this route (route-aware, catalogue in `src/data/footerGallery.js`).
- All section copy comes from `services.json` (`{ services: ... }` bundle, id + en) via `useStrings`; the feature and card arrays (`propertyFeatures`, `mediaCards`, `techCards`, `vamosTags`, `projects`) are locale-driven too.
- Legacy redirect: `/layanan` → `/services`.