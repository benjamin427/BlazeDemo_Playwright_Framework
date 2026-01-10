import {expect, test} from '@playwright/test';
import {blazedemo_rest_password} from '../password_reset/page_object/password_reset';

test("Submit and empty form. Should display an error prompt message", async({page}) => {
    const passwordReset = new blazedemo_rest_password(page)
    const reference_endpoint = process.env.BLAZEDEMO_PASSWORD_RESET_ENDPOINT
    const reference_title = process.env.BLAZEDEMO_PASSWORD_RESET_TITLE
    await passwordReset.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await passwordReset.negative_test_password_reset_form()
})