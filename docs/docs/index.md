# Project Documentation

Technical documentation for the Lasuarindo Group website. This section is for people who work on the code: developers, designers and maintainers. For a general introduction, use the [Using the Docs](/guide/) or the [For Everyone](/for-everyone/) section. For notes on every page, use [Pages](/pages/).

## What is covered

| Area | Where to read |
|---|---|
| Start here | [Introduction](/docs/introduction), [Getting Started](/docs/getting-started) |
| How the project is organised | [Project Structure](/docs/project-structure), [Architecture](/docs/architecture) |
| Day-to-day work | [Configuration](/docs/configuration), [Styling](/docs/styling), [Brand](/docs/brand) |
| Publishing | [Deployment](/docs/deployment) |
| Other sections | [Using the Docs](/guide/), [For Everyone](/for-everyone/), [Pages](/pages/), [Changelog](/changelog/) |

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
- Need to find a file? See [Project Structure](/docs/project-structure).
- Need to understand routing, translations or metadata? See [Architecture](/docs/architecture).
- Need to change how things look? See [Styling](/docs/styling) and [Brand](/docs/brand).

A few catalogue entries and page copy are deliberately marked as draft. Those labels are the source of truth: do not turn an illustrative value into a company fact. When adding content, add both `id` and `en`, then run `npm run check:parity`.
