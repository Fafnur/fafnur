// Regenerates OG images (`og:image`) of the pages from the built static site: screenshots in the dark theme,
// 2048×1152, encoded to WebP by Chromium itself — no extra dependencies.
// Run after changing a page's content: `yarn og` (builds the site first).
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';

import { chromium } from 'playwright';

const DIST = 'dist/apps/fafnur/browser';
const OUTPUT = 'apps/fafnur/public/images';
const VIEWPORT = { width: 1280, height: 720 };
const SCALE = 1.6; // 1280×720 → 2048×1152
const QUALITY = 0.8;

/** `scrollTo` — selector of the element to put at the top of the image, 40px below the edge. */
const PAGES = [
  { path: '/', image: 'site.webp' },
  { path: '/adventure', image: 'adventure.webp' },
  { path: '/about', image: 'about.webp', scrollTo: 'fafnur-about-who' },
];

const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

if (!existsSync(DIST)) {
  console.error(`${DIST} not found — build the site first: yarn build`);
  process.exit(1);
}

const server = createServer((request, response) => {
  const url = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
  let file = join(DIST, url);
  if (!existsSync(file) || statSync(file).isDirectory()) {
    file = join(DIST, url, 'index.html');
  }
  if (!existsSync(file)) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
  response.end(readFileSync(file));
});

await new Promise((resolve) => server.listen(0, resolve));
const origin = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
try {
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: SCALE, colorScheme: 'dark' });
  const page = await context.newPage();

  for (const { path, image, scrollTo } of PAGES) {
    await page.goto(origin + path, { waitUntil: 'networkidle' });
    if (scrollTo) {
      await page.locator(scrollTo).evaluate((element) => window.scrollTo(0, element.offsetTop - 40));
    }
    await page.waitForTimeout(500);

    const png = (await page.screenshot()).toString('base64');
    const webp = await page.evaluate(
      async ({ png, quality }) => {
        const bitmap = await createImageBitmap(await (await fetch(`data:image/png;base64,${png}`)).blob());
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        canvas.getContext('2d').drawImage(bitmap, 0, 0);
        const blob = await canvas.convertToBlob({ type: 'image/webp', quality });
        const dataUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
        return dataUrl.slice(dataUrl.indexOf(',') + 1);
      },
      { png, quality: QUALITY },
    );

    const output = join(OUTPUT, image);
    writeFileSync(output, Buffer.from(webp, 'base64'));
    console.log(output);
  }
} finally {
  await browser.close();
  server.close();
}
