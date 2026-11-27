# Home

The home page is the first page most visitors see. It introduces Lasuarindo Group in a few lines, shows what the group works in, and helps people choose where to go next.

## What you can find

- A short introduction to the group and its way of working.
- The six areas of business the group is involved in.
- A small preview of the businesses in the T46 district.
- Three figures that summarise the group at a glance. One of them is still a placeholder.
- A short partnership story and a link to the FAQ.
- A closing invitation to get in touch.

## Where it links

- **Businesses** for the full description of what the group does.
- **Our Vision** on the About Us page.
- **T46** for the district and its businesses.
- **Contact** for questions or partnerships.
- **FAQ** for quick answers.

## Good to know

Some figures and stories are still being prepared. When a label says draft, the information is illustrative and should not be treated as final.

## For maintainers

- Route: `/` → `src/pages/Home/Home.jsx`, loaded as a lazy chunk.
- Copy: `home.json` through `useHomeStrings`, in both `id` and `en`.
- Data: `src/data/sectors.js` and `src/data/units.js`, resolved with `localized()`.
- Imagery: `src/assets/images/opt/`, including responsive hero sizes.
- SEO: the `home` entry in `src/data/pageMeta.js`.
