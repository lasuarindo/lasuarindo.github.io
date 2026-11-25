# Home

Route: `/` — `src/pages/Home/Home.jsx`.

The page composes seven sections:

1. **Hero** (`HomeHero`) — badge, four-line headline, lead paragraph, and two CTAs: *Explore Our Businesses* → `/businesses`, *Our Vision* → `/about-us#visi`. Integrity and innovation cards are repeated in desktop and mobile variants.
2. **Ecosystem** (`HomeEcosystem`) — bento grid of the six business lines read from `src/data/sectors.js`, plus a CTA → `/businesses`. The line with `highlight: true` (technology) gets the focus tag.
3. **T46 preview** (`HomeT46Preview`) — six example units from `src/data/units.js` with a CTA → `/ecosystems/t46`.
4. **Impact** (`HomeImpact`) — three figures: 12 units (F12), 6 business lines (F11), and one temporary illustrative value (drafts.md §A, N1).
5. **Journey / Partnership** (`HomeJourney`) — dark section with the partnership image, two paragraphs, and three links to `/contact`.
6. **FAQ teaser** (`FaqTeaser`) — one question and a link to `/faq`.
7. **Final CTA** (`FinalCta`) — `Bermitra Dengan Kami` → `/contact`.

## Notes

- Sector titles and descriptions are localised inline in `sectors.js` as `{ id, en }` objects and resolved with `localized()` — they are not i18n keys.
- All other copy comes from `home.json` through `useStrings`.
- Scroll-reveal animations run through `AnimatedReveal`.