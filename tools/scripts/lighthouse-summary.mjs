// Prints a compact summary of the Lighthouse CI reports in dist/.lighthouse:
// median category scores per URL and the failing audits with their savings.
// Usage: node tools/scripts/lighthouse-summary.mjs [reportsDir]
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2] ?? 'dist/.lighthouse';
const manifest = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8'));
const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];
const percent = (score) => (score === null ? '—' : String(Math.round(score * 100)));

for (const entry of manifest.filter((run) => run.isRepresentativeRun)) {
  const lhr = JSON.parse(readFileSync(entry.jsonPath, 'utf8'));
  const path = new URL(entry.url).pathname;
  const scores = CATEGORIES.map((id) => `${id} ${percent(lhr.categories[id].score)}`).join(' · ');
  console.log(`\n${path}  ${scores}`);

  const metrics = [
    'first-contentful-paint',
    'largest-contentful-paint',
    'total-blocking-time',
    'cumulative-layout-shift',
  ]
    .map((id) => `${id.replace(/-/g, ' ')} ${lhr.audits[id].displayValue}`)
    .join(' · ');
  console.log(`  ${metrics}`);

  const failing = Object.values(lhr.audits)
    .filter((audit) => audit.score !== null && audit.score < 0.9 && audit.scoreDisplayMode !== 'informative')
    .sort((a, b) => a.score - b.score);
  for (const audit of failing) {
    const savings = audit.details?.overallSavingsMs ? ` (−${Math.round(audit.details.overallSavingsMs)} ms)` : '';
    const value = audit.displayValue ? ` — ${audit.displayValue}` : '';
    console.log(`  ✘ ${audit.id}: ${audit.title}${value}${savings}`);
  }
}
