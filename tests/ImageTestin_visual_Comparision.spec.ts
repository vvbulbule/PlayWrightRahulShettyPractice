   /*  Visual Image Testing Visual Comparision Means we will take the screenshot first (Expected Result) and store it in project 
    later we will take the screenstos again then we compare it with screenshots which is intially Taken  (Expected Result)
    It will do file to file comparision like pixel , alignment etc */

    import {test,expect} from "@playwright/test"

    test.only("Visual Image Testing Visual Comparision", async ({page})=>{
    
        await page.goto("https://www.google.com/")
    
        /* when we run the below line for the first time it will fail because it will not find the expected Image to Test in Project
         So When we run the below line for the first time it will take the screenshot i.e Expected Image 
        then from the second time running the code it will match the Expected Image with Actual image */
        expect(await page.screenshot()).toMatchSnapshot("landing.png")
        
    
    
    
    })