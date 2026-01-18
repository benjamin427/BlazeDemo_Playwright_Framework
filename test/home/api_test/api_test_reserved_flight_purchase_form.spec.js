const {expect, test} = require('@playwright/test')

test("Create data to use as a resource to fill out the reserve flight purchase for Virgin America Airlines", async({request, page}) => {
    //Environment variables
    const placeholderUrl = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_URL_PLACEHOLDER
    const referenceName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceZipCode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIP_CODE
    var referenceCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDIT_CARD_NUMBER
    const referenceMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_MONTH
    const referenceYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_YEAR
    const referenceNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME_ON_CARD
    //Protecting sensitive information for credit card information
    referenceCreditCardNumber = "**********"
    const response = await request.post(placeholderUrl, {
        data: {
            name: referenceName,
            address: referenceAddress,
            city: referenceCity,
            state: referenceState,
            zip_code: referenceZipCode,
            credit_card_number: referenceCreditCardNumber,
            month: referenceMonth,
            year: referenceYear,
            name_on_card: referenceNameOnCard,
            id: 1
        }
    })
    await expect(response.status()).toBe(201)
    console.log(response.status())
    const responseBody = await response.json()
    const responseId = responseBody.id
    console.log("Response: ", JSON.stringify(responseBody))

    //Navigate to the website url with a query to enter the created data from the resource
    await page.goto("https://www.blazedemo.com/purchase.php?id={responseId}")

    //Entering the reserved flight information form 
    await page.fill("#inputName", 'Name', {timeout: 8000})
    await page.fill('#address', 'Address', {timeout: 8000})
    await page.fill('#city', 'City', {timeout: 8000})
    await page.fill('#state', 'State', {timeout: 8000})
    await page.fill('#zipCode', 'Zip Code', {timeout: 8000})
    await page.locator('select#cardType').selectOption('Visa')
    await page.fill('#creditCardNumber', 'Credit Card Number', {timeout: 8000})
    await page.fill('#creditCardMonth', 'Month', {timeout: 8000})
    await page.fill('#creditCardYear', 'Year', {timeout: 8000})
    await page.fill('#nameOnCard', 'Name on Card', {timeout: 8000})
    await page.click('input[type="submit"]', {timeout: 8000})
})
