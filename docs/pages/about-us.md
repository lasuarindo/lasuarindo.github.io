# About Us

Route: `/about-us` — `src/pages/AboutUs/AboutUs.jsx`.

Nine sections:

1. **Hero** (`AboutHero`) — "Siapa Kami" headline, lead paragraphs, and a four-item feature strip.
2. **Vision & mission** (`AboutVision`) — existing `about.json` keys rendered in a `<section id="visi">`, the target of the Home hero's *Our Vision* button, with a secondary link → `/businesses`.
3. **Values** (`AboutValues`) — grid of `{ icon, text: { id, en } }` values from `about.json`.
4. **Values / strength statement** (`AboutStrengths`) — centred statement between two `66` / `99` markers.
5. **Founder's message** (`AboutFounder`) — portrait and quote block (Mochamad Ryan Januar Akbar, Founder & CEO).
6. **Commissioner's message** (`AboutCommissioner`) — quote block and portrait (Herawati, Commissioner).
7. **Timeline** (`AboutTimeline`) — four milestones from drafts.md §B (temporary content).
8. **Strategic network** (`AboutNetwork`) — strip sourced from `data/network.js`.
9. **Final CTA** (`FinalCta`) — `Bermitra Dengan Kami` → `/contact`.

Founder and commissioner names, roles and image alt text come from `src/data/leadership.js`.

## Notes

- All copy comes from `about.json` (`{ about: ... }` bundle, id + en) via `useStrings`.
- Headline pairs are split into keys (`heroTitle1`/`heroTitle2`, `valuesHeading1`/`valuesHeading2`) so the second half can be highlighted.