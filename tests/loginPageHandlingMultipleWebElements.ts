/*This Program is to Handle multiple webElemets having the same locator value*/
import {test, expect} from "@playwright/test"

test('TC to Handle multiple webElemets having the same locator value' , async ({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //await required for only the action step
    // Below line will store the WebElement into the Username just like WebElement Store in Selenium
    const username= page.locator("#username")
    const password = page.locator("#password")
    const SignInBtn = page.locator("#signInBtn")
    
    //Entered the Username "rahulshettyacademyInvalid" 
    username.fill("rahulshettyacademyInvalid");

    // Using fill method only we can cleared the entered text
    username.fill("")
    // Now Entered the Valid Username
    username.fill("rahulshettyacademy")
    //  Entered the Valid Password
    password.fill("Learning@830$3mK2")
    SignInBtn.click() 
    

})