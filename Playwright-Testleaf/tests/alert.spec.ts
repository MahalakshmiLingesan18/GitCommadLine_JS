import {test} from "@playwright/test";

test("Auto-dismiss alert", async({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml");
    //simple alert
    await page.locator("//button[@type='submit']").first().click();
    //Confirm alert
    await page.locator("//button[@type='submit']").nth(1).click();

})

test("Handle single alert", async({page}) => {

    page.once('dialog', alert => {

        const alertType = alert.type();
        console.log(alertType);

        const alertMessage = alert.message()
        console.log(alertMessage);

        alert.accept();

        //alert.accept("Maha");

    })

    await page.goto("https://www.leafground.com/alert.xhtml");
    //simple alert
    await page.locator("//button[@type='submit']").first().click();
    //Confirm alert
    await page.locator("//button[@type='submit']").nth(1).click();

})

test("Handle multiple alert", async({page}) => {

    page.on('dialog', alert => {

        const alertType = alert.type();
        console.log(alertType);

        const alertMessage = alert.message()
        console.log(alertMessage);

        alert.accept();

    })

    await page.goto("https://www.leafground.com/alert.xhtml");
    //simple alert
    await page.locator("//button[@type='submit']").first().click();
    //Confirm alert
    await page.locator("//button[@type='submit']").nth(1).click();

})

test.only("Handle prompt alert", async({page}) => {

    page.on("dialog", alert => {

        const alertType = alert.type();
        console.log(alertType);

        const alertMessage = alert.message();
        console.log(alertMessage);

        //alert.accept("Maha");
        //alert.dismiss();

        if(alertType==="confirm") {
            alert.dismiss();
        } else if (alertType==="prompt"){
            alert.accept("Maha");
        } else {
            alert.accept();
        }

    })

    await page.goto("https://www.leafground.com/alert.xhtml");
    //simple alert
    await page.locator("//button[@type='submit']").first().click();
    //Confirm alert
    await page.locator("//button[@type='submit']").nth(1).click();
    //Prompt alert
    await page.locator("//button[@type='submit']").nth(3).click();

})