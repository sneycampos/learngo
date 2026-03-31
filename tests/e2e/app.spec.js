const { test, expect } = require('@playwright/test');

test.describe('Go Learn', () => {
  async function resetReadProgress(page) {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.removeItem('golearn.readTopics.v1');
    });
    await page.reload();
  }

  test('loads home and topic content', async ({ page }) => {
    await resetReadProgress(page);

    await expect(page.getByRole('heading', { name: 'Learn Go Programming' })).toBeVisible();

    await page.getByRole('button', { name: 'Start Learning' }).click();
    await expect(page.locator('#topic-view')).toBeVisible();
    await expect(page.locator('#topic-content')).toContainText('Basics');
    await expect(page.locator('#topic-content')).not.toContainText('Failed to load topic content');
  });

  test('marks topic as read and persists progress', async ({ page }) => {
    await resetReadProgress(page);

    await page.getByRole('button', { name: 'Start Learning' }).click();
    await page.getByRole('button', { name: 'Back to topics' }).click();

    const helloCard = page.locator('button').filter({ hasText: 'Hello World' }).first();
    await expect(helloCard).toContainText('Read');

    await page.reload();
    await expect(page.locator('button').filter({ hasText: 'Hello World' }).first()).toContainText('Read');
  });

  test('shows read indicators in sidebar and mobile menu', async ({ page }) => {
    await resetReadProgress(page);

    await page.getByRole('button', { name: 'Start Learning' }).click();
    await page.getByRole('button', { name: 'Back to topics' }).click();

    await page.getByRole('button', { name: /Browse/ }).first().click();
    await expect(page.locator('#sidebar-topic-count')).toContainText('1/52 topics read');

    await page.locator('#sidebar-search').fill('hello');
    await expect(page.locator('#sidebar-topics')).toContainText('Read');

    await page.evaluate(() => window.closeSidebar());
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => window.toggleMobileMenu());

    const mobileHello = page.locator('#mobile-topics button').filter({ hasText: 'Hello World' }).first();
    await expect(mobileHello).toBeVisible();
    await expect(mobileHello).toHaveClass(/text-green-700/);
  });
});
