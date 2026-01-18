import { expect, test } from '@playwright/test'
import { time } from 'node:console'

test("Create data to use to fill out the form", async({request, page}) => {
    const reference_emailAddress = process.env.BLAZEDEMO_LOGIN_EMAIL
    var reference_password = process.env.BLAZEDEMO_LOGIN_PASSWORD
    const placeholder_url = process.env.BLAZEDEMO_LOGIN_URL_PLACEHOLDER
    // Protecting sensitive information for password reference
    reference_password = "*************"
    //Creating data from a resource
    const response = await request.post(placeholder_url, {
        data: {
            email: reference_emailAddress,
            password: reference_password,
            id: 1
        }
    })
    console.log(response.status())
    await expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    const responseId = responseBody.id
    console.log("Response: ", JSON.stringify(responseBody))

    
    await page.goto("https://www.blazedemo.com/login?id={responseId}")
    
    //Filling out the login form to be submitted
    await page.fill("#email", "E-Mail Address")
    await page.fill("#password", "Password")
    await page.click("button[type='submit']", {timeout: 7000})
    
})