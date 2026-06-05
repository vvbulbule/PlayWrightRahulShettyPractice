/*
Mouse hover means moving the mouse pointer over an element without clicking it.

Example:

Hover over Products
A dropdown/menu appears
Click an option from the


*/
import {test,expect} from "@playwright/test"

test("Handling Hidden Elements", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //To Mouse Hover on some element 
    await page.locator("#mousehover").hover()

    //Click on Reload Link After mouse hover
    await page.getByRole('link', { name: 'Reload' }).click()



})