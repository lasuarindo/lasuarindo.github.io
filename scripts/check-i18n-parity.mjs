/**
 * Verify that every id locale key has an en counterpart (and vice versa),
 * and that no document-only marker leaked into published copy.
 *
 * Usage: node scripts/check-i18n-parity.mjs
 * Exits 1 on any missing key or forbidden marker. No dependencies required.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../src/i18n/locales/', import.meta.url));
const idDir = join(root, 'id');
const enDir = join(root, 'en');
const FORBIDDEN = ['[DRAFT:', '[NEED:', 'undefined', 'NaN'];

function flatten(value, prefix = '', out = {}) {
  if (Array.isArray(value)) {
    value.forEach((item, idx) => flatten(item, prefix ? `${prefix}[${idx}]` : `[${idx}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
  } else {
    out[prefix] = value;
  }
  return out;
}

function bundle(dir, file) {
  return flatten(JSON.parse(readFileSync(join(dir, file), 'utf8')));
}

const files = readdirSync(idDir)
  .filter((file) => file.endsWith('.json') && statSync(join(idDir, file)).isFile())
  .sort();

let failures = 0;
for (const file of files) {
  const enPath = join(enDir, file);
  if (!statSync(enPath, { throwIfNoEntry: false })) {
    console.error(`MISSING bundle: en/${file}`);
    failures += 1;
    continue;
  }
  const id = bundle(idDir, file);
  const en = bundle(enDir, file);
  const idKeys = Object.keys(id);
  const enKeys = Object.keys(en);
  const missingEn = idKeys.filter((key) => !enKeys.includes(key));
  const missingId = enKeys.filter((key) => !idKeys.includes(key));
  for (const key of missingEn) {
    console.error(`MISSING en key: ${file} :: ${key}`);
    failures += 1;
  }
  for (const key of missingId) {
    console.error(`MISSING id key: ${file} :: ${key}`);
    failures += 1;
  }
  for (const [lang, entries] of [['id', id], ['en', en]]) {
    for (const [key, value] of Object.entries(entries)) {
      if (typeof value !== 'string') continue;
      for (const marker of FORBIDDEN) {
        if (value.includes(marker)) {
          console.error(`FORBIDDEN marker ${marker} in ${lang}/${file} :: ${key}`);
          failures += 1;
        }
      }
    }
  }
}

if (failures > 0) {
  console.error(`i18n parity FAILED (${failures} problem(s)).`);
  process.exit(1);
}
console.log(`i18n parity OK: ${files.length} bundles, id/en keys match, no markers.`);
