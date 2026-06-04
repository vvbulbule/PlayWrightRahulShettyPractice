/*
| Method                     | Purpose         |
| -------------------------- | --------------- |
| `page.goto(url)`           | Open URL        |
| `page.goBack()`            | Browser Back    |
| `page.goForward()`         | Browser Forward |
| `page.reload()`            | Refresh Page    |
| `page.url()`               | Get Current URL |
| `expect(page).toHaveURL()` | Validate URL    |
*/
import {test,expect} from "@playwright/test"

test("Handling Broser Navigations", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    console.log(page.url());// display current URL "https://rahulshettyacademy.com/AutomationPractice/""
    console.log(await page.title());// Get the Page Title "Practice Page"
    await page.goto("https://www.amazon.in/");
    console.log(await page.title());//// Get the Page Title
    await expect(page).toHaveURL("https://www.amazon.in/")// Validated the Current Page URL
    await page.goBack();//Equivalent to clicking browser Back button.
    await page.goForward();//Equivalent to browser Forward button.
    await page.reload(); //Equivalent to pressing F5.
    
}

)