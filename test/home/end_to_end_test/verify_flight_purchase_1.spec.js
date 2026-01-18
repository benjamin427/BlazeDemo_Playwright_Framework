const {expect, test} = require('@playwright/test')
import {blazedemo_home} from '../page_object/home'
import {blazedemo_reserve} from '../page_object/reserve_flights_departure_paris'

test.beforeEach(async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_HOME_TITLE
    await verifyFlightServices.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle) 
})
test("Verify the total cost of a flight from Paris to Buenos Aires from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)

    //Environment variables
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT

    //Selecting from a menu for departures 
    await verifyFlightServices.select_departure_paris()

    //Selecting from a menu for destinations
    await verifyFlightServices.select_destination_buenos_aires()
    await verifyFlightServices.submitButton_findFlights()

    //Verifying the next page for flight options  
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)

    //Selecting airline service for reserved flight
    await selectFlightServices.select_flight_43_virgin_america()

    //Verifying the next page to view total cost of the flight
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Paris to Rome from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT

    //Selecting from a menu for departures
    await verifyFlightServices.select_departure_paris()

    //Selecting from a menu for destinations
    await verifyFlightServices.select_destination_rome()
    await verifyFlightServices.submitButton_findFlights()

    //Verifying the next page for flight options  
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)

    //Selecting airline service for reserved flight
    await selectFlightServices.select_flight_43_virgin_america()

    //Verifying the next page to view total cost of the flight
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Paris to London from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    await verifyFlightServices.select_departure_paris()
    await verifyFlightServices.select_destination_london()
    await verifyFlightServices.submitButton_findFlights()

    //Verifying the next page for flight options 
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)

    //Selecting airline service for reserved flight
    await selectFlightServices.select_flight_12_virgin_america()

    //Verifying the next page to view total cost of the flight
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Paris to Berlin from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new blazedemo_home(page)
    const selectFlightServices = new blazedemo_reserve(page)
    const referenceReserveTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceReserveEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    const referencePurchaseTitle = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE
    const referencePurchaseEndpoint = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT
    await verifyFlightServices.select_departure_paris()
    await verifyFlightServices.select_destination_berlin()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page).toHaveURL(referenceReserveEndpoint)
    await selectFlightServices.select_flight_12_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page).toHaveURL(referencePurchaseEndpoint)
})
test.afterEach(async({page}) => {
     const verifyFlightServices = new blazedemo_home(page)
     await verifyFlightServices.close()
})