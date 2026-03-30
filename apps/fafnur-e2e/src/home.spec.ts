import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads and displays heading', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('приключение');
  });

  test('displays start button linking to quest', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Начать приключение' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/novels');
  });

  test('navigates to quest on start button click', async ({ page }) => {
    await page.getByRole('link', { name: 'Начать приключение' }).click();
    await expect(page).toHaveURL('/novels');
  });

  test('renders header with 4 nav links', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('nav a')).toHaveCount(4);
  });

  test('renders footer', async ({ page }) => {
    await expect(page.locator('fafnur-footer')).toBeVisible();
  });
});
