/* ClassRoom: 2

1.http://leaftaps.com/opentaps/control/main
2. Enter username as demoSalesManager (Use : Attribute based)​
3. Enter password as crmsfa (Use : Attribute based)​
4. Click on Login (Use : Attribute based)​
5. Click on CRM/SFA (Use Partial Text based xpath)​
6. Click on Leads(Use Text based) */

import test from "@playwright/test"

test ("To login leaftaps", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("//input[@id='username']", "DemoCSR2");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();
    await page.locator("//a[contains(text(), 'CRM')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.waitForTimeout(3000);

})
