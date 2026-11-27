# FAQ

The FAQ answers the questions people ask most often about the group, its businesses and T46.

## What you can find

- A short introduction.
- A search box and category filter chips, followed by questions grouped by topic.
- Questions that open to show their answers.
- A link to the contact page for anything not covered.

## Questions in the bundle

`src/i18n/locales/en/faq.json` and its `id` counterpart carry the same fourteen `items`. Each item has an `id`, a `category`, a `question`, an `answer`, a `status` and a list of `links`. The questions below are the exact English strings from that bundle:

| Category | Question | Status |
|---|---|---|
| About the Group | What is Lasuarindo Group? | actual |
| Business Lines | What are the Group's business lines? | actual |
| Business Lines | Where can I see more detail on each business line? | draft |
| Ecosystem & Units | What is the T46 district? | actual |
| Ecosystem & Units | How many business units operate in T46? | actual |
| Ecosystem & Units | Does each unit have a detail page? | draft |
| Partnership & Investment | Does Lasuarindo Group welcome partnerships? | actual |
| Partnership & Investment | Where should I send an investment or collaboration inquiry? | actual |
| Partnership & Investment | How does the collaboration process work? | draft |
| Legal | Is basic business licensing information available? | actual |
| Legal | Where can I find the privacy policy and terms and conditions? | actual |
| Contact | Where is the Lasuarindo Group office? | actual |
| Contact | How do I contact Lasuarindo Group? | actual |
| Contact | Can the contact form be used for general inquiries? | actual |

`status` is a maintenance marker, not a claim about the answer: the three `draft` items are the ones still waiting on confirmed detail, as the page's `draftLegend` explains. The six category labels come from the `categories` key and double as the filter toolbar.

One item as it appears in the bundle:

```json
{
  "id": "t46-district",
  "category": "ecosystem",
  "question": "What is the T46 district?",
  "answer": "T46 is a Lasuarindo Group business district in Bandung, where twelve units operate within one ecosystem.",
  "status": "actual",
  "links": [
    { "label": "Ecosystems", "key": "ecosystems" },
    { "label": "T46 district", "key": "t46" }
  ]
}
```

**Where it links.**

The home page and the Businesses page show a single question with a link to the FAQ. The contact page is the next step when an answer is not enough.

**Where answers come from.**

The answers reuse facts already published on the Businesses, Contact and ecosystem pages. The FAQ introduces no new company claims; it only groups existing answers in one place.

## For maintainers

- Route: `/faq` → `src/pages/Faq/Faq.jsx`, with `FaqHero` and `FaqContent`.
- The accordion uses native `<details>` / `<summary>` built from `t.faq.items` in `faq.json`. The search box and category chips are separate: `FaqContent.jsx` holds `query` and `activeCategory` in React state and filters the items before grouping them.
- Metadata uses the `faq` key in `src/data/pageMeta.js`.
