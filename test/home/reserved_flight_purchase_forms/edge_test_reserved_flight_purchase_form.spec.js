const {expect, test} = require('@playwright/test')
import { blazedemo_reserve_flight_purchase } from './page_object/reserve_flight_form'

test("Enter special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharacters = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharacters = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Club. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharacters = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion2 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_2
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Club. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion2 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_2
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion2 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_2
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion3 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_3
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion3 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_3
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion3 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_3
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special unique characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion4 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_4
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Club. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion4 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_4
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter string version of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion4 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_4
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion5 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_5
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Card. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion5 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_5
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter a shorter string of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new blazedemo_reserve_flight_purchase(page)
    const referenceTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    const referenceSpecialCharactersVersion5 = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_5
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})

