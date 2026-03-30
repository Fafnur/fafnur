import { expect, test } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('loads and displays "Who am I?" section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Кто я?' })).toBeVisible();
  });

  test('displays developer photo', async ({ page }) => {
    const photo = page.locator('img[src="/images/fafnur.webp"]');
    await expect(photo).toBeVisible();
  });

  test('displays stack section', async ({ page }) => {
    await expect(page.locator('fafnur-about-stack')).toBeVisible();
  });

  test('displays experience section', async ({ page }) => {
    await expect(page.locator('fafnur-about-experience')).toBeVisible();
  });

  test('navigates to about via header link', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: 'Обо мне' }).click();
    await expect(page).toHaveURL('/about');
  });
});
