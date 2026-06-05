
import {test,expect} from "@playwright/test"

test("Handling Frames", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // Handle Frame using FrameLocator Here we use Freame ID
    const Frames= page.frameLocator("#courses-iframe")

    // Now Use the Frame Variable Name go inside the Frames to Operform any Operation within Frames
    await Frames.getByRole("link", {name: "All Access Plan"}).click()

})