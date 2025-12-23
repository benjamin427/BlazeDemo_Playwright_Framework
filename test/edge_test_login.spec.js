const {expect, test} = require('@playwright/test')
const {blazedemo_login} = require('../pageObjects/pageobject_login')

test("Testing each field with special characters that should show an error", async({page}) => {
    //Environment variables from the .env.login file
    const special_characters = process.env.LOGIN_SPECIALCHARACTERS
    const title = process.env.LOGIN_TITLE
    const endpoint_url = process.env.LOGIN_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const blazedemoLogin = new blazedemo_login(page)
    await blazedemoLogin.visitWebsite()
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoLogin.positive_test_login(special_characters, special_characters)
    await blazedemoLogin.close()
})

