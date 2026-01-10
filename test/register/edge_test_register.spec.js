const {expect, test} = require('@playwright/test')
import {blazedemo_register} from './page_object/register';

test("Enter special characters in each field. Should display an error prompt message", async({page}) => {
    const register = new blazedemo_register(page)
    const reference_title = process.env.BLAZEDEMO_REGISTER_TITLE
    const reference_url = process.env.BLAZEDEMO_REGISTER_ENDPOINT
    const reference_special_characters = process.env.BLAZEDEMO_REGISTER_SPECIAL_CHARACTERS
    await register.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_url)
    await register.test_register_form(reference_special_characters, reference_special_characters, reference_special_characters, reference_special_characters,
        reference_special_characters
    )
})
