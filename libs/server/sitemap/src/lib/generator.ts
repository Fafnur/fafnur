import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function hasSitemap(fileName: string): boolean {
  const { NX_WORKSPACE_ROOT, NX_TASK_TARGET_PROJECT } = process.env;

  if (!NX_WORKSPACE_ROOT || !NX_TASK_TARGET_PROJECT) {
    return false;
  }

  const sitemapPath = resolve(NX_WORKSPACE_ROOT, 'apps', NX_TASK_TARGET_PROJECT.replace(/-/g, '/'), 'public', fileName);

  return existsSync(sitemapPath);
}

export function generateSitemap(links: string[], appHost: string, fileName: string): void {
  const { NX_WORKSPACE_ROOT, NX_TASK_TARGET_PROJECT } = process.env;

  if (!NX_WORKSPACE_ROOT || !NX_TASK_TARGET_PROJECT) {
    return;
  }
  const sitemapPath = resolve(NX_WORKSPACE_ROOT, 'apps', NX_TASK_TARGET_PROJECT.replace(/-/g, '/'), `public`, fileName);

  const current = new Date().toISOString().slice(0, -5) + '+00:00';
  let data = '';
  for (const link of links) {
    const published = current;

    if (link === '/') {
      data =
        `<url><loc>${appHost}</loc><lastmod>${published}</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>` +
        data;
    } else {
      data += `<url><loc>${appHost}${link}</loc><lastmod>${published}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    }
  }

  writeFileSync(
    sitemapPath,
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${data}</urlset>`,
  );
}
