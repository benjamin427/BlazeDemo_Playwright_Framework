exports.blazedemo_reserve = class BlazeDemo_ReserveServices{
    constructor(page){
        this.page = page
        this.buttonChooseFlightVirginAmerica_43 = page.getByRole('table').getByRole('row').filter({hasText: '43'})
                                                   .filter({hasText: 'Virgin America'}).filter({hasText: '1:43 AM'})
                                                   .filter({hasText: '9:45 PM'}).filter({hasText: '$472.56'})
        this.buttonChooseFlightVirginAmerica_12 = page.getByRole('table').getByRole('row').filter({hasText: '12'})
                                                      .filter({hasText: 'Virgin America'}).filter({hasText: '11:23 AM'})
                                                      .filter({hasText: '1:45 PM'}).filter({hasText: '$765.32'})
        this.buttonChooseFlightUnitedAirlines_234 = page.getByRole('table').getByRole('row').filter({hasText: '234'})
                                                        .filter({hasText: 'United Airlines'}).filter({hasText: '7:34 AM'})
                                                        .filter({hasText: '10:45 PM'}).filter({hasText: '$432.98'})
        this.buttonChooseFlightAerLingus_9696 = page.getByRole('table').filter('row').filter({hasText: '9696'}).filter({hasText: 'Aer Lingus'})
                                                    .filter({hasText: '5:27 AM'}).filter({hasText: '$200.98'})
        this.buttonChooseFlightLufthansa_4346 = page.getByRole('table').getByRole('row').filter({hasText: '4346'}).filter({hasText: 'Lufthansa'})
                                                    .filter({hasText: '1:45 AM'}).filter({hasText: '8:34 PM'}).filter({hasText: '$233.98'})
    }
    async select_flight_43_virgin_america(){
        await this.buttonChooseFlightVirginAmerica_43.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async select_flight_12_virgin_america(){
        await this.buttonChooseFlightVirginAmerica_12.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async select_flight_234_united_airlines(){
        await this.buttonChooseFlightUnitedAirlines_234.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async select_flight_9696_aer_lingus(){
        await this.buttonChooseFlightAerLingus_9696.getByRole('button', {name: 'Choose This Fight'}).click()
    }
    async select_flight_4346_Lufthansa(){
        await this.buttonChooseFlightLufthansa_4346.getByRole('button', {name: 'Choose This Flight'}).click()
    }

}