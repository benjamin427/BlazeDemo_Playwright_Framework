const {expect, test} = require('@playwright/test')
import {blazedemo_reserve_flight_purchase} from './page_object/reserve_flight_form'

test.beforeEach(async({page}) => {
    const purchaseReserveFlight = new blazedemo_reserve_flight_purchase(page)
    await purchaseReserveFlight.gotoWebsiteSource()
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
})
test("Entering the expected text format for all text fields in the United Airlines flight purchase form using Visa card", async({page}) => {
    const purchaseReserveFlight = new blazedemo_reserve_flight_purchase(page)
    const referenceName = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CREDIT_CARD_NUMBER
    const referenceMonth = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_MONTH
    const referenceYear = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME_ON_CARD
    await purchaseReserveFlight.test_reserved_flight_form(referenceName, referenceAddress, referenceCity, referenceState,
                                                               referenceZipCode, referenceCreditCardNumber, referenceMonth,
                                                               referenceYear, referenceNameOnCard)
    await purchaseReserveFlight.select_card_visa()
    await purchaseReserveFlight.checkbox()
    await purchaseReserveFlight.submitButton()
})
test("Entering the expected text format for all text fields in the United Airlines flight purchase form using American Express card", async({page}) => {
    const purchaseReserveFlight = new blazedemo_reserve_flight_purchase(page)
    const referenceName = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CREDIT_CARD_NUMBER
    const referenceMonth = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_MONTH
    const referenceYear = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME_ON_CARD
    await purchaseReserveFlight.test_reserved_flight_form(referenceName, referenceAddress, referenceCity, referenceState,
                                                                           referenceZipCode, referenceCreditCardNumber, referenceMonth,
                                                                           referenceYear, referenceNameOnCard)
    await purchaseReserveFlight.select_card_american_express()
    await purchaseReserveFlight.checkbox()
    await purchaseReserveFlight.submitButton()
})
test("Entering the expected text format for all text fields in the United Airlines flight purchase form using Diner's Club card", async({page}) => {
    const purchaseReserveFlight = new blazedemo_reserve_flight_purchase(page)
    const referenceName = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ZIP_CODE
    const referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CREDIT_CARD_NUMBER
    const referenceMonth = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_MONTH
    const referenceYear = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME_ON_CARD
    await purchaseReserveFlight.test_reserved_flight_form(referenceName, referenceAddress, referenceCity, referenceState,
                                                                      referenceZipCode, referenceCreditCardNumber, referenceMonth,
                                                                      referenceYear, referenceNameOnCard)
    await purchaseReserveFlight.select_card_diners_club()
    await purchaseReserveFlight.checkbox()
    await purchaseReserveFlight.submitButton()
})
test.afterEach(async({page}) => {
     const purchaseReserveFlight = new blazedemo_reserve_flight_purchase(page)
     await purchaseReserveFlight.close()
})
