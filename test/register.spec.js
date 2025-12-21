const {expect, test} = require('@playwright/test')
const {blazedemo_register} = require('../pageObjects/pageobject_register')


test("Successful completion of registration form", async({page}) => {
  const name = process.env.REGISTER_NAME
  const company = process.env.REGISTER_COMPANY 
  const email_address = process.env.REGISTER_EMAIL
  const password = process.env.REGISTER_PASSWORD
  const title = process.env.REGISTER_TITLE
  const register = new blazedemo_register(page)
  await register.gotoWebsite()
  await expect(page).toHaveURL(/register/)
  await expect(page).toHaveTitle(title)
  await register.registration_form(name, company, email_address, password, password)
  await register.close()
})
