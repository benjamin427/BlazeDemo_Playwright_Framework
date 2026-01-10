const {expect, test} = require('@playwright/test');
import {blazedemo_register} from './page_object/register';

test("Enter all text fields with expected text formats", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_name = process.env.BLAZEDEMO_REGISTER_NAME
    const reference_company = process.env.BLAZEDEMO_REGISTER_COMPANY
    const reference_emailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL
    const reference_password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    await register.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.test_register_form(reference_name, reference_company, reference_emailAddress, reference_password, reference_password)
})

