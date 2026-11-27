# Changelog

A short record of work already shipped on the website. Entries below are summarised from the repository's commit messages, grouped by date. They are a development record, not a legal or contractual document.

## 2026-11-27

- Restructured the documentation into Docs Guide, Docs, For Everyone, Pages and Changelog sections (`c898925`).
- Moved navigation and sidebars into Rspress `_nav.json` and `_meta.json` files (`40cbe84`).
- Added tutorial, how-to, troubleshooting and limitations pages to close the Diátaxis gaps; corrected stale navigation, brand-token and contact-form guidance, revisited earlier changelog entries, added real code snippets and expanded short descriptions (`17cf3b8`).
- Consolidated 13 fragmented pages into 11 goal-oriented pages, kept Docs Guide as a sidebar group, and expanded the architecture guide with code examples for routing, assets, components, hooks, i18n and pages (`33161ca`).
- Expanded thin docs pages with source-backed examples (`1558bf9`).
- Aligned the docs home theme with editorial tokens and improved dark-mode CTA contrast (`99b4a42`).
- Fixed reader flow across the docs and closed small content gaps (`029cb56`).
- Loaded the brand fonts and logo in docs and corrected the home page's heading and link semantics (`b6a9d1d`).
- Shortened the home CTA labels and restored feature-card styling (`e6e3484`).
- Restyled the docs home as an editorial masthead and numbered index (`2d348d2`).
- Made the home index descriptions more concrete (`12d16e8`).
- Added a styled stack and environment section to the docs home (`6cc1996`).
- Linked the home stack items to their source packages (`40ca56c`).

## 2026-11-26

- Diversified unit imagery and gallery assets (`af13ad4`).
- Refreshed page imagery and improved table-of-contents contrast (`ab91738`).
- Split unit detail themes into reusable slots and added a closing theme (`b66516e`).
- Generalised ecosystem wording and links on the Businesses page (`56650ef`).
- Layered general and specific sector copy on Businesses (`161d117`).
- Added themed unit dossiers and scaled district facts (`fee52e9`).
- Harmonised type flow and scaled the unit directory (`fd07f89`).
- Distinguished sector sections and added marked unit enrichment (`b458627`).
- Aligned the FAQ page with the editorial design system and enriched its content (`364e7ad`).
- Redesigned the Privacy Policy as a long-form editorial page (`57427d0`).
- Redesigned the Terms page with consistent numbering (`374d979`).
- Softened the footer contact flow by removing full-width dividers (`50c58fb`).
- Softened the contact form focus ring to the control group only (`24b163e`).
- Aligned the Contact page with the editorial design system (`5450261`).

## 2026-11-25

- Grouped all footer routes and restored the dark editorial footer (`f5ddfc4`).
- Unified the header and footer with the editorial design system (`705a79f`).
- Centred the timeline's end years and let arrows follow the active state (`6f353bf`).
- Centralised all internal paths in `src/app/paths.js` and fixed legal-page contrast and definition-list markup (`14e0762`).
- Gave each engagement topic its own detailed page (`44bca76`).
- Split sector sections and polished the timeline (`8942a8a`).
- Refined sector cards, unit badges and the timeline (`334791b`).
- Added the Embla carousel dependency for upcoming sections (`ddb0ba4`).
- Added layout variants and expanded section content (`6df3b6b`).
- Enriched profile sections and added interactive patterns (`c24d0ce`).
- Clarified sectors and marked draft data (`0abc86c`).
- Allowed common ngrok hosts on the dev server for remote review (`4132dd9`).
- Replaced gradients, glass cards and scroll reveals with a paper-and-ink editorial system, widened reduced motion to all animations and transitions, and optimised page imagery to WebP (`3847001`).

  ```css
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  ```

- Retired `/services` in favour of `/businesses`, including its locale namespace (`9d2b3df`).
- Added a dependency-free i18n parity check: `check:parity` compares flattened `id` and `en` keys, rejects document-only markers, and runs as a CI step before the build (`9d2b3df`).

  ```js
  /**
   * Verify that every id locale key has an en counterpart (and vice versa),
   * and that no document-only marker leaked into published copy.
   *
   * Usage: node scripts/check-i18n-parity.mjs
   * Exits 1 on any missing key or forbidden marker. No dependencies required.
   */
  ```

## 2026-11-24

- Moved legal pages to `/legal/privacy-policy` and `/legal/term-condition`, retired the older and Indonesian redirects, and updated footer links and metadata (`b3f48b9`, `2d3d76a`).
- Built the Terms and Privacy pages from shared legal components with a scroll-spy outline and consistent clause numbering (`3e21da7`).
- Restructured the footer into brand, Navigation and Help columns and added minimal Terms and FAQ pages (`f974e03`).
- Added shared modules for company facts, navigation, units and page metadata, and split the router into routes and lazy page imports (`02a5663`).
- Moved layout chrome and shared UI into dedicated folders and split pages into a page file plus section components (`517c1b0`).
- Switched to explicit Lucide and Tabler icon imports and removed the Material Symbols font (`058bd6c`).
- Added a public T46 unit directory grouped into managed, partnership and district units (`53f0948`).
- Updated docs for React 19 and Rspress v2, enabled Mermaid rendering and registered a brand page (`5faa4c3`).
- Slimmed `AGENTS.md` and moved detailed rules into `.agents/rules` (`910d1b6`); migrated the docs site from VitePress to Rspress v2 (`4a3ea5d`).
- Reinstated i18next with per-page namespace registration and adopted per-page locale bundles for translation (`703f41f`, `04b1788`).
- Added a local `.plan/.gitignore` so private refactor notes stay untracked (`1ed3a75`).

## 2026-11-23

- Converted inline styles in pages and layout to Tailwind utilities and plain string class names (`99ccdd2`, `d9d1ae6`, `7d59098`, `928149f`).
- Moved theme tokens into CSS custom properties and split `index.css` into modular stylesheets (`59f40c0`, `e4bb529`).
- Fixed sticky table-of-contents positioning with `overflow-x: clip` on `html`, `body` and `.page`, and removed a motion wrapper that broke stickiness (`9e43021`, `0c71e33`, `de468fb`).
- Removed the page wrapper and `App.jsx`, and moved `LanguageProvider` into `RootLayout` (`1a6bd47`, `8caec98`).
- Made `RootLayout` the single source of chrome — skip link, header, `main#main` with `Suspense`, footer and back-to-top — and added a `NotFound` fallback with GitHub Pages `basename` handling (`971e9d5`, `079ea2e`).

  ```jsx
  <a href="#main" className="skip-link">
    {t.skipLink}
  </a>
  <Header />
  <main id="main" key={location.pathname}>
    <Suspense fallback={<RouteFallback />}>
      <Outlet />
    </Suspense>
  </main>
  <Footer />
  <BackToTop />
  ```
- Split pages into section components with shared CSS classes and added a lazy-route fallback (`ebc00f5`, `e163d43`, `5aab3d5`).
- Extracted the sectors catalogue and footer gallery into data modules (`0db8d21`).
- Fixed the language context error, header stickiness and links rendered as buttons (`4ae425f`), and restored `CONTAINER` after a runtime error (`db9ffc8`).
- Regenerated the lock file with npm 10 for CI compatibility and synced it with `package.json` (`72143d6`, `c531b55`).
- Added a GitHub Pages deploy workflow with an SPA fallback and gitignored the docs build output (`da1b0fb`, `171b406`).
- Added VitePress documentation, later replaced by Rspress (`034a948`).
- Switched to per-page locale loading through `useStrings`, replacing the eager-resource i18next setup (`971e9d5`).
- Started tracking the `.ignore` gitignore file (`487c700`).

## 2026-11-19

- Rebuilt `AGENTS.md` into a versioned document with numbered sections and an explicit precedence order (`7b0f696`), and added project agent rules (`e74250d`).
- Added the `@` alias to Vite and switched internal imports to use it (`bbcec0b`, `a158262`).
- Code-split route pages with `React.lazy` and a `Suspense` fallback (`9a29ea7`).
- Grouped Rolldown vendor chunks under `dist/assets/vendor` and enabled `codeSplitting`, reducing the app entry chunk (`a52928e`, `85f9545`).
- Added motion, icon, styling and translation dependencies with dormant configuration (`49fb668`); Tailwind v4 was activated the same day with layer-only imports so the custom reset stayed intact (`3a20d86`).
- Added `@tabler/icons-react` and brand-icon entries to the shared `Icon` component, then switched Footer, Contact and Services social links to those icons (`ad092dc`).
- Replaced the hand-rolled context router with a `react-router` configuration and declarative redirects for the legacy Indonesian URLs (`3a20d86`). The same commit split the monolithic translation file into i18next namespaced locale JSONs and moved layout and page files to English names with aliases for the old ones:

  ```jsx
  // src/App.jsx
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about-us',
          element: <AboutUs />,
        },
  ```

## 2026-11-17

- Added the initial React/Vite scaffold: a context-based custom router with legacy Indonesian redirects, an ID/EN language context with local dictionaries, CSS custom-property theme tokens, shared UI components and five page components (`f651884`). The token block already fixed the primary red used by the site:

  ```css
  /* src/index.css */
  :root {
    --color-primary: #b12600;
    --color-primary-container: #d83910;
    --color-on-primary: #ffffff;
    --color-primary-fixed: #ffdad2;
    --color-primary-fixed-dim: #ffb4a3;
  ```

## How entries are added

This page follows the repository history. When a change is shipped, add a short, plain summary under the current date. Recent entries name the commit hash; older dates group related commits into one bullet. Do not add planned work or unverified company facts.
