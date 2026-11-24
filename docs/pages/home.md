# Home

Route: `/` — `src/pages/Home/Home.jsx`.

The page composes three sections:

1. **Hero** (`HomeHero`) — badge, two-line headline (second line in `GradientText`), lead paragraph, and two CTAs: *Explore* → `/services`, *Vision* → `/about-us`. Integrity and innovation cards are repeated in desktop and mobile variants.
2. **Ecosystem** (`HomeEcosystem`) — bento grid of the seven business sectors read from `src/data/sectors.js`. The sector with `highlight: true` (technology) gets the focus tag.
3. **Journey / Partnership** (`HomeJourney`) — dark section with the partnership image, two paragraphs, and three links to `/contact` (strategic partnership, investor relations, collaboration).

## Notes

- Sector titles and descriptions are localised inline in `sectors.js` as `{ id, en }` objects and resolved with `localized()` — they are not i18n keys.
- All other copy comes from `home.json` through `useStrings`.
- Scroll-reveal animations run through `AnimatedReveal`.