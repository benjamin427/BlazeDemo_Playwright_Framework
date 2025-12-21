const {expect, test} = require('@playwright/test')
const {blazedemo_passwordreset} = require('../pageObjects/pageobject_passwordreset')


test("Successful completion of resetting password", async({page}) => {
  const email_address = process.env.PASSWORD_RESET_EMAIL
  const title = process.env.PASSWORD_RESET_TITLE
  const password_reset = new blazedemo_passwordreset(page)
  await password_reset.vistiWebsite()
  await expect(page).toHaveURL(/reset/)
  await expect(page).toHaveTitle(title)
  await password_reset.resetPassword(email_address)
  await password_reset.close()
})

