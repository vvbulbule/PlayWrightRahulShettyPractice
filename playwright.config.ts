import { chromium, defineConfig, devices } from '@playwright/test';


// All Configuration key value pair is stored in this
// we need to export this defineConfig so that it will available to all files in the project
export default defineConfig({
  //const  config=({
  testDir: './tests',
  //by default timeout is of 30 sec 
  // only if we want to overwrite the default timeout we need to defined it otherwise no need
  // Timeout of 40 sec to wait for perticular element
  // this time out is for every steps in playwright and components
  timeout:40 *1000,
  // for assertion we use expect timeout
  expect:{
  timeout:40 *1000,
  },
 // Once all the test run below line gve the report in html
 reporter:'html',
  
  use: {
   
    // Give the browser name where we want to run the test
    browserName:'chromium'
    
  },

});
//module.exports - config