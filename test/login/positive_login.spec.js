const {expect, test} = require('@playwright/test')
const {blazedemo_login} = require('./page_object/pageobject_login/')

test("Successful completion of the login", async ({page}) => {
  // Environment variables from the .env.login file
  const email_address = process.env.LOGIN_EMAIL
  const password = process.env.LOGIN_PASSWORD
  const title = process.env.LOGIN_TITLE
  const endpoint_url = process.env.LOGIN_ENDPOINT

  //Accessing the page object to use the targeted elements for executiong the test
  const login = new blazedemo_login(page)
  await login.visitWebsite()
  await expect(page).toHaveURL(endpoint_url)
  await expect(page).toHaveTitle(title)
  await login.positive_test_login(email_address, password)
  
})




