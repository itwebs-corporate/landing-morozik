import { expect, test } from '@playwright/test';

test('CTA, form validation, message handoff and closing work', async ({ page }) => {
  await page.goto('/');
  const opener = page.locator('.hero [data-lead]');
  await opener.click();
  const lead = page.locator('#lead-dialog');
  await expect(lead).toBeVisible();
  await expect(lead.locator('[name="name"]')).toBeFocused();
  await expect(lead.locator('.modal-intro')).toContainText('Автоматической отправки пока нет');
  await expect(lead.locator('.form-explanation')).toContainText('Автоматическая отправка появится позже');

  await lead.locator('.form-submit').click();
  await expect(lead.locator('#modal-name-error')).not.toBeEmpty();
  await expect(lead.locator('#modal-contact-error')).not.toBeEmpty();
  await expect(page.locator('#message-dialog')).not.toBeVisible();

  await lead.locator('[name="name"]').fill('Анна');
  await lead.locator('[name="contact"]').fill('bad contact');
  await lead.locator('.form-submit').click();
  await expect(lead.locator('#modal-contact-error')).toContainText('Email или Telegram');

  await lead.locator('[name="contact"]').fill('@username');
  await lead.locator('[name="idea"]').fill('Нужен CRM-прототип');
  await expect(lead.locator('[data-counter]')).toContainText('18 / 2000');
  await lead.locator('.form-submit').click();
  const handoff = page.locator('#message-dialog');
  await expect(handoff).toBeVisible();
  await expect(lead).not.toBeVisible();
  await expect(handoff.locator('#prepared-message')).toHaveValue(/Идея: Нужен CRM-прототип/);
  await expect(handoff.locator('#email-handoff')).toHaveAttribute('href', /^mailto:ceo@itwebs\.by/);
  await expect(handoff.locator('.form-explanation')).toContainText('Заявка ещё не отправлена');
  await handoff.locator('[data-copy-message]').click();
  await expect(handoff.locator('[data-copy-status]')).not.toBeEmpty();
  await page.keyboard.press('Escape');
  await expect(handoff).not.toBeVisible();
  await expect(opener).toBeFocused();
});

test('project, information dialogs and FAQ controls work', async ({ page }) => {
  await page.goto('/');
  for (const key of ['integrations', 'paint', 'english']) {
    await page.locator(`[data-project="${key}"]`).first().click();
    await expect(page.locator('#project-dialog')).toBeVisible();
    await expect(page.locator('#project-modal-image')).toHaveAttribute('src', new RegExp(`project-${key}\\.webp$`));
    await page.locator('#project-dialog [data-close]').click();
  }
  await page.locator('[data-project="paint"]').first().click();
  const project = page.locator('#project-dialog');
  await expect(project).toBeVisible();
  await expect(project.locator('#project-modal-title')).toContainText('Платформа для продажи красок');
  await expect(project.locator('#project-modal-image')).toHaveAttribute('src', '/images/project-paint.webp');
  await project.locator('#project-discuss').click();
  await expect(page.locator('#lead-dialog')).toBeVisible();
  await expect(page.locator('#modal-idea')).toHaveValue(/Платформа для продажи красок/);
  await page.locator('#lead-dialog [data-close]').click();

  await page.locator('[data-open-sources]').click();
  await expect(page.locator('#sources-dialog')).toBeVisible();
  await page.locator('#sources-dialog [data-close]').click();
  await page.locator('[data-open-data]').click();
  await expect(page.locator('#data-dialog')).toBeVisible();
  await page.locator('#data-dialog [data-close]').click();

  const faq = page.locator('#faq details').nth(1);
  await faq.locator('summary').click();
  await expect(faq).toHaveAttribute('open', '');
});

test('mobile menu opens and navigation closes it', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile navigation is shown only at narrow widths.');
  await page.goto('/');
  await page.locator('[data-open-menu]').click();
  const menu = page.locator('#menu-dialog');
  await expect(menu).toBeVisible();
  await menu.locator('[href="#faq"]').click();
  await expect(menu).not.toBeVisible();
  await expect(page).toHaveURL(/#faq$/);
});

test('each visible lead button and both form locations respond', async ({ page }) => {
  await page.goto('/');
  const triggers = page.locator('[data-lead]:visible');
  const count = await triggers.count();
  expect(count).toBeGreaterThan(1);
  for (let index = 0; index < count; index += 1) {
    await triggers.nth(index).click();
    await expect(page.locator('#lead-dialog')).toBeVisible();
    await page.locator('#lead-dialog [data-close]').click();
  }

  const inlineForm = page.locator('#contact [data-lead-form]');
  await inlineForm.locator('.form-submit').click();
  await expect(inlineForm.locator('#contact-name-error')).not.toBeEmpty();
  await inlineForm.locator('[name="name"]').fill('Иван');
  await inlineForm.locator('[name="contact"]').fill('ivan@example.com');
  await inlineForm.locator('.form-submit').click();
  await expect(page.locator('#message-dialog')).toBeVisible();
  await expect(page.locator('#prepared-message')).toHaveValue(/Контакт: ivan@example.com/);
});

test('reduced motion keeps content visible and removes entrance animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const state = await page.locator('.hero h1 span').first().evaluate((element) => ({
    animation: getComputedStyle(element).animationName,
    opacity: getComputedStyle(element).opacity,
  }));
  expect(state.animation).toBe('none');
  expect(state.opacity).toBe('1');
  await expect(page.locator('.hero [data-lead]')).toBeVisible();
});

test('pricing highlight grows symmetrically without moving its content', async ({ page }) => {
  await page.goto('/');
  const row = page.locator('.price-row').last();
  await row.scrollIntoViewIfNeeded();
  const before = await row.evaluate((element) => ({
    width: element.getBoundingClientRect().width,
    titleX: element.querySelector('h3')!.getBoundingClientRect().x,
    priceX: element.querySelector('strong')!.getBoundingClientRect().x,
  }));
  await row.hover();
  await expect.poll(() => row.evaluate((element) => getComputedStyle(element, '::before').opacity)).toBe('1');
  const after = await row.evaluate((element) => ({
    frameWidth: parseFloat(getComputedStyle(element, '::before').width),
    frameOpacity: getComputedStyle(element, '::before').opacity,
    titleX: element.querySelector('h3')!.getBoundingClientRect().x,
    priceX: element.querySelector('strong')!.getBoundingClientRect().x,
  }));
  expect(after.frameWidth / before.width).toBeCloseTo(1.1, 2);
  expect(after.frameOpacity).toBe('1');
  expect(after.titleX).toBeCloseTo(before.titleX, 1);
  expect(after.priceX).toBeCloseTo(before.priceX, 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);

  await page.mouse.move(1, 1);
  await row.locator('button').focus();
  await expect.poll(() => row.evaluate((element) => getComputedStyle(element, '::before').opacity)).toBe('1');
});

test('secondary mobile links have comfortable touch targets', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Touch target size is relevant to the mobile layout.');
  await page.goto('/');
  for (const selector of ['.client-names > a', '.footer-main > div > a', '.footer-main > .text-link']) {
    const links = page.locator(selector);
    const count = await links.count();
    for (let index = 0; index < count; index += 1) {
      const height = await links.nth(index).evaluate((element) => element.getBoundingClientRect().height);
      expect(height).toBeGreaterThanOrEqual(44);
    }
  }
});
