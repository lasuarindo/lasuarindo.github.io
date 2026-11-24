# Contact

Route: `/contact` — `src/pages/Contact/Contact.jsx`.

Four sections:

1. **Hero** (`ContactHero`) — badge, two-line headline, lead paragraph.
2. **Details and form** — address, email, and office hours on the left; social links; the contact form on the right (name, email, company, subject select, message).
3. **Map** (`ContactMap`) — embedded Google Maps iframe (`loading="lazy"`, height switches between mobile and desktop).
4. **Partnership CTA** (`ContactPartnership`) — three cards (strategic partnership, investor relations, collaboration).

## Form state

Form state is local component state. Submitting runs client-side validation:

- missing required fields → error status with `alertIncomplete`
- invalid email → error status with `alertEmailInvalid`
- otherwise → success status with `alertSuccess`

There is no network request and no backend endpoint.

## Notes

- Copy comes from `contact.json` (`{ contact: ... }` bundle, id + en) via `useStrings`, including `subjects` and the three `partnerCardsDesc` entries.