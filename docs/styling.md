# Styling

- Tailwind CSS 4 via `@tailwindcss/vite` (no `tailwind.config.js`).
- Colour tokens in `src/assets/css/tokens.css` (`:root`) and `src/constants/theme.js`.
- Component stylesheets in `src/assets/css/` using `@layer components`.
- `chrome.css` and `animations.css` are deliberately **unlayered** so they stay above the components layer.
- Glass/nav/scrollbar utilities live in `surfaces.css` and `chrome.css`.
