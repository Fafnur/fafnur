import { expect, test } from '@playwright/test';

test.describe('Adventure Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adventure');
  });

  test('loads and renders page content', async ({ page }) => {
    await expect(page.locator('fafnur-adventure-hero')).toBeVisible();
  });

  test('displays quest section', async ({ page }) => {
    await expect(page.locator('fafnur-adventure-quest')).toBeVisible();
  });

  test('has CTA button linking to quest', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Начать приключение' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/novels');
  });

  test('CTA button navigates to quest', async ({ page }) => {
    await page.getByRole('link', { name: 'Начать приключение' }).click();
    await expect(page).toHaveURL('/novels');
  });

  test('navigates to adventure via header link', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: 'Инфо' }).click();
    await expect(page).toHaveURL('/adventure');
  });
});
