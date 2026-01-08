const {expect, test} = require('@playwright/test')
const {blazedemo_passwordreset} = require('./page_object/pageobject_passwordreset')


test("Successful completion of resetting password", async({page}) => {
  // Environment variables from the .env.passwordReset file
  const email_address = process.env.PASSWORD_RESET_EMAIL
  const title = process.env.PASSWORD_RESET_TITLE
  const endpoint_url = process.env.PASSWORD_RESET_ENDPOINT

  //Accessing the page object to use the targeted elements for executiong the test
  const password_reset = new blazedemo_passwordreset(page)
  await password_reset.vistiWebsite()
  await expect(page).toHaveURL(endpoint_url)
  await expect(page).toHaveTitle(title)
  await password_reset.positive_test_reset_Password(email_address)
 
})

