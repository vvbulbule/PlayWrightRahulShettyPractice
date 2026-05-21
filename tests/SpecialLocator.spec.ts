import {test} from "@playwright/test"

test.only("Testing Special Locators in Playwright", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click()// Clcik on Checkbbox having Label Tag
    await page.getByLabel("Employed").click()//Click on Radio Btn having Label Tag
    await page.getByLabel('Gender').selectOption("Female") // Select values from Dropdown having Select Tag

    //await page.pause()


}
    
)