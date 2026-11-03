import { test, expect } from "@playwright/test";

test("Olympus postmodernist identity stays shared across the storefront, guide and studio", async ({
  page,
}) => {
  for (const width of [1440, 375]) {
    const identities = [];
    for (const [name, route] of [
      ["storefront", "/"],
      ["styleguide", "/styleguide.html"],
      ["studio", "/studio.html"],
    ]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(route);
      await expect(page).toHaveTitle(/Olympus/);
      await expect(page.locator("header .wordmark")).toHaveAttribute(
        "src",
        "assets/wordmark.svg",
      );
      identities.push(
        await page.locator("h1").evaluate((heading) => {
          const styles = getComputedStyle(heading);
          const tokens = getComputedStyle(document.documentElement);
          return [
            styles.fontFamily,
            styles.fontWeight,
            tokens.getPropertyValue("--color-ink"),
            tokens.getPropertyValue("--color-paper"),
          ];
        }),
      );
      await page.screenshot({
        path: `docs/explorations/olympus-postmodernist-${name}-${width}.png`,
      });
      if (name === "styleguide") {
        await page.locator("#logo").screenshot({
          path: `docs/explorations/olympus-postmodernist-logo-${width}.png`,
        });
        await expect(
          page.locator('[data-color-token="--color-accent"]'),
        ).toHaveText("#913b29");
        await expect(page.locator(".type-display")).toHaveText("To thetops");
      }
    }
    expect(identities[1]).toEqual(identities[0]);
    expect(identities[2]).toEqual(identities[0]);
  }
});
