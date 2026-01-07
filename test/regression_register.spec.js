const {expect, test} = require('@playwright/test')
const {blazedemo_register} = require('../pageObjects/pageobject_register')

test("Regression test of registration form", async({page}) => {
  // Environment variables from the .env.register file
  const name = process.env.REGISTER_NAME
  const company = process.env.REGISTER_COMPANY 
  const email_address = process.env.REGISTER_EMAIL
  const password = process.env.REGISTER_PASSWORD
  const title = process.env.REGISTER_TITLE
  const endpoint_url = process.env.REGISTER_ENDPOINT

  //Accessing the page object to use the targeted elements for executiong the test
  const register = new blazedemo_register(page)
  await register.gotoWebsite()
  await expect(page).toHaveURL(endpoint_url)
  await expect(page).toHaveTitle(title)
  await register.positive_test_registration_form(name, company, email_address, password, password)
})