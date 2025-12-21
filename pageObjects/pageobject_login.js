const {expect} = require('@playwright/test')

exports.blazedemo_login = class BlazeDemo_Login {
    constructor(page){
        this.page = page
        this.emailAddress = page.getByRole("textbox", {name: "E-Mail Address"})
        this.password = page.getByRole("textbox", {name: "Password"})
        this.submitButton = page.getByRole("button", {name: "Login"})
    }

    async visitWebsite(){
        await this.page.goto("https://blazedemo.com/login")

    }
    async login(email_address, password){
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.submitButton.click()
    
    }
    async close(){
        await this.page.close()
    }
}
