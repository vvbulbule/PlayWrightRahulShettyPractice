import {test, expect} from "@playwright/test"

test.only("Login the Website and Fetch the product Name", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill("vvbulbule@gmail.com")
    await page.locator("[type='password']").fill("V12bulbule@")
    await page.locator(".btn.btn-block.login-btn").click()

    // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
    const products = page.locator(".card-body b");
    await products.first().waitFor();

    const allTexts = await products.allTextContents();// [ 'ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro' ]
    console.log(allTexts);


})