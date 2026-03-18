import {test, expect} from "@playwright/test"

test.only("Handling Radio btn and Dropdowns", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("Learning@830$3mK2")


    // Click on Radio Button and click on second element
    await page.locator(".customradio").nth(1).click()

    // In this Application Test Site After clicking on radio button one popup will be open it not the Javascript popup actually it is Normal popup we can inspect the element 
    // So just click on Ok button of Popup
    await page.locator(".btn.btn-success").click()

    // Verify that Radio button is checked or not
    console.log(await page.locator(".customradio").nth(1).isChecked()) // true i.e. it will just print the true if the radiobox is selected 
    await expect(page.locator(".customradio").nth(1)).toBeChecked();// it will verify 

    // Handling Dropdown and select Consultant using the value
    // This is static Dropdown having select Tag
    await page.locator("select.form-control").selectOption("consult")

    // Click on terms and conditions checkbox
    await page.locator("#terms").click();
    //verify Checkox is checked
    await expect(page.locator("#terms")).toBeChecked()// it will verify 


    // Click on Signin Btn
    await page.locator("[name='signin']").click()

    // After signin verify the page title is correct i.e ProtoCommerce
    await expect (page).toHaveTitle("ProtoCommerce")

    // To pause the execution use the pause once debug done then click on next arrow to continue execution
    //await page.pause()

})


