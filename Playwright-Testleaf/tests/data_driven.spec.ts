import test from "@playwright/test"
import value2 from "../../Playwright-Testleaf/TestData/LoginCredentials.json"
import { parse } from "csv-parse/sync"
import fs from "fs"
import path from "path"

const filePath = "../../Playwright-Testleaf/TestData/LoginCredentials.csv";
const value1 = parse(fs.readFileSync(path.join(__dirname, filePath)), {
    columns:true,
    skip_empty_lines:true
});

for (let data1 of value1) {
    test(`Login using CSV data file ${data1.TestID}`, async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.fill("#username", data1.Username);
    await page.fill("#password", data1.Password);
    await page.waitForTimeout(3000);
    await page.click("#Login");
})
}

for (let data2 of value2) {
    test(`Login using json data file ${data2.TestID}`, async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.fill("#username", data2.Username);
    await page.fill("#password", data2.Password);
    await page.waitForTimeout(3000);
    await page.click("#Login");
})
}