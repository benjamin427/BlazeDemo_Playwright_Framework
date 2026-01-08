import {expect, test} from '@playwright/test';

//This is used to create data so it could be used for submitting a password reset form 
test("Create data fropm a resource", async({request, page}) => {
    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        data: {
            "email": "random@random.com",
            "userId": 1
        }
    })

    expect(response.status()).toBe(201)

    //Parsing and converting into JavaScript object 
    const responseBody = await response.json()

    console.log(response.status())

    //Converting a JavaScript object into a JavaScript string
    console.log("Response: ", JSON.stringify(responseBody))

    //Identifying the JavaScript object
    const responseId = responseBody.Id

    //Going to the website and using the identifier in the url
    await page.goto(`https://blazedemo.com/password/reset?id={responseId}`)

    //Fill the text fields from the identifier from the API
    await page.fill("#email", "E-Mail Address")
    
    await page.click('button[type="submit"]')

})