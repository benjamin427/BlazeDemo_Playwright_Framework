import {expect, test} from '@playwright/test';

test("Create data to use for submitting the form", async({page, request}) => {
    const emailAddress = process.env.BLAZEDEMO_PASSWORD_RESET_EMAIL
    const placeholder_url = process.env.BLAZEDEMO_PASSWORD_RESET_URL_PLACEHOLDER

    //Creating data from a resource
    const response = await request.post(placeholder_url, {
        data: {
            email: emailAddress,
            id: 1
        }
    })
    console.log(response.status())
    await expect(response.ok()).toBeTruthy()
    const responseBody = response.json()
    const responseId = responseBody.id
    console.log("Response: ", JSON.stringify(responseBody))

    await page.goto("https://www.blazedemo.com/password/reset?id={responseId}")

    //Filling out the password reset form
    await page.fill("#email", "E-Mail Address")
    await page.click("button[type='submit']", {timeout: 7000})
})