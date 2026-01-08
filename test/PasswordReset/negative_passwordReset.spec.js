const {expect, test} = require('@playwright/test')
const {blazedemo_passwordreset} = require('./pageObject/pageobject_passwordreset')

test("Should return an error prompt message of the empty text field after clicking the button", async({page}) => {
    //Environment variables from the .env.passwordReset file
    const email_address = process.env.PASSWORD_RESET_EMAIL
    const title = process.env.PASSWORD_RESET_TITLE
    const endpoint_url = process.env.PASSWORD_RESET_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const passwordReset = new blazedemo_passwordreset(page)
    await passwordReset.vistiWebsite()
    await expect(page).toHaveTitle(title)
    await expect(page).toHaveURL(endpoint_url)
    await passwordReset.negative_test_reset_Password()
    await passwordReset.close()
})
