import test, {chromium} from "@playwright/test";

test("To launch a browser", async() => {

    const browserInstance = await chromium.launch({channel:'chrome'});

    const windowInstance = await browserInstance.newContext();

    const pageInstance = await windowInstance.newPage();

    await pageInstance.goto("https://www.facebook.com/");

    await pageInstance.waitForTimeout(3000);

}) 