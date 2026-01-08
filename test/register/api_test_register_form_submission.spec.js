import {expect, test} from '@playwright/test';

//This is used to create data so it could be used for submitting a password reset form 
test("Create data from a resource", async({request, page}) => {
    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        data: {
            "name": "Unknown",
            "company": "Brand X",
            "email address": "random@random.com",
            "password": "testAdmin123",
            "password confirm": "testAdmin123",
            "userId": 1
        }
    })

    expect(response.status()).toBe(201)

    console.log(response.status())

    //Parsing and converting into JavaScript object 
    const responseBody = await response.json()

    //Identifying the JavaScript object
    const responseId = responseBody.Id

    //Converting a JavaScript object into a JavaScript string
    console.log("Response: ", JSON.stringify(responseBody))

    //Going to the website and using the identifier in the url
    await page.goto(`https://blazedemo.com/register?id={responseId}`)

    //Fill the text fields from the identifier from the API
    await page.fill("#name", "Name")
    await page.fill("#company", "Company")
    await page.fill("#email", "E-Mail Address")
    await page.fill("#password", "Password")
    await page.fill("#password-confirm", "Confirm Password")
    await page.click('button[type="submit"]')
})