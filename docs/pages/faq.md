# FAQ

The FAQ answers the questions people ask most often about the group, its businesses and T46.

## What you can find

- A short introduction.
- A list of questions that open to show their answers.
- A link to the contact page for anything not covered.

## Where it links

The home page and the Businesses page show a single question with a link to the FAQ. The contact page is the next step when an answer is not enough.

## Good to know

The answers reuse facts that are already published elsewhere on the website. No new company claims are introduced on this page.

## For maintainers

- Route: `/faq` → `src/pages/Faq/Faq.jsx`, with `FaqHero` and `FaqContent`.
- The accordion uses native `<details>` / `<summary>` built from `t.faq.items` in `faq.json`, so no client-side state is needed.
- Metadata uses the `faq` key in `src/data/pageMeta.js`.
