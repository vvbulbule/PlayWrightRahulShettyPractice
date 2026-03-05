// Import the test Annotations from node_modules jars
// Import the Playwright testing module From the package @playwright/test
//Take only test from the exported object and Store it in a variable called test
//uses object destructuring to import the test function from the Playwright module.
// we don't provide the require line then it will give error Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i
const {test} = require('@playwright/test');

// it takes two arguments first is TC Title and second is ACtual Test case
// below is the simple test cases structure
// This is  the formate for every test cases and inside the function braces we can wright our test cases code
/*In jS code will not get execute in Sequence i.e all the line of the code executed at a time that is we called is asynchronous
So we need to tell the JS to wait until the previous steps completed So before every step we need to write the keyword await
 So we need to write the async before the function 
test('First Playwright Test ', async function()
But latest JS Versions the functions that don't have the name that can be written as => sign
*/
test('First Playwright Test ', async () =>
{
    //Playwright Code
    
}
)