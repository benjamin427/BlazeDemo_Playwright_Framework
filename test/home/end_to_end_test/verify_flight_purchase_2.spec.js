const {expect, test} = require('@playwright/test')
import { blazedemo_home } from '../page_object/home'
import { blazedemo_reserve } from '../page_object/reserve_flights_departure_philadelphia'

test.beforeEach(async({page}) =>{
    const verifyFlightServices = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_HOME_TITLE
    await verifyFlightServices.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)
})
test("Verify the total cost of a flight from Philadelphia to Buenos Aires from United Airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT
    await verifyFlightServices.select_departure_philadelphia()
    await verifyFlightServices.select_destination_buenos_aires()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_43_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Philadelphia to Rome from United Airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT
    await verifyFlightServices.select_departure_philadelphia()
    await verifyFlightServices.select_destination_rome()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_43_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Philadelphia to London from United Airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT
    await verifyFlightServices.select_departure_philadelphia()
    await verifyFlightServices.select_destination_london()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_43_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test.afterEach(async ({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    await verifyFlightServices.close()
})
