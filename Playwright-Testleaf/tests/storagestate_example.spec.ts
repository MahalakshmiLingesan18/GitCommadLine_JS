import test from "@playwright/test"

test("To store credentials in Storage state", async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.fill("#username", "dilip@testleaf.com");
    await page.fill("#password", "Leaf@123");
    await page.click("#Login");
    await page.context().storageState({path:"TestData/LoginState.csv"});
})

test.use({storageState:"TestData/LoginState.csv"});
test.only("To access the credentials in storage state file", async({page}) => {
    await page.goto("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
    await page.waitForLoadState();
    await page.click("//button[@title='App Launcher']");
    await page.waitForLoadState();
    await page.click("//a[@data-label='Service']");
    await page.click("//a[@title='Accounts']");
    await page.click("//a[@title='New']");
})