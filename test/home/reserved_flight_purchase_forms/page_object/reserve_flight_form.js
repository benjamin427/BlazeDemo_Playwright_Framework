exports.blazedemo_reserve_flight_purchase = class BlazeDemo_FlightPurchase {
    constructor(page){
        this.page = page
        this.name = page.locator('#inputName')
        this.address = page.locator('#address')
        this.city = page.locator('#city')
        this.state = page.locator('#state')
        this.zip_code = page.locator('#zipCode')
        this.card_type_visa = page.locator('#cardType')
        this.card_type_diners_club = page.locator('#cardType')
        this.card_type_american_express = page.locator('#cardType')
        this.credit_card_number = page.locator('#creditCardNumber')
        this.month = page.locator("#creditCardMonth")
        this.year = page.locator("#creditCardYear")
        this.name_on_card = page.locator('#nameOnCard')
        this.checkboxRemember = page.locator("#rememberMe")
        this.submitButtonPurchaseFlight = page.getByRole('button', {name: "Purchase Flight"})
    }
    async gotoWebsiteSource(){
        await this.page.goto("https://www.blazedemo.com/purchase.php")
    }
    async test_reserved_flight_form(name, address, city, state, zip_code, creditCardNumber, month, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zip_code, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_name(address, city, state, zipCode, creditCardNumber, month, year, nameOnCard){
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_address(name, city, state, zipCode, creditCardNumber, month, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_city(name, address, state, zipCode, creditCardNumber, month, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_state(name, address, city, zipCode, creditCardNumber, month, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_zip_code(name, address, city, state, creditCardNumber, month, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_credit_card_number(name, address, city, state, zipCode, month, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_month(name, address, city, state, zipCode, creditCardNumber, year, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_year(name, address, city, state, zipCode, creditCardNumber, month, nameOnCard){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.name_on_card.fill(nameOnCard, {timeout: 25000})
    }
    async negative_test_reserved_flight_form_blank_name_on_card(name, address, city, state, zipCode, creditCardNumber, month, year){
        await this.name.fill(name, {timeout: 25000})
        await this.address.fill(address, {timeout: 25000})
        await this.city.fill(city, {timeout: 25000})
        await this.state.fill(state, {timeout: 25000})
        await this.zip_code.fill(zipCode, {timeout: 25000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 25000})
        await this.month.fill(month, {timeout: 25000})
        await this.year.fill(year, {timeout: 25000})
    }
    async select_card_visa(){
        await this.card_type_visa.selectOption('Visa', {timeout: 15000})
    }
    async select_card_diners_club(){
        await this.card_type_diners_club.selectOption("Diner's Club", {timeout: 15000})
    }
    async select_card_american_express(){
        await this.card_type_american_express.selectOption("American Express", {timeout: 15000})
    }
    async checkbox(){
        await this.checkboxRemember.setChecked(true)
    }
    async submitButton(){
        await this.submitButtonPurchaseFlight.click({timeout: 15000})
    }
    async close(){
         await this.page.close()
     }

    
}