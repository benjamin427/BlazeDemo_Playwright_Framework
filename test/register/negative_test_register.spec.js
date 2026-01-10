const {expect, test} = require('@playwright/test');
import {blazedemo_register} from './page_object/register';

test.beforeEach(async({page}) => {
    const register = new blazedemo_register(page)
    await register.visitWebsite()
})

test("Submit a blank register form. Should display a error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.negative_test_register_blank()
})
test("Submit a form with a blank name text field. Should display an error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_company = process.env.BLAZEDEMO_REGISTER_COMPANY
    const reference_emailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL
    const reference_password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.negative_test_register_blank_name(reference_company, reference_emailAddress, reference_password, reference_password)
})
test("Submit a form with a blank company text field. Should display an error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_name = process.env.BLAZEDEMO_REGISTER_NAME
    const reference_emailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL
    const reference_password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.negative_test_register_blank_company(reference_name, reference_emailAddress, reference_password, reference_password)
})
test("Submit a form with a blank email text field. Should display an error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_name = process.env.BLAZEDEMO_REGISTER_NAME
    const reference_company = process.env.BLAZEDEMO_REGISTER_COMPANY
    const reference_password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.negative_test_register_blank_email(reference_name, reference_company, reference_password, reference_password)
})
test("Submit a form with a blank password text field. Should display an error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_name = process.env.BLAZEDEMO_REGISTER_NAME
    const reference_company = process.env.BLAZEDEMO_REGISTER_COMPANY
    const reference_emailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL
    const reference_password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.negative_test_register_blank_password(reference_name, reference_company, reference_emailAddress, reference_password)
})

test("Submit a form with a blank confirm password text field. Should return an error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_name = process.env.BLAZEDEMO_REGISTER_NAME
    const reference_company = process.env.BLAZEDEMO_REGISTER_COMPANY
    const reference_emailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL
    const reference_password = process.env.BLAZEDEMO_REGISTER_PASSWORD
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.negative_test_register_blank_passwordConfirm(reference_name, reference_company, reference_emailAddress, reference_password)
})

test.afterEach(async({page}) => {
    const register = new blazedemo_register(page)
    await register.close()
})