import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const HOSTNAME = 'https://fafn.ru';
const ROUTES = ['/', '/about', '/adventure', '/novels'];
const OUTPUT = resolve('apps/fafnur/public/sitemap.xml');

function generateSitemap(): void {
  const current = new Date().toISOString().slice(0, -5) + '+00:00';
  let data = '';

  for (const route of ROUTES) {
    const loc = route === '/' ? HOSTNAME : `${HOSTNAME}${route}`;
    const priority = route === '/' ? '1' : '0.8';
    data += `<url><loc>${loc}</loc><lastmod>${current}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
  }

  writeFileSync(
    OUTPUT,
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${data}</urlset>`,
  );
}

generateSitemap();
