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

## Theme slots and catalogue shape

`src/pages/Units/sections/themeRegistry.js` maps data-driven variant keys to components. The maps hold components only, so importing the registry does not create JSX/HMR warnings:

```js
// src/pages/Units/sections/themeRegistry.js
import { resolveUnitTheme } from '@/data/unitTheme';
import { LedgerHero, SiteHero, ProtocolHero, MenuHero, CourtHero, IndexHero, PosterHero } from './HeroTheme';
import { LedgerOverview, SplitOverview, QuoteOverview, GridOverview } from './OverviewTheme';
import { NumberedCaps, TileCaps, MenuCaps, ProtocolCaps, StripCaps } from './CapabilitiesTheme';
import { NotesTheme } from './NotesTheme';
import { ClosingRail, ClosingSplit, ClosingIndex, ClosingQuiet } from './ClosingTheme';

/** One mapping table for every theme slot. No JSX here, so no HMR warnings. */
const HEROES = {
  ledger: LedgerHero,
  site: SiteHero,
  protocol: ProtocolHero,
  menu: MenuHero,
  court: CourtHero,
  index: IndexHero,
  poster: PosterHero,
};

const OVERVIEWS = {
  ledger: LedgerOverview,
  split: SplitOverview,
  quote: QuoteOverview,
  grid: GridOverview,
};

const CAPABILITIES = {
  numbered: NumberedCaps,
  tiles: TileCaps,
  menu: MenuCaps,
  protocol: ProtocolCaps,
  strip: StripCaps,
};

const CLOSINGS = {
  rail: ClosingRail,
  split: ClosingSplit,
  index: ClosingIndex,
  quiet: ClosingQuiet,
};

/** Resolves data-driven variant keys to the components that render them. */
export function resolveThemeSlots(unit, index) {
  const theme = resolveUnitTheme(unit, index);

  return {
    theme,
    Hero: HEROES[theme.hero] || LedgerHero,
    Overview: OVERVIEWS[theme.overview] || LedgerOverview,
    Capabilities: CAPABILITIES[theme.capabilities] || NumberedCaps,
    Notes: NotesTheme,
    Closing: CLOSINGS[theme.closing] || ClosingRail,
  };
}
```

One entry from `src/data/units.js`:

```js
{
  slug: 'pro',
  sector: 'investment',
  ecosystem: 't46',
  status: 'draft',
  name: 'PRO',
  category: 'managed',
  icon: 'trending_up',
  desc: { id: 'Investasi & kepemilikan bisnis.', en: 'Investment & business ownership.' },
  overview: {
    id: 'PRO mengelola investasi dan kepemilikan bisnis dalam grup.',
    en: "PRO manages the group's investments and business ownership.",
  },
  capabilities: [
    { id: 'Investasi strategis', en: 'Strategic investments' },
    { id: 'Pengelolaan aset', en: 'Asset management' },
  ],
}
```

`unitCategories` groups entries under `managed`, `partnership` and `spaces`; `units` is the flat list built with `flatMap`, and `getUnitBySlug` returns `undefined` for an unknown slug so the detail route can render NotFound. As the file header notes, `status: 'draft'` marks the overview and capabilities as temporary illustrative copy, and internal staff and contract fields are deliberately absent from the public catalogue.

## For maintainers

- Routes: `/ecosystems`, `/ecosystems/:key`, `/units` and `/units/:slug`, rendered by `Ecosystems.jsx`, `District.jsx`, `Units.jsx` and `UnitDetail.jsx`.
- Catalogues: `src/data/ecosystems.js` and `src/data/units.js`; unit detail variants come from `unitTheme.js`, `unitVisual.js` and `unitEnrichment.js`.
- An unknown district key or unit slug renders NotFound.
- `StructuredData` adds LocalBusiness JSON-LD only on `/ecosystems/t46`.
- `RootLayout` supplies a per-unit metadata override on detail pages.
