import {test, expect} from "@playwright/test";

test.only("Handle alerts & frames", async({page}) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    page.once("dialog", alert => {
        const type = alert.type();
        console.log(`Type: ${type}`);

        const message = alert.message();
        console.log(`Message: ${message}`);

        alert.accept();

    })

    await page.frameLocator("//iframe[@name='iframeResult']").locator("//button[text()='Try it']").click();
    //await page.waitForTimeout(45000);
    let frameResult = page.frameLocator("#iframeResult");
    const textAfterClick = await frameResult.locator("//p[@id='demo']").innerText();
    expect.soft(textAfterClick).toMatch("OK");
    console.log(`Message after click: ${textAfterClick}`);

})

test("Handle Frame with FrameObject ",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    const firstFrame=page.frame({url:"https://www.leafground.com/default.xhtml"})
    await firstFrame?.locator("#Click").click()

    await page.waitForTimeout(3000)

    //nested
 const nestedFrame= page.frame({name:"frame2"})
 await nestedFrame!.locator("#Click").click()
})