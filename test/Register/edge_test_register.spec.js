const {expect, test} = require('@playwright/test')
const {blazedemo_register} = require('./pageObject/pageobject_register')


test("Testing each field with special characters", async({page}) => {
    //Environment variables from the .env.register file
    const title = process.env.REGISTER_TITLE
    const special_characters = process.env.REGISTER_SPECIALCHARACTERS
    const endpoint_url = process.env.REGISTER_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const blazedemoRegister = new blazedemo_register(page)
    await blazedemoRegister.gotoWebsite()
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.positive_test_registration_form(special_characters, special_characters, special_characters, special_characters, special_characters)
    await blazedemoRegister.close()
})
