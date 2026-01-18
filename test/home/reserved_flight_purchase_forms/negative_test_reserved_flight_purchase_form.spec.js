const {expect, test} = require('@playwright/test')
import { blazedemo_reserve_flight_purchase } from './page_object/reserve_flight_form'

test.beforeEach(async({page}) => {
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    await negativeTestForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
})
test("Submit a form with a blank name text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_name(referenceAddress, referenceCity, referenceState, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank address text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_address(referenceName, referenceCity, referenceState, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank city text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_city(referenceName, referenceAddress, referenceState, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank state text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_state(referenceName, referenceAddress, referenceCity, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank zip code text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_zip_code(referenceName, referenceAddress, referenceCity, referenceState, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank credit card number text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_credit_card_number(referenceName, referenceAddress, referenceCity, referenceState, referenceZipCode, 
                referenceCreditCardMonth, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank month text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_month(referenceName, referenceAddress, referenceCity, referenceState, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardYear, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank year text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_year(referenceName, referenceAddress, referenceCity, referenceState, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceNameOnCard)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test("Submit a form with a blank 'name on card' text field while using a Visa card for purchasing a reserved flight for Virgin America", async({page}) => {
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
    await negativeTestForm.negative_test_reserved_flight_form_blank_name_on_card(referenceName, referenceAddress, referenceCity, referenceState, referenceZipCode, 
                referenceCreditCardNumber, referenceCreditCardMonth, referenceCreditCardYear)
    await negativeTestForm.select_card_visa()
    await negativeTestForm.checkbox()
    await negativeTestForm.submitButton()
})
test.afterEach(async({page}) => {
     const negativeTestForm = new blazedemo_reserve_flight_purchase(page)
     await negativeTestForm.close()
})