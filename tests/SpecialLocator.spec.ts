import {test} from "@playwright/test"

test.only("Testing Special Locators in Playwright", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click()// Clcik on Checkbbox having Label Tag
    await page.getByLabel("Employed").click()//Click on Radio Btn having Label Tag
    await page.getByLabel('Gender').selectOption("Female") // Select values from Dropdown having Select Tag
    await page.getByPlaceholder("Password").fill("India")// Enter the Text into Text box Password


    await page.getByRole("button",{name:"Submit"}).click()// Click on Button Having Subbmit as Button Text

    // here we use success message is displayed using isVisible() so we have to wait until element is appear so we used the first().waitFor()
    // It will the execute the isVisible method if we don't right first().waitFor()  as playwright don't wait for isVisible () Internally
    await page.getByText("Success! The Form has been submitted successfully!.").first().waitFor() 
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible()

    // Click on Shop Link
    await page.getByRole("link", {name:"Shop"}).click()
 
    await page.locator("app-card").filter({ hasText: "Nokia Edge" }) .getByRole("button", { name: "Add" }) .click() 

    //await page.pause()

}
    
)