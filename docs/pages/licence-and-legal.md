# Licensing and Legal

These pages publish the group's basic legal information and the documents that explain how the website is used.

## What you can find

- A licensing page with the basic licence information the group is able to publish. The catalogue contains one confirmed entry: the Business Identification Number.
- A legal index that collects the site's policy documents.
- A privacy policy explaining how personal information is handled.
- Terms and conditions for using the site.

**Where it links.**

The legal index links to the privacy policy and the terms. Each document links back to the contact page.

**Unpublished fields.**

The licence catalogue records only a name and a category. Numbers, issuers and years are not published because they have not been confirmed, and the licensing page says so openly. The terms are general wording and need a legal review before anyone treats them as a binding agreement.

## For maintainers

- Routes: `/licence`, `/legal`, `/legal/privacy-policy` and `/legal/term-condition`.
- `src/data/licences.js` currently holds one confirmed entry, the Business Identification Number (NIB). Do not add placeholder numbers, issuers or years.
- Copy: `licence.json`, `legal.json` and the shared `common.json`, via `useLicenceStrings` / `useLegalStrings` / `useStrings`.
- `resolvePageMetaKey` checks nested legal routes before the parent `/legal` key.
