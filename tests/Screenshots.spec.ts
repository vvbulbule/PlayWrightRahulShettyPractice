import {test,expect} from "@playwright/test"

test("Handling Screenshots", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // It will Take the Screenshot of Visible Area Only when page is open in tab
    await page.screenshot({path: 'homepageVisible.png'})

    // It will Take the Screenshot of Fill Page with Scroll
    await page.screenshot({path: 'fullpage.png',fullPage: true});

    // To take the Screenshots of some element Only like Button , Text
    await page.locator("#displayed-text").screenshot({path: 'textDisplayed.png'});




})