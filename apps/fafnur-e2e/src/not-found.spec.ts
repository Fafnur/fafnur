import { expect, test } from '@playwright/test';

test.describe('Not Found Page', () => {
  test('renders 404 on direct /404 route', async ({ page }) => {
    await page.goto('/404');
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Страница не найдена' })).toBeVisible();
  });

  test('renders 404 for unknown routes', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Страница не найдена' })).toBeVisible();
  });

  test('has link to home', async ({ page }) => {
    await page.goto('/404');
    await expect(page.getByRole('link', { name: 'Главная' })).toBeVisible();
  });

  test('has link to about', async ({ page }) => {
    await page.goto('/404');
    await expect(page.getByRole('link', { name: 'Обо мне' })).toBeVisible();
  });

  test('has link to adventure', async ({ page }) => {
    await page.goto('/404');
    await expect(page.getByRole('link', { name: 'Приключение' })).toBeVisible();
  });

  test('has link to quest', async ({ page }) => {
    await page.goto('/404');
    await expect(page.getByRole('link', { name: 'Начать квест' })).toBeVisible();
  });

  test('home link navigates to /', async ({ page }) => {
    await page.goto('/404');
    await page.getByRole('link', { name: 'Главная' }).click();
    await expect(page).toHaveURL('/');
  });
});
