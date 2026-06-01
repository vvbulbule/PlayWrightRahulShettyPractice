import {test,expect} from "@playwright/test"

test("Handling Calender" , async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    //await page.getByRole("link", {name: "Top Deals"}).click()

    // Below is the dta which we want to select
    const monthNumber=6
    const date="15"
    const Year = "2027"

    
    await page.locator(".react-date-picker__inputGroup").click()// Clicking on calender box

    // we have to click 2 times on Mon, Year  at the top to open the Year List from calender
    await page.locator(".react-calendar__navigation").click()// Click on Mon, Year 
    await page.locator(".react-calendar__navigation").click()// Click on  Year 
    // Below step will select Year=2027
    await  page.getByText(Year).click()

    // in calender 6 is jun in text format but we are passing 6 as number 
    // Identify all the 12 months from the calender
    // Then click on 6th month i.e 5th element as array inder starts from 0
    //await page.locator("react-calendar__year-view__months__month").nth(5).click() same as below line
    await page.locator(".react-calendar__year-view__months__month").nth(monthNumber-1).click()

    // Now select the 15 Date
    await page.locator("//abbr[text()='"+date+"']").click() 


  // Method 1: Verify the Date is selected correctly i.e. 15 Jun 2027
  //Below locator is for the selected value in the calender
  
    const inputs = page.locator(".react-date-picker__inputGroup input:not([type='date'])");
   
    await expect(inputs.nth(0)).toHaveValue("6");
    await expect(inputs.nth(1)).toHaveValue("15");
    await expect(inputs.nth(2)).toHaveValue("2027");

/* // Method 2: Verify the Date is selected correctly i.e. 15 Jun 2027
//Create Expected Values Array
    const expectedValues = ["6", "15", "2027"];

    //Below locator is for the selected value in the calender
    const inputs2 = page.locator(".react-date-picker__inputGroup input");

    for (let i = 0; i < expectedValues.length; i++) {
    await expect(inputs2.nth(i)).toHaveValue(expectedValues[i]);
    }
    // Note: Method 2 will be failed becuase the first element is hidden in input2 so Method 1 will work Properly in this Rahu Shetty  test Site */

})

