// One-off migration: src/data/{speaker,scrap}.json -> src/content/chronology/*.md
//
// Run with `node scripts/migrate-chronology.mjs`. Idempotent: rewrites the
// output directory from scratch every time, so it can be re-run after fixing
// an extraction rule.
//
// bio.json is deliberately NOT migrated — its five entries carry only
// {name, href}, with no date and no prose, so there is nothing to convert
// without inventing facts.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src/content/chronology');

const readJson = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));

/** Quote a scalar for YAML: single-quote style, internal quotes doubled. */
const yaml = (s) => `'${String(s).replace(/'/g, "''")}'`;

/** Filename-safe slug that keeps Hangul; punctuation and emoji collapse to hyphens. */
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[‘’“”]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50)
    .replace(/-+$/g, '');
}

const pad = (n) => String(n).padStart(2, '0');

/**
 * Pull a date out of a human-readable byline string.
 * Returns YYYY-MM-DD, or YYYY-MM when the source only states a month.
 * Order matters: full-date patterns must be tried before the month-only one.
 */
function dateFromFooter(footer) {
  let m;
  if ((m = footer.match(/(\d{4})-(\d{2})-(\d{2})/)))
    return `${m[1]}-${m[2]}-${m[3]}`;
  if ((m = footer.match(/(\d{4})\/(\d{2})\/(\d{2})/)))
    return `${m[1]}-${m[2]}-${m[3]}`;
  if ((m = footer.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/)))
    return `${m[1]}-${pad(m[2])}-${pad(m[3])}`;
  if ((m = footer.match(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})/)))
    return `${m[1]}-${pad(m[2])}-${pad(m[3])}`;
  if ((m = footer.match(/(\d{4})\.\s*(\d{1,2})\.?\s*$/)))
    return `${m[1]}-${pad(m[2])}`; // month precision — do not invent a day
  throw new Error(`no date found in footer: ${footer}`);
}

/** speaker.date is one of: YYYY-MM-DD | YYYY-MM | YYYY-MM-DD ~ YYYY-MM-DD */
function splitSpeakerDate(raw) {
  const [start, end] = raw.split('~').map((s) => s.trim());
  return { date: start, dateEnd: end };
}

function frontmatter(fields) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}: ${yaml(v)}`);
  return `---\n${lines.join('\n')}\n---\n`;
}

function write(entry, body) {
  const name = `${entry.date}-${slugify(entry.title)}.md`;
  const text = frontmatter(entry) + (body ? `\n${body.trim()}\n` : '');
  writeFileSync(join(outDir, name), text, 'utf8');
  return name;
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const report = [];

// --- talks -----------------------------------------------------------------
// `color` is dropped: a leftover from the shields.io badge rendering that no
// current code reads.
for (const t of readJson('src/data/speaker.json')) {
  const { date, dateEnd } = splitSpeakerDate(t.date);
  const file = write(
    {
      kind: 'talk',
      title: t.value,
      date,
      dateEnd,
      org: t.name,
      orgUrl: t.event,
      link: t.href,
    },
    t.description,
  );
  report.push({ kind: 'talk', source: t.date, date, dateEnd: dateEnd ?? '', file });
}

// --- press -----------------------------------------------------------------
// `footer` is kept verbatim in sourceNote: it carries the byline (reporter,
// editor, photographer) alongside the date, and the previous site rendered it
// as-is. Extracting only the date would discard the rest.
for (const s of readJson('src/data/scrap.json')) {
  const date = dateFromFooter(s.footer);
  const file = write(
    {
      kind: 'press',
      title: s.title,
      date,
      link: s.url,
      image: s.image,
      sourceNote: s.footer,
    },
    s.description,
  );
  report.push({ kind: 'press', source: s.footer, date, dateEnd: '', file });
}

console.table(report);
console.log(`\n${report.length} entries written to src/content/chronology/`);
