# Making a Change

A short checklist for anyone updating this repository. It is written in plain steps; the detailed commands live in [Getting Started](/docs/getting-started).

## Checklist

1. Decide which section the change belongs to: [For Everyone](/for-everyone/), [Pages](/pages/) or [Docs](/docs/).
2. If the change adds or edits website copy, update both language files.
3. Run `npm run check:parity` so a missing translation fails early.
4. Run `npm run lint` and `npm run build`.
5. Run `npm run docs:build` to catch broken doc links.
6. Add a short entry to [Changelog](/changelog/) once the change is shipped.

## New pages

A new website page needs a description in the Pages section and, for general readers, a simple entry in the For Everyone section. A new documentation page must be added to the sidebar of its section.

## Things not to do

- Do not invent company facts, dates or numbers.
- Do not remove a draft label before the information is confirmed.
- Do not put technical detail into the For Everyone section.
