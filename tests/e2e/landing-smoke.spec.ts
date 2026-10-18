import { expect, test } from '@playwright/test';

test('home page serves with the intended canonical URL', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  const canonicalUrl = new URL(canonical ?? '');
  expect(canonicalUrl.origin).toBe('https://morozik.itwebs.by');
  expect(canonicalUrl.pathname).toBe('/');

  await expect(page.locator('main > section')).toHaveCount(10);
  await expect(page.locator('#projects .project-card')).toHaveCount(3);
  await expect(page.locator('#faq details')).toHaveCount(8);
  await expect(page.locator('.hero-signature img')).toBeVisible();
  await expect.poll(() => page.locator('.hero-signature img').evaluate((image) =>
    (image as HTMLImageElement).naturalWidth,
  )).toBeGreaterThan(0);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
