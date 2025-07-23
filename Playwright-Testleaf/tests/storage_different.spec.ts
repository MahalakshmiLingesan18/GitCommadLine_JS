import test from "@playwright/test"

/* test.use({storageState:"TestData/LoginState.csv"});
test("To access the credentials in storage state file", async({page}) => {
    await page.goto("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
    await page.waitForLoadState();
    await page.click("//button[@title='App Launcher']");
    await page.waitForLoadState();
    await page.click("//a[@data-label='Service']");
    await page.click("//a[@title='Accounts']");
    await page.click("//a[@title='New']");
}) */

test("To store credentials in Storage state", async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", "DemoCSR2");
    await page.fill("#password", "crmsfa");
    await page.click(".decorativeSubmit");
    await page.context().storageState({path:"TestData/LoginStateForLeaftaps.json"});
})