# About Us

Route: `/about-us` — `src/pages/AboutUs/AboutUs.jsx`.

Six sections:

1. **Hero** (`AboutHero`) — "Siapa Kami" headline, lead paragraphs, and a four-item feature strip (integrated, sectors, innovation, impact).
2. **Values** (`AboutValues`) — grid of values from `t.about.values` in `about.json`.
3. **Values / strength statement** (`AboutStrengths`) — centred statement between two `66` / `99` markers.
4. **Founder's message** (`AboutFounder`) — portrait and quote block (Ryan Othink, Founder & CEO).
5. **Commissioner's message** (`AboutCommissioner`) — quote block and portrait (Herawati, Commissioner).
6. **Strategic network** (`AboutNetwork`) — stats strip at the bottom of the page.

## Notes

- All copy comes from `about.json` (`{ about: ... }` bundle, id + en) via `useStrings`.
- Headline pairs are split into keys (`heroTitle1`/`heroTitle2`, `valuesHeading1`/`valuesHeading2`) so the second half can be highlighted.