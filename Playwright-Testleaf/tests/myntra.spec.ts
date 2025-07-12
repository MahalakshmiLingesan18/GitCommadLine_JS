import {test, expect} from '@playwright/test';

test("To select Roadster", async({page}) => {

    await page.goto("https://www.myntra.com/");
    await page.click("//a[text()='Men']");
    
})