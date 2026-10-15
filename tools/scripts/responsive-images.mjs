// Generates downscaled copies of images for srcset: `name.webp` → `name-<width>w.webp`.
// Existing copies are skipped, so it is safe to re-run after adding new images. Requires ImageMagick (`magick`).
// Usage: node tools/scripts/responsive-images.mjs
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'apps/fafnur/public/images';
const VARIANT = /-\d+w\.webp$/;

/** Source files and the widths to generate; the original stays the largest candidate. */
const TARGETS = [
  { dir: ROOT, files: ['fafnur.webp'], widths: [480, 720] },
  { dir: join(ROOT, 'novel'), widths: [480, 768, 1280] },
];

for (const { dir, files, widths } of TARGETS) {
  const sources = files ?? readdirSync(dir).filter((file) => file.endsWith('.webp') && !VARIANT.test(file));
  for (const file of sources) {
    for (const width of widths) {
      const output = join(dir, file.replace(/\.webp$/, `-${width}w.webp`));
      if (existsSync(output)) {
        continue;
      }
      execFileSync('magick', [join(dir, file), '-resize', `${width}x>`, '-quality', '80', output]);
      console.log(output);
    }
  }
}
