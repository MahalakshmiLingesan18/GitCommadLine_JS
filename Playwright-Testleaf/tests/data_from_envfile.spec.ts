import test from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({path:`TestData/Prod.env`});
//data from sigle env file
test("Data from single env file", async({page}) => {
    
    let username = process.env.SF_Username as string;
    let pass = process.env.SF_Password as string;
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.fill("#username", username);
    await page.fill("#password", pass);
    await page.waitForTimeout(3000);
    await page.click("#Login"); 

})