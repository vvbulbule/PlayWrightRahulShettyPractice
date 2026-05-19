import {expect, test} from "@playwright/test"

test.only("TC to Add the Product to Cart and place the Order", async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
        await page.locator("#userEmail").fill("vvbulbule@gmail.com")
        await page.locator("#userPassword").fill("V12bulbule@")
        await page.locator("#login").click()

        // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
        const ProductsTitles = page.locator(".card-body b")
        await ProductsTitles.first().waitFor()

        //Display all Product titles from Home Page
        const allProductTitle= await ProductsTitles.allTextContents()
        console.log(allProductTitle)//[ 'ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro' ]

        // Now select the "ZARA COAT 3" Product from Home Page
        const productName= "ZARA COAT 3"
        const productsDetails = page.locator(".card-body")// products will save all the products information like Product Title, View Btn, Add to Card Btn
        const count= await productsDetails.count()// This will give count the total number of Products

        //iterate all the products and add the "ZARA COAT 3" to the cart
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

        // click on Cart button top right corner to open the cart Page
        await page.locator("[routerlink$='/dashboard/cart']").click()

        //Verify that Product added to Cart Page will displayed 
        // isVisible method will not wait automatically in playwright so we have wait for atleast first product is loaded in cart page
        await page.locator("div li").first().waitFor()
        const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible()// if present it will return true
        expect (bool).toBeTruthy()// verify that value is True

        // Click on Checkout Button
        await page.locator("button:has-text('Checkout')").click()
        
        // On the Payment Page
        /* Country it the Auto Suggestion Dropdown
        Not having select tag and Here if we use the fill method then suggestion will not be displayed  
        So we have to use the pressSequentially methods to type the letters one by one then auto sugession we be displayed for the dropdown 

        */
        //Inspect Auto Suggesion Box and enter partial test "Ind"  in the Auto Suggesion Box
        await page.locator("[placeholder='Select Country']").pressSequentially("Ind")

    
        //Inspect All the Suggestion comes below dropdown 
        const dropdown =  page.locator(".ta-results")

        //Wait for Options to Open in Auto Suggesions dropdown
        await dropdown.waitFor()

        // Inspect single elemet from the Auto Suggesion
        // Here we use Chaining of the locator
        const optionsCount= await dropdown.locator("button").count()

        //Iterate foe every value from auto suggesion and Match with Expected Value
        for (let i=0;i<optionsCount;i++){
            const text= await dropdown.locator("button").nth(i).textContent()
            if(text===" India"){
                await dropdown.locator("button").nth(i).click()
                console.log(text+" is selected") // India is selected
                break
            }

        }
       
        // Verify that email comes automatically on Payment page in email textbox is same as loggedin user's email ID
        // Here we can use the toHaveText() it will match the exact text 
        const email= "vvbulbule@gmail.com";
        await expect(page.locator("div label")).toContainText(email)

        //Enter the CVV 
        await page.locator(".input.txt").nth(1).fill("123")

        //Enter the Name on Card 
        await page.locator(".input.txt").nth(2).fill("Vikrant Bulbule")

        

        // Click on PlaceOrder btn
        await page.locator(".btnn.action__submit.ng-star-inserted").click()

        // Verify "Thankyou for the order." Message after Placing the Order
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

        // Ftech the order id on Order Page 
        const orderID= console.log(await page.locator("label.ng-star-inserted").textContent())


        
    }

)