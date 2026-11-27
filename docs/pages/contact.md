# Contact

This page shows how to reach Lasuarindo Group and sends visitors to the right conversation.

## What you can find

- The office address, email address and opening hours.
- A short form with fields for name, email, company, subject and message.
- A map showing where the office is.
- Three cards for partnership, investor relations and collaboration.

## Where it links

The three cards open the engagement pages. Those pages in turn link back to this form with the correct subject selected.

## Good to know

At the moment the form only checks the entries on your screen. It tells you when something is missing or when an email address is not valid, but it does not send a message to a server yet.

## For maintainers

- Route: `/contact` → `src/pages/Contact/Contact.jsx`, with `ContactHero`, `ContactForm`, `ContactMap` and `ContactPartnership`.
- Form state is local; validation produces `alertIncomplete`, `alertEmailInvalid` or `alertSuccess`. There is no network request.
- `intent` from the query string preselects a subject when it matches a key in `contact.subjects`.
- Address, email, hours and social links come from `src/data/company.js`; copy comes from `contact.json` via `useContactStrings`.
