# FAQ

The FAQ answers the questions people ask most often about the group, its businesses and T46.

## What you can find

- A short introduction.
- A list of questions that open to show their answers.
- A link to the contact page for anything not covered.

**Where it links.**

The home page and the Businesses page show a single question with a link to the FAQ. The contact page is the next step when an answer is not enough.

**Where answers come from.**

The answers reuse facts already published on the Businesses, Contact and ecosystem pages. The FAQ introduces no new company claims; it only groups existing answers in one place.

## For maintainers

- Route: `/faq` → `src/pages/Faq/Faq.jsx`, with `FaqHero` and `FaqContent`.
- The accordion uses native `<details>` / `<summary>` built from `t.faq.items` in `faq.json`, so no client-side state is needed.
- Metadata uses the `faq` key in `src/data/pageMeta.js`.
