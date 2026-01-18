import {expect, test} from '@playwright/test';

test("Create data to use for submitting the form", async({page, request}) => {
    const name = process.env.BLAZEDEMO_REGISTER_NAME
    const company = process.env.BLAZEDEMO_REGISTER_COMPANY
    const emailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL
    var password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    const placeholder_url = process.env.BLAZEDEMO_REGISTER_URL_PLACEHOLDER
    password = "******************"
    const response = await request.post(placeholder_url,  {
        data: {
            name: name,
            company: company,
            email: emailAddress,
            password: password,
            id: 1
        }
    })

    console.log(response.status())
    await expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    const responseId = responseBody.id
    console.log("Response: ", JSON.stringify(responseBody))

    await page.goto("https://www.blazedemo.com/register?id={responseId}")

    //Filling out the register formto be submitted
    await page.fill("#name", "Name")
    await page.fill("#company", "Company")
    await page.fill("#email", "E-Mail Address")
    await page.fill("#password", "Password")
    await page.fill("#password-confirm", "Confirm Password")
    await page.click("button[type='submit']", {timeout: 6000})
})