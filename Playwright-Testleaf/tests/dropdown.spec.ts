/* classRoom 1
DropDown

https://www.telerik.com/contact
What can we help you with?  -> index 5
Product Interest -> UI for react -> label
Country/Territory -> canada -> value */

import test from "@playwright/test";

test ("To open Telerik website", async({page}) => {

    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("#Dropdown-1", {index: 5});
    await page.selectOption("#Dropdown-2", {label: "UI for React"});
    await page.waitForTimeout(3000);

    const element = page.locator("#Country-1");
    element.scrollIntoViewIfNeeded(); 
    await page.waitForTimeout(2000);

    await page.selectOption("#Country-1", {value: "Canada"});
    await page.waitForTimeout(5000);

})