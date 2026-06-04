// When we click on some Button like "Show Text " then  text will appeare and when click on on Button "Hide" then Text will be dissappear from the screen
// Hre we are checking that Elemet is Dissappears and Appears on the Page when perform some Action like Button Click 
import {test,expect} from "@playwright/test"

test.only("Handling Hidden Elements", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // Verify By Default text is displayed on screen when page opens
    await expect(page.locator("#displayed-text")).toBeVisible(); 

    // Click on Hide Button
    await page.locator("#hide-textbox").click()

    //Verify text is Hidden on screen
    await expect(page.locator("#displayed-text")).toBeHidden(); 


}

)