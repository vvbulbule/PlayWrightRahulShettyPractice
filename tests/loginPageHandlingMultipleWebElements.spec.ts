/*This Program is to Handle multiple webElemets having the same locator value*/
/* if the file does not contains .spec.ts at the end then So VS Code treats it as normal TypeScript file, not a test file.
 If .spec is missing at the the end of file name → test will not run.
So .spec is compuslsory in every playwright file and extension is ts
*/
import {test, expect} from "@playwright/test"

test.only('TC to Handle multiple webElemets having the same locator value' , async ({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //await required for only the action step
    // Below line will store the WebElement into the Username just like WebElement Store in Selenium
    const username= page.locator("#username")
    const password = page.locator("#password")
    const SignInBtn = page.locator("#signInBtn")
    
    //Entered the Username "rahulshettyacademyInvalid" 
    await username.fill("rahulshettyacademyInvalid");

    // Using fill method only we can cleared the entered text
    await username.fill("")
    // Now Entered the Valid Username
    await username.fill("rahulshettyacademy")
    //  Entered the Valid Password
    await password.fill("Learning@830$3mK2")
    await SignInBtn.click() 
    

})