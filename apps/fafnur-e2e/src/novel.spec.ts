import { expect, test } from '@playwright/test';

const novelWindow = 'fafnur-novel-window';
const novelLoading = 'fafnur-novel-loading';
const choices = 'fafnur-novel-choices ul li button';
const exitBtn = '[aria-label="Меню"]';
const popupAnchor = 'text=Написать мне';

test.describe('Novel Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/novels');
    // Wait for story to load
    await page.locator(novelWindow).waitFor({ timeout: 10_000 });
  });

  // --- Loading state ---

  test('shows quest window after loading', async ({ page }) => {
    await expect(page.locator(novelWindow)).toBeVisible();
    await expect(page.locator(novelLoading)).not.toBeVisible();
  });

  // --- Story content ---

  test('displays story dialog', async ({ page }) => {
    await expect(page.locator('fafnur-novel-dialog')).toBeVisible();
  });

  test('displays choices', async ({ page }) => {
    await expect(page.locator(choices).first()).toBeVisible();
  });

  // --- Interaction ---

  test('clicking a choice advances the story', async ({ page }) => {
    const first = page.locator(choices).first();
    await first.waitFor();
    await first.click();
    // Story continues — dialog still visible and content changed or choices remain
    await expect(page.locator('fafnur-novel-dialog')).toBeVisible();
  });

  test('keyboard shortcut "1" selects first choice', async ({ page }) => {
    await page.locator(choices).first().waitFor();
    await page.keyboard.press('1');
    await expect(page.locator('fafnur-novel-dialog')).toBeVisible();
  });

  test('ArrowDown cycles through choices', async ({ page }) => {
    await page.locator(choices).first().waitFor();
    const count = await page.locator(choices).count();
    if (count > 1) {
      await page.keyboard.press('ArrowDown');
      // Second choice should be focused
      await expect(page.locator(choices).nth(1)).toBeFocused();
    }
  });

  // --- Exit button / Popup ---

  test('exit button opens menu popup', async ({ page }) => {
    await page.locator(exitBtn).click();
    await expect(page.locator(popupAnchor)).toBeVisible();
  });

  test('clicking exit button again closes popup', async ({ page }) => {
    await page.locator(exitBtn).click();
    await expect(page.locator(popupAnchor)).toBeVisible();
    await page.locator(exitBtn).click();
    await expect(page.locator(popupAnchor)).not.toBeVisible();
  });

  test('ESC key opens popup', async ({ page }) => {
    await page.keyboard.press('Escape');
    await expect(page.locator(popupAnchor)).toBeVisible();
  });

  test('second ESC keypress closes popup', async ({ page }) => {
    await page.keyboard.press('Escape');
    await expect(page.locator(popupAnchor)).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator(popupAnchor)).not.toBeVisible();
  });

  test('popup shows all menu links', async ({ page }) => {
    await page.locator(exitBtn).click();
    await expect(page.locator('text=Написать мне')).toBeVisible();
    await expect(page.locator('text=Посмотреть GitHub')).toBeVisible();
    await expect(page.locator('text=Почитать блог')).toBeVisible();
    await expect(page.locator('text=Уйти')).toBeVisible();
  });

  test('"Leave" link in popup navigates to home', async ({ page }) => {
    await page.locator(exitBtn).click();
    await page.locator('text=Уйти').click();
    await expect(page).toHaveURL('/');
  });

  // --- Quest completion ---

  test('completing quest shows "Play again" button', async ({ page }) => {
    await playToEnd(page);
    await expect(page.getByRole('button', { name: /Сыграть в приключение снова/i })).toBeVisible();
  });

  test('"Play again" resets the quest', async ({ page }) => {
    await playToEnd(page);
    await page.getByRole('button', { name: /Сыграть в приключение снова/i }).click();
    await expect(page.locator(choices).first()).toBeVisible({ timeout: 5_000 });
  });
});

/** Plays through the story by always selecting the first choice until no choices remain. */
async function playToEnd(page: import('@playwright/test').Page): Promise<void> {
  for (let i = 0; i < 100; i++) {
    const playAgain = page.getByRole('button', { name: /Сыграть в приключение снова/i });
    if (await playAgain.isVisible()) return;

    const first = page.locator('fafnur-novel-choices ul li button').first();
    await first.waitFor({ timeout: 5_000 });
    await first.click();
  }
}
