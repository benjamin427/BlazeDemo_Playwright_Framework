const {expect, test} = require('@playwright/test')
import {blazedemo_home} from '../page_object/home'

test.beforeEach(async({page}) => {
    const searchFightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_HOME_TITLE
    await searchFightInformation.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)
})
test("Search flight information from Paris to Buenos Aires to get a listing of available airlines", async({page}) => {
    const searchFlightInformation = new blazedemo_home(page);
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    await searchFlightInformation.select_departure_paris();
    await searchFlightInformation.select_destination_buenos_aires();
    //Clicking the submit button to go to the next page to view flight information
    await searchFlightInformation.submitButton_findFlights();
    //Verifying the flight information page
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
})
test("Search flight information Paris to Rome to get a listing of available airlines", async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    await searchFlightInformation.select_departure_paris()
    await searchFlightInformation.select_destination_rome()
    await searchFlightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
})
test("Search flight information from Paris to London to get a listing of available airlines", async({page})=> {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    await searchFlightInformation.select_departure_paris()
    await searchFlightInformation.select_destination_london()
    await searchFlightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
})
test.afterEach(async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    await searchFlightInformation.close()
})

