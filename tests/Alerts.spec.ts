/*
| Method                  | Purpose                  |
| ----------------------- | ------------------------ |
| `dialog.message()`      | Get alert text           |
| `dialog.type()`         | alert / confirm / prompt |
| `dialog.accept()`       | Click OK                 |
| `dialog.dismiss()`      | Click Cancel             |
| `dialog.accept("text")` | Enter text in prompt     |

*/


import {test,expect} from "@playwright/test"

test("Handling Hidden Elements", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // Once we write the below line then while executing the test cases if any popup opens then it will accept it in Playwright
    // After clicking on #confirmbtn Popup will open but we have handled it before coming the popup in Playwright
    page.on('dialog',dialog => console.log(dialog.message())) // To Print the text of Popup i.e. "Hello , Are you sure you want to confirm?"
    page.on('dialog',dialog => dialog.accept()) // To accept the popup
    //page.on('dialog',dialog => dialog.dismiss()) // To Close the popup
    // await page.on('dialog',dialog => dialog.accept("Vikrant")) // To Enter the Text and Clcik on Accept Popup

    await page.locator("#confirmbtn").click() 

})