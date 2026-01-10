import {expect, test} from '@playwright/test'
import {blazedemo_rest_password} from '../password_reset/page_object/password_reset';

test("Enter special characters in the text field in attempt to submit. Should display an error prompt message", async({page}) => {
    const resetPassword = new blazedemo_rest_password(page)
    const special_characters = process.env.BLAZEDEMO_PASSWORD_RESET_SPECIAL_CHARACTERS
    const reference_title = process.env.BLAZEDEMO_PASSWORD_RESET_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_PASSWORD_RESET_ENDPOINT
    await resetPassword.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await resetPassword.test_password_reset_form(special_characters)
})