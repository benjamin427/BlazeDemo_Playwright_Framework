const {expect, test} = require('@playwright/test')
const {blazedemo_login} = require('../pageObjects/pageobject_login')



test("Successful completion of the login", async ({page}) => {
  const email_address = process.env.LOGIN_EMAIL
  const password = process.env.LOGIN_PASSWORD
  const title = process.env.LOGIN_TITLE
  const login = new blazedemo_login(page)
  await login.visitWebsite()
  await expect(page).toHaveURL(/login/)
  await expect(page).toHaveTitle(title)
  await login.login(email_address, password)
  await login.close()
})




