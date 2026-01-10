import {expect, test} from '@playwright/test';
import { blazedemo_rest_password } from '../password_reset/page_object/password_reset';

test("Enter the required text format in the email text field", async({page}) => {
    const resetPassword = new blazedemo_rest_password(page)
    const reference_endpoint = process.env.BLAZEDEMO_PASSWORD_RESET_ENDPOINT
    const reference_title = process.env.BLAZEDEMO_PASSWORD_RESET_TITLE
    const reference_emailAddress = process.env.BLAZEDEMO_PASSWORD_RESET_EMAIL

    await resetPassword.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await resetPassword.test_password_reset_form(reference_emailAddress)
    await resetPassword.close()
})