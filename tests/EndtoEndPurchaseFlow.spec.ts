import {test} from "@playwright/test"

test.only("TC to Add the Product to Cart and place the Order", async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
        await page.locator("#userEmail").fill("vvbulbule@gmail.com")
        await page.locator("#userPassword").fill("V12bulbule@")
        await page.locator("#login").click()

        // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
        const ProductsTitles = page.locator(".card-body b")
        await ProductsTitles.first().waitFor()

        //Display all Product titles
        const allProductTitle= await ProductsTitles.allTextContents()
        console.log(allProductTitle)//[ 'ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro' ]

        // Now select the "ZARA COAT 3" Product
        const productName= "ZARA COAT 3"
        const productsDetails = page.locator(".card-body")// products will save all the products information like Product Title, View Btn, Add to Card Btn
        const count= await productsDetails.count()// This will give count the total number of Products

        //iterate all the products
        for (let i=0;i<count;i++){
            //it will get all the productDetails for every iteration using productsDetails.nth(i)
            // Here we applied the chaining of location i.e search the locator(b) inside the productDetails of i value iteration not in Whole Page
            // productsDetails.nth(i).locator("b").textContent() it will fetches all the ProductNames
            if (await productsDetails.nth(i).locator("b").textContent()===productName){
                //Click on Add to Cart Btn
                await productsDetails.nth(i).locator("text= Add To Cart").click()
                //Once the Productname = "ZARA COAT 3" is found then no need to check other productNames so break is used
                break
                //await page.pause();
            }
        }




    }

)