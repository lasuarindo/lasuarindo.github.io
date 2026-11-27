# Tutorial: Your first verified change

In this tutorial you change one translated line, see it in both languages, and run the same checks CI runs. You need Node.js 22 and npm 10, and you must have run `npm ci` once.

## Change the copy

1. Open `src/i18n/locales/id/home.json` and `src/i18n/locales/en/home.json`.
2. Find the `badge` key near the top of each file.
3. Replace both values with the same short phrase in the matching language. Keep the meaning identical; do not translate it mechanically.

The two files mirror the same key. The current values are:

Indonesian, `src/i18n/locales/id/home.json`:

```json
{ "badge": "GRUP INVESTASI, PROPERTI, TEKNOLOGI & GAYA HIDUP" }
```

English, `src/i18n/locales/en/home.json`:

```json
{ "badge": "INVESTMENT, PROPERTY, TECHNOLOGY & LIFESTYLE GROUP" }
```

## See the result

```bash
npm run dev
```

Open `http://localhost:5173`. The new phrase appears in the home hero. Use the language switcher in the header to confirm the English value, then switch back to Indonesian.

## Run the checks

```bash
npm run check:parity
npm run lint
npm run build
npm run docs:build
```

The parity command must print a success line and exit 0. The other three commands must also exit 0. If parity fails, one locale has a key the other does not have.

## What you learned

You changed one value in a matching `id`/`en` pair, saw it in the running app in both languages, and verified the change with the project's four local checks. The next step is a [how-to recipe](/docs/how-to) for a specific task.
