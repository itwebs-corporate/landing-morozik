import { expect, test } from '@playwright/test';

test('home page serves with the intended canonical URL', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  const canonicalUrl = new URL(canonical ?? '');
  expect(canonicalUrl.origin).toBe('https://morozik.itwebs.by');
  expect(canonicalUrl.pathname).toBe('/');
});
