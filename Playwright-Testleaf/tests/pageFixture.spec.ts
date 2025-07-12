import test, {chromium} from "@playwright/test";

//using page fixture
test("Page fixture", async({page}) => {

    await page.goto("https://www.facebook.com/");

    await page.waitForTimeout(3000);

})