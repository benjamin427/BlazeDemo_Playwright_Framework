const {expect, test} = require('@playwright/test')
const {blazedemo_register} = require('../pageObjects/pageobject_register')


test.beforeEach(async({page}) => {
    const blazedemoRegister = new blazedemo_register(page)
    await blazedemoRegister.gotoWebsite()
})

test("Should return a error prompt on the empty text field 'name' after clicking the button", async({page})=> {
    //Environment variables from the .env.register file   
    const company = process.env.REGISTER_COMPANY
    const emailAddress = process.env.REGISTER_EMAIL
    const password = process.env.REGISTER_PASSWORD
    const title = process.env.REGISTER_TITLE
    const endpoint_url = process.env.REGISTER_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const blazedemoRegister = new blazedemo_register(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.negative_test_registration_form_name(company, emailAddress, password, password)

})
test("Should return a error prompt on the empty text field 'company' after clicking the button", async({page})=> {
    //Environment variables from the .env.register file
    const name = process.env.REGISTER_NAME
    const emailAddress = process.env.REGISTER_EMAIL
    const password = process.env.REGISTER_PASSWORD
    const title = process.env.REGISTER_TITLE
    const endpoint_url = process.env.REGISTER_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const blazedemoRegister = new blazedemo_register(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.negative_test_registration_form_company(name, emailAddress, password, password)

})
test("Should return a error prompt on the empty text field 'email address' after clicking the button", async({page})=> {
    const name = process.env.REGISTER_NAME
    const company = process.env.REGISTER_COMPANY
    const password = process.env.REGISTER_PASSWORD
    const title = process.env.REGISTER_TITLE
    const endpoint_url = process.env.REGISTER_ENDPOINT

    const blazedemoRegister = new blazedemo_register(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.negative_test_registration_form_email_address(name, company, password, password)
 
})
test("Should return a error prompt on the empty text field 'password' after clicking the button", async({page})=> {
    const name = process.env.REGISTER_NAME
    const company = process.env.REGISTER_COMPANY
    const emailAddress = process.env.REGISTER_EMAIL
    const password = process.env.REGISTER_PASSWORD
    const title = process.env.REGISTER_TITLE
    const endpoint_url = process.env.REGISTER_ENDPOINT

    const blazedemoRegister = new blazedemo_register(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.negative_test_registration_form_password(name, company, emailAddress, password)

})
test("Should return a error prompt on the empty text field 'confirm password' after clicking the button", async({page})=> {
    const name = process.env.REGISTER_NAME
    const company = process.env.REGISTER_COMPANY
    const emailAddress = process.env.REGISTER_EMAIL
    const password = process.env.REGISTER_PASSWORD
    const title = process.env.REGISTER_TITLE
    const endpoint_url = process.env.REGISTER_ENDPOINT

    const blazedemoRegister = new blazedemo_register(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.negative_test_registration_form_password_confirm(name, company, emailAddress, password)
})
test("Should return a prompt message indicating the user to fill out the form", async({page}) => {
    const blazedemoRegister = new blazedemo_register(page)
    const title = process.env.REGISTER_TITLE
    const endpoint_url = process.env.REGISTER_ENDPOINT

    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await blazedemoRegister.negative_test_registration_form()
})

test.afterEach(async({page}) => {
    await page.close()
})
