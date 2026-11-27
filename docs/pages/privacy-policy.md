# Privacy Policy

This page explains how personal information is handled when you use the website.

## What you can find

- An introduction to the policy.
- Eight short articles covering what information is collected, how it is used, how it is protected, when it may be shared, cookies, your rights and changes to the policy.
- A table of contents that stays visible while you read on a large screen.

**Where it links.**

The legal index links to the privacy policy. At the end of the page you can contact the group.

**Reading the policy.**

The eight articles cover collection, use, protection, sharing, cookies, user rights and policy changes, with cookies in their own article. On smaller screens the table of contents appears above the articles instead of alongside them.

## The eight articles

The `toc` array in `src/i18n/locales/en/privacy.json` sets the numbering and the order; its `id` values are the anchors used by the links and by `useActiveSection`. The `sections` object holds the text under slightly different keys:

| # | Article title | Anchor (`toc.id`) | Text key |
|---|---|---|---|
| 1 | Introduction | `introduction` | `introduction` |
| 2 | Information Collected | `information-collected` | `information` |
| 3 | Information Usage | `information-usage` | `usage` |
| 4 | Data Protection | `data-protection` | `protection` |
| 5 | Sharing Data with Third Parties | `data-sharing` | `sharing` |
| 6 | Cookies & Tracking Technologies | `cookies` | `cookies` |
| 7 | User Rights | `user-rights` | `rights` |
| 8 | Policy Changes | `policy-changes` | `changes` |

```json
{
  "toc": [
    { "id": "introduction", "number": "1", "title": "Introduction" },
    { "id": "information-collected", "number": "2", "title": "Information Collected" },
    { "id": "information-usage", "number": "3", "title": "Information Usage" },
    { "id": "data-protection", "number": "4", "title": "Data Protection" },
    { "id": "data-sharing", "number": "5", "title": "Sharing Data with Third Parties" },
    { "id": "cookies", "number": "6", "title": "Cookies & Tracking Technologies" },
    { "id": "user-rights", "number": "7", "title": "User Rights" },
    { "id": "policy-changes", "number": "8", "title": "Policy Changes" }
  ]
}
```

The bundle also records `lastUpdatedDate`, and the `sections.cookies.rows` array lists the three cookie types with their purpose and duration. Only the keys above are rendered; the policy text itself lives in the locale bundles and is not duplicated here.

## For maintainers

- Route: `/legal/privacy-policy` → `src/pages/PrivacyPolicy/PrivacyPolicy.jsx`, with `PrivacyHero` and `PrivacyContent`.
- Eight anchored articles; the TOC comes from `t.privacy.toc` and must be updated in both locales when an article is added.
- The sticky TOC starts at the `lg` breakpoint (`lg:top-[100px]`). It is the reason `html`, `body` and `.page` use `overflow-x: clip` instead of `hidden`.
- Metadata uses the `privacy` key, resolved before the parent `/legal` key.
