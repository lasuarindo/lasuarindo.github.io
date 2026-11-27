# Ecosystems and Units

These pages show where the group's businesses operate and introduce each one individually.

## What you can find

- An overview of the group's ecosystems, centred on the T46 district in Bandung.
- A district page with the address, business categories and the units located there.
- A directory of twelve business units, grouped into three categories.
- A search box and category filters to help find a unit.
- An individual page for each unit, with an overview, its capabilities and images.
- A planned future ecosystem, clearly marked as draft.

**Where it links.**

- **Contact** for questions about the district or a unit.
- **Businesses** for the wider description of the group's work.

**Draft entries.**

The planned district is marked draft, and some unit entries carry draft markers for illustrative copy. See the [draft label definition](/docs/guide-contributing#draft-labels). The directory contains twelve units in three categories: directly managed, partnerships and the district ecosystem.

## For maintainers

- Routes: `/ecosystems`, `/ecosystems/:key`, `/units` and `/units/:slug`, rendered by `Ecosystems.jsx`, `District.jsx`, `Units.jsx` and `UnitDetail.jsx`.
- Catalogues: `src/data/ecosystems.js` and `src/data/units.js`; unit detail variants come from `unitTheme.js`, `unitVisual.js` and `unitEnrichment.js`.
- An unknown district key or unit slug renders NotFound.
- `StructuredData` adds LocalBusiness JSON-LD only on `/ecosystems/t46`.
- `RootLayout` supplies a per-unit metadata override on detail pages.
