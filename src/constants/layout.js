/**
 * Shared, non-CSS layout tokens. Color values live in `theme.js`; CSS variables
 * are generated from those in `assets/css/tokens.css`.
 */

export const CONTAINER = 'mx-auto w-full max-w-[1280px] px-6';
export const DISPLAY_FONT = 'font-[var(--font-display)]';
export const BODY_FONT = 'font-[var(--font-body)]';

// Shared card treatment: a distinct white surface on the off-white page,
// with a restrained hover lift so informational cards feel interactive.
export const CARD_CLASS =
  'rounded-xl border border-[rgba(228,190,181,0.45)] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(177,38,0,0.35)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]';

// Compact list-row treatment for bullet groups; no divider borders.
export const LIST_ITEM_CLASS =
  'flex items-start gap-3 rounded-lg border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-low)] px-4 py-3 transition-all duration-200 hover:border-[rgba(177,38,0,0.3)] hover:bg-white';
