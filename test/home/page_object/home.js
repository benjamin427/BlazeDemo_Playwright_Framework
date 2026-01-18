exports.blazedemo_home = class BlazeDemo_Home {
    constructor(page){
        this.page = page
        this.departure_paris = page.locator('[name=fromPort]')
        this.departure_philadelphia = page.locator('[name=fromPort]')
        this.departure_boston = page.locator('[name=fromPort]')
        this.departure_portland = page.locator('[name=fromPort]')
        this.departure_san_diego = page.locator('[name=fromPort]')
        this.departure_mexico_city = page.locator('[name=fromPort]')
        this.departure_sao_paolo = page.locator('[name=fromPort]')
        this.destination_buenos_aires = page.locator('[name=toPort]')
        this.destination_rome = page.locator('[name=toPort]')
        this.destination_london = page.locator('[name=toPort]')
        this.destination_berlin = page.locator('[name=toPort]')
        this.destination_new_york = page.locator('[name=toPort]')
        this.destination_dublin = page.locator('[name=toPort]')
        this.destination_cairo = page.locator('[name=toPort]')
        this.findFlights = page.getByRole('button', {name: "Find Flights"})
    }
    async gotoWebsite(){
        await this.page.goto("https://www.blazedemo.com");
    }
    async select_departure_paris(){
        await this.departure_paris.selectOption("Paris", {timeout: 8000})
    }
    async select_departure_philadelphia(){
        await this.departure_philadelphia.selectOption("Philadelphia", {timeout: 8000})
    }
    async select_departure_boston(){
        await this.departure_boston.selectOption("Boston", {timeout: 8000})
    }
    async select_departure_portland(){
        await this.departure_portland.selectOption("Portland", {timeout: 8000})
    }
    async select_departure_san_diego(){
        await this.departure_san_diego.selectOption("San Diego", {timeout: 8000})
    }
    async select_departure_mexico_city(){
        await this.departure_mexico_city.selectOption("Mexico City", {timeout: 8000})
    }
    async select_departure_sao_paolo(){
        await this.departure_sao_paolo.selectOption("Sao Paolo", {timeout: 8000})
    }
    async select_destination_buenos_aires(){
        await this.destination_buenos_aires.selectOption("Buenos Aires", {timeout: 8000});
    }
    async select_destination_rome(){
        await this.destination_rome.selectOption("Rome", {timeout: 8000})
    }
    async select_destination_london(){
        await this.destination_london.selectOption("London", {timeout: 8000})
    }
    async select_destination_berlin(){
        await this.destination_berlin.selectOption("Berlin", {timeout: 8000})
    }
    async select_destination_new_york(){
        await this.destination_new_york.selectOption("New York", {timeout: 8000})
    }
    async select_destination_dublin(){
        await this.destination_dublin.selectOption("Dublin", {timeout: 8000})
    }
    async select_destination_cairo(){
        await this.destination_cairo.selectOption("Cairo", {timeout: 8000})
    }
    async close(){
        await this.page.close()
    }
    async submitButton_findFlights(){
        await this.findFlights.click({timeout: 8000});
    }
}