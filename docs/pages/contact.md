# Contact

This page shows how to reach Lasuarindo Group. The form checks entries in your browser but does not send messages. Use contact@lasuarindo.co.id to reach the group.

## What you can find

- The office address, email address and opening hours.
- A short form with fields for name, email, company, subject and message.
- A map showing where the office is.
- Three cards for partnership, investor relations and collaboration.

**Where it links.**

The three cards open the engagement pages. Those pages in turn link back to this form with the correct subject selected.

The `intent` query parameter accepts five keys from `contact.subjects`: `partnership`, `investor`, `collaboration`, `technology` and `general`. For example, `/contact?intent=partnership` opens the form with "Strategic Partnership" preselected.

## For maintainers

- Route: `/contact` → `src/pages/Contact/Contact.jsx`, with `ContactHero`, `ContactForm`, `ContactMap` and `ContactPartnership`.
- Form state is local; validation produces `alertIncomplete`, `alertEmailInvalid` or `alertSuccess`. There is no network request.
- `intent` from the query string preselects a subject when it matches a key in `contact.subjects`.
- Address, email, hours and social links come from `src/data/company.js`; copy comes from `contact.json` via `useContactStrings`.
