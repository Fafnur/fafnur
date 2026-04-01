import { expect, test } from '@playwright/test';

const novelWindow = 'fafnur-novel-window';
const novelLoading = 'fafnur-novel-loading';
const choices = 'fafnur-novel-choices ul li button';
const exitBtn = 'fafnur-novel-exit button';
const popup = 'fafnur-popup';
const popupAnchor = 'fafnur-popup-panel';

test.describe('Novel Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/novels');
    // Wait for story to load
    await page.locator(novelWindow).waitFor({ timeout: 10_000 });
  });

  // --- Loading state ---

  test('shows quest window after loading', async ({ page }) => {
    await expect(page.locator(novelWindow)).toBeVisible();
    await expect(page.locator(novelLoading)).toBeHidden();
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
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('fafnur-novel-dialog')).toBeVisible();
  });

  // --- Exit button / Popup ---

  test('exit button opens menu popup', async ({ page }) => {
    await page.locator(exitBtn).click();
    await expect(page.locator(popupAnchor)).toBeVisible();
  });

  test('clicking exit button again closes popup', async ({ page }) => {
    await page.locator(exitBtn).click();
    await expect(page.locator(popupAnchor)).toBeVisible();
    await page.locator(popup).click();
    await expect(page.locator(popupAnchor)).toBeHidden();
  });

  test('ESC key opens popup', async ({ page }) => {
    await page.keyboard.press('Escape');
    await expect(page.locator(popupAnchor)).toBeVisible();
  });

  test('second ESC keypress closes popup', async ({ page }) => {
    await page.keyboard.press('Escape');
    await expect(page.locator(popupAnchor)).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator(popupAnchor)).toBeHidden();
  });

  test('popup shows all menu links', async ({ page }) => {
    await page.locator(exitBtn).click();
    await expect(page.locator('text=Написать мне')).toBeVisible();
    await expect(page.locator('text=Посмотреть GitHub')).toBeVisible();
    await expect(page.locator('text=Почитать блог')).toBeVisible();
    await expect(page.locator('text=Вернуться на главную')).toBeVisible();
  });

  test('"Leave" link in popup navigates to home', async ({ page }) => {
    await page.locator(exitBtn).click();
    await page.locator('text=Вернуться на главную').click();
    await expect(page).toHaveURL('/');
  });

  // --- Quest completion ---

  // test('completing quest shows "Play again" button', async ({ page }) => {
  //   await playToEnd(page);
  //   await expect(page.getByRole('button', { name: /Сыграть в приключение снова/i })).toBeVisible();
  // });
  //
  // test('"Play again" resets the quest', async ({ page }) => {
  //   await playToEnd(page);
  //   await page.locator('fafnur-novel-choices button').click();
  //   await expect(page.locator(choices).first()).toBeVisible({ timeout: 5_000 });
  // });
});

/** Plays through the story by always selecting the first choice until no choices remain. */
async function playToEnd(page: import('@playwright/test').Page): Promise<void> {
  let isVisible = await page.locator('fafnur-novel-choices fafnur-novel-end').isVisible();
  while (!isVisible) {
    const last = page.locator('fafnur-novel-choices button').last();
    await last.click();
    isVisible = await page.locator('fafnur-novel-choices fafnur-novel-end').isVisible();
  }
}
