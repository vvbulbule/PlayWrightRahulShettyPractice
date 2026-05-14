import {test, expect} from "@playwright/test"

test("Verify the Link", async ({page,context})=>{

       // Open main page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    // Check that Page has the blinking Link with Text "Free Access to InterviewQues/ResumeAssistance/Material"
    // Locate the link
    const link= page.locator("[href*='documents-request']")

    

    // now when we click on this link then it will open in seperate tab i.e Child window
    // But our page keyword have the access to current page tab
    // So Before clicking on link we have to tell playwright 
     // Step 1: Wait for new page (child window) + click

        const [newPage] = await Promise.all([
        context.waitForEvent('page'), // waits for new tab
        page.locator("[href*='documents-request']").click() // click opens child window
    ]);

    // Step 2: Work on child window use newPage
    // Fetch the text from Child Page "Please email us at mentor@rahulshettyacademy.com with below template to receive response"
    const text = await newPage.locator('.red').textContent();
    console.log(text);

    // Step 3: Switch back to parent using page
    await page.locator('#username').fill("rahulshettyacademy");
    
    
    //get the entered text rahulshettyacademy in Username input 
    /*#username is an <input> field <input id="username" ...> 
    | Method          | Works for        | Example               |
|   --------------- | ---------------- | --------------------- |
|   `textContent()` | Text inside tags | `<div>Text</div>`     |
|   `inputValue()`  | Input fields     | `<input value="abc">` |

    */
    
   console.log( await page.locator('#username').inputValue());//rahulshettyacademy


})