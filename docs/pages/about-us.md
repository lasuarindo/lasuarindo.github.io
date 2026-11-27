# About Us

This page answers the question "who are we?". It explains what the group believes, how it is led, and how it has developed over time.

## What you can find

- The group's vision and mission.
- The values the group says it works by.
- A short statement about its strengths.
- Messages from the founder and the commissioner.
- A timeline of four milestones.
- A look at the wider network the group works with.
- An invitation to get in touch.

## Where it links

- **Businesses** to see what the group actually does.
- **Contact** to start a conversation.
- The home page links to the vision section on this page.

**Timeline status.**

The four milestones are illustrative and marked draft. They should not be read as confirmed company history. See the [draft label definition](/guide/reading-a-page#draft-labels).

## For maintainers

- Route: `/about-us` → `src/pages/AboutUs/AboutUs.jsx`.
- Copy: `about.json` through `useAboutStrings`; headlines are split into pairs so the second half can be highlighted.
- Data: `src/data/leadership.js`, `src/data/network.js` and `src/data/timelineDetails.js`; timeline details are draft.
- The vision section is the anchor target `#visi` used by the Home hero.
- The timeline carousel uses `embla-carousel-react`.
