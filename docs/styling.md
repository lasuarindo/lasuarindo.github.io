# Styling

- Tailwind CSS 4 via `@tailwindcss/vite` — there is no `tailwind.config.js`; configuration is CSS-first.
- Colour and font tokens live in `src/assets/css/tokens.css` (`:root`) and `src/constants/theme.js`. Font families are exposed as `--font-display` (Montserrat) and `--font-body` (Inter).
- `src/index.css` imports `tailwindcss`, then `tokens.css` and `base.css`, then the component stylesheets.
- Component stylesheets in `src/assets/css/` (`layout.css`, `surfaces.css`) open their own `@layer components` block so Tailwind utilities keep winning.
- `chrome.css` and `animations.css` are deliberately **unlayered** so they stay above the components layer.
- Glass/nav/scrollbar utilities live in `surfaces.css` and `chrome.css`.
- Layout helpers: `.page` (page root), `.page--dark`, `.section`, `.section--sm`, `.section--surface`, `.section--surface-low`, `.section--dark`, `.section--relative`.

## Horizontal overflow

`html`, `body` (in `base.css`) and `.page` (in `layout.css`) use `overflow-x: clip` plus `width: 100%` / `max-width: 100vw`. This is required for the sticky table of contents on the privacy policy page: an ancestor with `overflow-x: hidden` or `auto` becomes the scroll container and `position: sticky` stops working. Use `clip`, not `hidden`.