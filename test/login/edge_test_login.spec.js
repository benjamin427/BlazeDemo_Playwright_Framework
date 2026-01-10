import {expect, test} from '@playwright/test'
import {blazedemo_login} from '../login/page_object/login';


test("Entering special characters for email text field with expected password input. Should display a prompt error message", async({page}) => {
    const login = new blazedemo_login(page)

    //Environment variables
    const reference_password = process.env.BLAZEDEMO_LOGIN_PASSWORD
    const reference_special_chracters = process.env.BLAZEDEMO_LOGIN_SPECIAL_CHARACTERS
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT

    await login.visitWebsiteLogin()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.test_login(reference_special_chracters, reference_password)
    await login.close()
})
test("Entering special characters for password text field with expected email input. Should display a prompt error message", async({page}) => {
    const login = new blazedemo_login(page)
    const reference_emailAddress = process.env.BLAZEDEMO_LOGIN_EMAIL
    const reference_special_chracters = process.env.BLAZEDEMO_LOGIN_SPECIAL_CHARACTERS
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT

    await login.visitWebsiteLogin()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.test_login(reference_emailAddress, reference_special_chracters)
    await login.close()
})

