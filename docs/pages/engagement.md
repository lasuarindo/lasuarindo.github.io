# Engagement Pages

These three pages explain the different ways visitors can work with the group.

## What you can find

- **Partnership** for organisations that want to build something together with the group.
- **Investor relations** for people interested in investing in or with the group's businesses.
- **Collaboration** for institutions and communities that want to run joint activities.

Each page follows the same simple shape: why the topic matters, who it suits, how a first conversation usually starts, and what kind of cooperation might follow.

## Where it links

Each page ends with a contact invitation. Following it opens the contact form with the right subject already selected, so the message reaches the right conversation.

## Good to know

The exact programme details are still being prepared. That is why each page carries a draft note. You can find the three pages in the site footer and on the Contact page.

## For maintainers

- Routes: `/partnership`, `/investor` and `/collaboration`, each with its own page folder and locale bundle.
- `engagementLinks` in `src/app/paths.js` maps topic → label key, route and contact intent.
- CTAs build `/contact?intent=<topic>`; `ContactForm` preselects the matching subject.
- Each Offer section renders `DraftNote` until programme details are confirmed.
- Caveat: `resolvePageMetaKey` has no cases for these routes, so they currently use the `notFound` metadata entry.
