import {test,expect} from "@playwright/test"

test("Handling File Uploading & Download", async ({page})=>{

    await page.goto("https://smallpdf.com/word-to-pdf")

    // Here no need to click on Choose File Button

    /* it will Pich the File from the Project Folder to Upload 
PlayWrightRahulShettyPractice
│
├── tests
│   └── TesDdata
│       ├── SampleFile.pdf

Note: If we want to take the file from local system then we can use Absolute Path like  C:/Users/Vikrant Bulbule/Desktop/sampleFile.docs here
But this is not recommended because it won't work on another machine or CI/CD pipeline.

To upload Mutilpe Files at Once
await page.locator("input[type='file']")
    .setInputFiles([
        "tests/TestData/SampleFile1.docx",
        "tests/TestData/SampleFile2.docx",
        "tests/TestData/SampleFile3.docx"
    ]);
│       
    */
   //// Upload Word file
    await page.locator("input[type='file']")
    .setInputFiles("tests/TestData/SampleFile.docx");


    // Verify File is Uploaded or not
    // After Uploading the File Check that Download button is displyed
    // Download button appears only after the file has been uploaded and converted.
    await expect(
    page.getByRole("button", { name: "Download" })
    ).toBeVisible({ timeout: 60000 });
    

    // Below code to Download a Converted File
    // Start listening for download BEFORE clicking
    const downloadPromise = page.waitForEvent("download");

    // Click Download Button
    await page.getByRole("button", { name: "Download" }).click();

    // Get downloaded file
    const download = await downloadPromise;

    // Print downloaded filename
    console.log(await download.suggestedFilename());//SampleFile.pdf

    // Save file to Download folder it will create the folder "Download" if not available inside the Project
    await download.saveAs(
        `Downloads/${await download.suggestedFilename()}`
    );
})