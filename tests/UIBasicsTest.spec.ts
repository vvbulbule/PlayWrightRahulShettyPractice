// Import the test Annotations from node_modules jars
// Import the Playwright testing module From the package @playwright/test
//Take only test from the exported object and Store it in a variable called test
//uses object destructuring to import the test function from the Playwright module.
// we don't provide the require line then it will give error Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i
// To import the the Annotation in .ts file we have to use the import statement like import { test } from
/*
🎯 Simple Rule
File Type	  Import Style
.js	          const { test } = require()
.ts	         import { test } from
*/
import { test, expect } from '@playwright/test';

// it takes two arguments first is TC Title and second is ACtual Test case
// below is the simple test cases structure
// This is  the formate for every test cases and inside the function braces we can wright our test cases code
/*In jS code will not get execute in Sequence i.e all the line of the code executed at a time that is we called is asynchronous
So we need to tell the JS to wait until the previous steps completed So before every step we need to write the keyword await
 So we need to write the async before the function 
test('First Playwright Test ', async function ()
But latest JS Versions the functions that don't have the name that can be written as => sign
*/
test('First Playwright Test ', async ({ browser  }) =>
{
    //Playwright Code
    // we don't have to close the browser it will close automatically once the execution is done 
    // Playwright will create the 2 steps byfault when our browser context is empty like in Second Playwright Test case
   const context = await browser.newContext();
   const Page =await context.newPage();
   await Page.goto("https://rahulshettyacademy.com/loginpagePractise/")

}
);

// When we add .only after the test then it will run only that test cases from all the Test File
// In Case of One Test File - if we have two test with only then it will execute both the test cases
// In Case of Two Test File - if we have two test with only then it will execute both the test cases from Two Test File
test.only('Second Playwright Test ', async ({ page  }) =>
{
   // we don't have to close the browser it will close automatically once the execution is done 
   await page.goto("https://www.google.com/")
   // to print the page title
   console.log(await page.title())
   // Check the page title matching with expected using assersion i.e expect provided in toHaveTitle method
   // it will wait for 5 sec as we mention in config file and for all other steps 40 sec that it also we mention in js config file
   await expect(page).toHaveTitle("Google");

}
);