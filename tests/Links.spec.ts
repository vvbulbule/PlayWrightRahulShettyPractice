import {test, expect} from "@playwright/test"

test.only("Verify the Link", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    // Check that Page has the blinking Link with Text "Free Access to InterviewQues/ResumeAssistance/Material"
    // Locate the link
    const link= page.locator("[href*='documents-request']")

    // Verify that it is blinking or not using Assert
    // Observe that when we inpect the link class has the class="blinkingText" Value 
    // we can check that the class Attribute has blinkingText Value using toHaveAttribute()
    // Here in below step action is performed inside () so await keyword comes inside only
    await expect(link).toHaveAttribute("class","blinkingText")


})