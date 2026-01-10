import { expect, test } from '@playwright/test'
import { blazedemo_login } from '../login/page_object/login'


test("Entering expected input for email and password text fields to log in successfully ", async({page}) => {
    const login = new blazedemo_login(page)
    const reference_emailAddress = process.env.BLAZEDEMO_LOGIN_EMAIL
    const reference_password = process.env.BLAZEDEMO_LOGIN_PASSWORD
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT

    await login.visitWebsiteLogin()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.test_login(reference_emailAddress, reference_password)
    await login.close()
})
