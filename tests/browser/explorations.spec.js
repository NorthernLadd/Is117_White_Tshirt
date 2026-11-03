import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Olympus directions keep the same offer and usable controls at desktop and narrow widths", async ({
  page,
}) => {
  const offers = [];
  for (const width of [1440, 375]) {
    for (const direction of ["modernist", "postmodernist"]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`/explorations/${direction}.html`);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator(".product-art img")).toBeVisible();
      expect(
        await page
          .locator(".product-art img")
          .evaluate((img) => img.complete && img.naturalWidth > 0),
      ).toBeTruthy();
      offers.push(
        await page.locator("h1, .support, .cta, #size-help").allTextContents(),
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBeTruthy();
      await page.screenshot({
        path: `docs/explorations/${direction}-${width}.png`,
      });
      await page.getByRole("link", { name: "Choose your size" }).click();
      await page.getByRole("button", { name: "Add to demo bag" }).click();
      await expect(page.locator("#bag-count")).toHaveText("0");
      await expect(page.locator("#size-error")).toBeVisible();
      await page.locator('input[value="XL"]').check();
      await expect(page.locator("#product-price")).toHaveText("$32");
      await page.getByRole("button", { name: "Add to demo bag" }).click();
      await expect(page.locator("#bag-count")).toHaveText("1");
      await expect(page.locator("#bag-items")).toContainText("$32 USD each");
      await page.getByRole("button", { name: "Empty demo bag" }).click();
      await expect(page.locator("#bag-count")).toHaveText("0");
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    }
  }
  offers.forEach((offer) => expect(offer).toEqual(offers[0]));
});
