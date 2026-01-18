const {expect, test} = require('@playwright/test')
import { blazedemo_home } from '../page_object/home'
import { blazedemo_reserve } from '../page_object/reserve_flights_departure_boston'

test.beforeEach(async ({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_HOME_TITLE
    await verifyFlightServices.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)
})
test("Verify the total cost of a flight from Boston to Buenos Aires from Lufthansa Airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_LUFTHANSA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_LUFTHANSA_ENDPOINT
    await verifyFlightServices.select_departure_boston()
    await verifyFlightServices.select_destination_buenos_aires()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_4346_Lufthansa()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Boston to London from Lufthansa Airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_LUFTHANSA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_LUFTHANSA_ENDPOINT
    await verifyFlightServices.select_departure_boston()
    await verifyFlightServices.select_destination_london()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_4346_Lufthansa()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Boston to Berlin from Lufthansa Airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_LUFTHANSA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_LUFTHANSA_ENDPOINT
    await verifyFlightServices.select_departure_boston()
    await verifyFlightServices.select_destination_berlin()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_4346_Lufthansa()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test.afterEach(async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    await verifyFlightServices.close()
})
