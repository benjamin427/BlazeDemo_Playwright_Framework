const {expect, test} = require('@playwright/test')
const {blazedemo_passwordreset} = require('./pageObject/pageobject_passwordreset')

test("Testing each field with special characters", async({page}) => {
    //Environment variables from the .env.passwordReset file
    const special_characters = process.env.PASSWORD_SPECIALCHARACTERS
    const title = process.env.PASSWORD_RESET_TITLE
    const endpoint_url = process.env.PASSWORD_RESET_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const blazedemopasswordReset = new blazedemo_passwordreset(page)
    await blazedemopasswordReset.vistiWebsite()
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemopasswordReset.positive_test_reset_Password(special_characters, special_characters)
    await blazedemopasswordReset.close()
})
