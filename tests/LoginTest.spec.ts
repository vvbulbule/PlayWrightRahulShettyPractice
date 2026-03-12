
import {test, expect} from  '@playwright/test';

test.only('Login Test', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    //Playwright supports CSS and Xpath locators to identify the elements
    // Playwright recommended to use the CSS to identify the elements
    // enter  the text into the editbox we can use type or fill both are same but in latest playwright type is depricated
    // Enter the rahulshettyacademy in username
    await page.locator("#username").fill('rahulshettyacademy')//id=username
    await page.locator("[type='password']").fill('Learning@830$3mK2')//type="password"
    await page.locator("#signInBtn").click()




})