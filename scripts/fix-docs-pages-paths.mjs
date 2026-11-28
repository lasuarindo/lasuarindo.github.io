/**
 * Rspress v2.1.4 emits siteData.base="/" even when config.base is "/docs/".
 * Generated absolute URLs for the Docs section therefore point at
 * /docs/<file>.md instead of /docs/docs/<file>.md. This script fixes those
 * generated URLs in the built docs output and adds alias .md files so the
 * client-side "Copy Markdown" button fetches the right document.
 *
 * Run after `npm run docs:build:pages`, before merging doc_build into dist/docs.
 */
import { copyFileSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'doc_build';
const origin = 'https://lasuarindo.github.io/docs/';
const docsFiles = [
  'index',
  'quick-start',
  'how-to',
  'architecture',
  'configuration',
  'design-system',
  'deployment',
  'troubleshooting',
  'guide-overview',
  'guide-setup',
  'guide-contributing',
];

const pattern = new RegExp(
  `${origin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(${docsFiles.join('|')})\\.md`,
  'g',
);

function walk(dir) {
  return readdirSync(dir).flatMap(entry => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

let rewritten = 0;
for (const file of walk(root)) {
  if (!/\.(html|txt)$/.test(file)) continue;
  // The home page's markdown is genuinely /docs/index.md; only the Docs
  // section pages below /docs/ need the extra path segment.
  if (file === join(root, 'index.html')) continue;
  const text = readFileSync(file, 'utf8');
  const fixed = text.replace(pattern, `${origin}docs/$1.md`);
  if (fixed !== text) {
    writeFileSync(file, fixed);
    rewritten += 1;
  }
}

// The copy button derives /docs/<file>.md from the source route. Mirror the
// Docs section markdown there; the home page has no copy button, so its
// index.md can be replaced by the Docs overview markdown.
let copied = 0;
for (const name of docsFiles) {
  // index.md stays the home markdown at /docs/index.md.
  if (name === 'index') continue;
  copyFileSync(join(root, 'docs', `${name}.md`), join(root, `${name}.md`));
  copied += 1;
}

console.log(`docs paths: rewrote ${rewritten} files, mirrored ${copied} markdown files`);
