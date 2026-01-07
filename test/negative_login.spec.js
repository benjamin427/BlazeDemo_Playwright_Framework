const {expect, test} = require('@playwright/test')
const {blazedemo_login} = require('../pageObjects/pageobject_login')


test.beforeEach(async({page}) => {
    const login = new blazedemo_login(page)
    await login.visitWebsite()
})
test("Should return an error prompt message on the empty email text field after clicking the button ", async({page}) => {
    //Environment variables from the .env.login file
    const title = process.env.LOGIN_TITLE
    const password = process.env.LOGIN_PASSWORD
    const endpoint_url = process.env.LOGIN_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const login = new blazedemo_login(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await login.negative_test_email_address_login(password)

})
test("Should return an error prompt message on the empty password text field after clicking the button", async({page}) => {
    //Environment variables from the .env.login file
    const title = process.env.LOGIN_TITLE
    const emailAddress = process.env.LOGIN_EMAIL
    const endpoint_url = process.env.LOGIN_ENDPOINT

    //Accessing the page object to use the targeted elements for executiong the test
    const login = new blazedemo_login(page)
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await login.negative_test_password(emailAddress)

})
test("Should return an error prompt messsage indictaing the user to fill out the login form", async({page}) => {
    const login = new blazedemo_login(page)
    const title = process.env.LOGIN_TITLE
    const endpoint_url = process.env.LOGIN_ENDPOINT
    await expect(page).toHaveURL(endpoint_url)
    await expect(page).toHaveTitle(title)
    await login.negative_test_login()
})
test.afterEach(async({page}) => {
    const login = new blazedemo_login(page)
    await login.close()
})

