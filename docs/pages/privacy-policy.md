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

## For maintainers

- Route: `/legal/privacy-policy` → `src/pages/PrivacyPolicy/PrivacyPolicy.jsx`, with `PrivacyHero` and `PrivacyContent`.
- Eight anchored articles; the TOC comes from `t.privacy.toc` and must be updated in both locales when an article is added.
- The sticky TOC starts at the `lg` breakpoint (`lg:top-[100px]`). It is the reason `html`, `body` and `.page` use `overflow-x: clip` instead of `hidden`.
- Metadata uses the `privacy` key, resolved before the parent `/legal` key.
