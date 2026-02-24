import { Page } from '@playwright/test';

export class CourseraPlusPage {
  constructor(private page: Page) {}

  async getPricing() {
    const elementHandle = await this.page.locator('[data-testid="price-comparison"]').elementHandle();
    await elementHandle?.scrollIntoViewIfNeeded();
    const locator = this.page.locator(".rc-ReactPriceDisplay");
    await this.page.waitForLoadState("load");
    return [
      // await locator.nth(0).textContent(),
      // await locator.nth(1).textContent(),
      await locator.nth(2).textContent(),
      await locator.nth(3).textContent(),
      await locator.nth(4).textContent(),
      // await locator.nth(5).textContent(),
    ];

        // return await Promise.all(Array.from({ length: 6 }, (_, i) => locator.nth(i).textContent()));
  }
}
