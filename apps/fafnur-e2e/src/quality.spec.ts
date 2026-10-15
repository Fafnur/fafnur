import { AxeBuilder } from '@axe-core/playwright';

import { expect, Page, test } from './fixtures';

const PAGES = ['/', '/about', '/adventure', '/novels', '/404'];

/** Every page ends with the footer, except the novel, which is a full-screen window. */
const waitForPage = (page: Page) => page.locator('fafnur-footer, fafnur-novel-window').first().waitFor();

test.describe('accessibility', () => {
  for (const url of PAGES) {
    test(`${url} has no serious or critical axe violations`, async ({ page }) => {
      await page.goto(url);
      await waitForPage(page);

      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        .analyze();
      const blocking = violations
        .filter((violation) => violation.impact === 'serious' || violation.impact === 'critical')
        .map(
          (violation) =>
            `${violation.id} (${violation.impact}): ${violation.nodes.map((node) => node.target.join(' ')).join(', ')}`,
        );

      expect(blocking).toEqual([]);
    });
  }
});

test('every internal link of the built site leads to an existing page', async ({ page, request }) => {
  const links = new Map<string, string>();
  for (const url of PAGES) {
    await page.goto(url);
    await waitForPage(page);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href') ?? ''));
    for (const href of hrefs) {
      links.set(href.split('#')[0].split('?')[0], url);
    }
  }

  const statuses = await Promise.all(
    [...links].map(async ([href, from]) => ({ href, from, status: (await request.get(href)).status() })),
  );
  const broken = statuses
    .filter(({ status }) => status !== 200)
    .map(({ href, from, status }) => `${href} (${status}) on ${from}`);

  expect(links.size).toBeGreaterThan(3);
  expect(broken).toEqual([]);
});

test('robots.txt and sitemap.xml are served', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain('Sitemap:');

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  for (const path of ['/about', '/adventure', '/novels']) {
    expect(await sitemap.text()).toContain(`https://fafn.ru${path}<`);
  }
});
