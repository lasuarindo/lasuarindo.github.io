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

export default resolveThemeSlots;
