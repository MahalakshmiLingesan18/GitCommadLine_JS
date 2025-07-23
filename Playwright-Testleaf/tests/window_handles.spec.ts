import {test, expect} from "@playwright/test";

test.only("Window handles", async({context, page}) =>{

    await page.goto("https://leafground.com/window.xhtml");

    //const childPage = await context.waitForEvent('page');
    const createPromise = context.waitForEvent('page');
    await page.click("//span[text()='Open']");
    
    await page.waitForTimeout(5000);

    const childPage = await createPromise;

    const childPageTitle = await childPage.title();
    console.log(`Child page Title: ${childPageTitle}`);
    await childPage.close();

    //To check if the control is switched to parent window
    const parentPage = await page.title();
    expect.soft(parentPage).toMatch("Window");
    console.log(`Parent page Title: ${parentPage}`);

})

test('Multiple Window Handling ',async({context,page})=>{

await page.goto("https://www.leafground.com/window.xhtml;")

//promise -> array format 
const [multipleWindow]=await Promise.all([

    context.waitForEvent('page'),
    page.locator("//span[text()='Open Multiple']").click()
])

//[w1-parent, w2-ch1,w3-ch2,...]
const allPages =multipleWindow.context().pages()
console.log(allPages.length)
//Title as window -> parent page
//title as table,dashboard -> child page

//dashboard -> mail id 
let tab:any
let tab1: any
for(let i=0;i<allPages.length;i++){

    await page.waitForTimeout(5000)
    const title=await allPages[i].title()
    console.log(title)

    if(title==='Web Table'){
        //resolve promise
        //childpage refernce will be tab
        tab=allPages[i]
        //console.log(tab);
    }

}
//action your do outside for loop
//await tab.locator("#email").fill("dilip@testleaf.com")

await tab.locator("//input[@id='form:j_idt89:globalFilter']").fill("France")

})