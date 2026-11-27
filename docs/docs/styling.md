# Styling

Styling has two layers of intent: Tailwind utilities handle layout and one-off details, while a small editorial stylesheet decides the final typography, surfaces and buttons. Understanding the import order explains why some rules win over utilities.

## Entry point and import order

`src/index.css` is the only stylesheet imported by `main.jsx`:

```css
@import "tailwindcss";
@import "./assets/css/tokens.css";
@import "./assets/css/base.css";
@import "./assets/css/layout.css";
@import "./assets/css/surfaces.css";
@import "./assets/css/chrome.css";
@import "./assets/css/animations.css";
@import "./assets/css/editorial.css";
```

| File | Layer | Role |
|---|---|---|
| `tokens.css` | base | CSS custom properties for colour, type and spacing |
| `base.css` | base | Reset, `html`/`body` behaviour, smooth scrolling |
| `layout.css` | components | `.page`, `.section` and grid helpers |
| `surfaces.css` | components | Cards, glass and scrollbar treatments |
| `chrome.css` | unlayered | Header, footer and navigation chrome |
| `animations.css` | unlayered | Entrance and reveal animations |
| `editorial.css` | unlayered | The final visual system, loaded last |

`layout.css` and `surfaces.css` open their own `@layer components` block, so Tailwind utilities still win over them. `chrome.css` and `animations.css` stay unlayered to keep the same precedence they had before the split.

## Tokens

Tailwind CSS 4 is used through `@tailwindcss/vite`; there is no `tailwind.config.js`, and configuration is CSS-first. Colour and font tokens are defined in `src/constants/theme.js`, exposed as custom properties in `tokens.css`, and consumed in JSX as `var(--token-name)`. Font families are `--font-display` (Montserrat) and `--font-body` (Inter), loaded in `index.html`.

See [Brand](/docs/brand) for the palette values and the constraints on using logo colours.

## The editorial system

`editorial.css` is loaded last and is unlayered, so a semantic class from it wins over an incidental Tailwind utility. Its direction is paper, ink and one red: no gradients, no glass, and no per-card scroll reveals.

| Family | Classes | Used for |
|---|---|---|
| Eyebrows | `.eyebrow`, `.eyebrow--light` | Small uppercase section labels |
| Display | `.display`, `.display--hero`, `.display--section`, `.display--card`, `.display--light` | Headings at a single type scale |
| Body | `.lead`, `.lead--light`, `.prose`, `.prose--light` | Introductions and paragraphs |
| Structure | `.wrap`, `.section`, `.section--paper`, `.section--neutral`, `.section--ink`, `.section--tight`, `.rule`, `.split` | Page rhythm and surfaces |
| Controls | `.btn`, `.btn--solid`, `.btn--outline`, `.btn--light`, `.link-arrow` | Calls to action and inline links |

Shared measurements live in `:root`: `--wrap`, `--gutter`, `--section-y` and `--rule`. Page sections import `CONTAINER` and font constants from `src/constants/layout.js` when a class string is shared.

## Horizontal overflow

`html` and `body` in `base.css`, and `.page` in `layout.css`, use `overflow-x: clip` with `width: 100%` / `max-width: 100vw`. The sticky table of contents on the Privacy Policy page depends on this: an ancestor with `overflow-x: hidden` or `auto` becomes the scroll container, and `position: sticky` stops working. Use `clip`, never `hidden`.

## Practical rules

- Prefer Tailwind utilities for local layout adjustments; reach for editorial classes for repeated page patterns.
- Keep inline `style` for genuinely dynamic values, such as a background image URL or an accent colour from a district theme.
- Do not expect a Tailwind utility to override an editorial class. If a rule must change, change the editorial class or add a scoped variant.
- Motion is shared through `AnimatedReveal` and `animations.css`; respect reduced-motion behaviour rather than adding page-specific animation logic.
