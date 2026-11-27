# Documentation

Technical documentation for the Lasuarindo Group website. This section is for people who work on the code: developers, designers and maintainers. For a general introduction, use the [Guide](/guide/) or the [For Everyone](/for-everyone/) section. For notes on every page, use [Pages](/pages/).

## What is covered

| Area | Where to read |
|---|---|
| Welcome | [Introduction](/docs/introduction), [Getting Started](/docs/getting-started) |
| How the project is organised | [Structure](/docs/project-structure), [Architecture](/docs/architecture) |
| Day-to-day work | [Configuration](/docs/configuration), [Styling](/docs/styling), [Brand](/docs/brand) |
| Publishing | [Deployment](/docs/deployment) |
| More | [Guide](/guide/), [For Everyone](/for-everyone/), [Pages](/pages/), [Changelog](/changelog/), [GitHub](https://github.com/lasuarindo) |

## Key facts

| | |
|---|---|
| Product | Bilingual (Indonesian / English) company profile |
| App | React 19, React Router 7, Vite 8 with Rolldown, Tailwind CSS 4 |
| Content | i18next + react-i18next, one locale bundle per page |
| Data | `src/data/` catalogues with `{ id, en }` fields |
| Routes | 17 lazy routes, including data-driven district and unit details |
| Docs | Rspress v2, configured in `rspress.config.ts` |

## Where to start

- New to the repo? Read [Introduction](/docs/introduction), then [Getting Started](/docs/getting-started).
- Need to find a file? See [Structure](/docs/project-structure).
- Need to understand routing, translations or metadata? See [Architecture](/docs/architecture).
- Need to change how things look? See [Styling](/docs/styling) and [Brand](/docs/brand).

Some catalogue entries are marked draft. See the [draft label definition](/guide/reading-a-page#draft-labels). When adding content, add both `id` and `en`, then run `npm run check:parity`.
