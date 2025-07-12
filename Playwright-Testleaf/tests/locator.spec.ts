/* Write a Playwright test to locate and click the "Submit" button using:
a) CSS selector

b) getByRole // playwright locator

c) XPath */

import test from '@playwright/test';

test("Using different locators", async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", "DemoCSR2");
    await page.fill("#password", "crmsfa");
    //await page.locator(".decorativeSubmit").click(); //using css selector
    //await page.getByRole("button", {name: 'submit'}).click(); //using getByRole
    //await page.locator("//input[@class='decorativeSubmit']").click(); //using xpath

})