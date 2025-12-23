// Page object of the registration form
exports.blazedemo_register = class BlazeDemo_Register {
    constructor(page){
        this.page = page
        this.name = page.getByRole("textbox", {name: "Name"})
        this.company = page.getByRole("textbox", {name: "Company"})
        this.emailAddress = page.getByRole("textbox", {name: "E-Mail Address"})
        this.password = page.getByRole("textbox", {name: "Password"}).first()
        this.passwordConfirm = page.getByRole("textbox", {name: "Confirm Password"})
        this.submitButton = page.getByRole("button", {name: "Register"})
    }
    async gotoWebsite(){
        await this.page.goto("https://blazedemo.com/register")
    }
    async positive_test_registration_form(name, company, email_address, password, pasword_confirm){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.passwordConfirm.fill(pasword_confirm)
        await this.submitButton.click()
    }
    async negative_test_registration_form_name(company, email_address, password, password_confirm){
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.passwordConfirm.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_registration_form_company(name, email_address, password, password_confirm){
        await this.name.fill(name)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.passwordConfirm.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_registration_form_email_address(name, company, password, password_confirm){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.password.fill(password)
        await this.passwordConfirm.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_registration_form_password(company, email_address, password_confirm){
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.passwordConfirm.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_registration_form_password_confirm(name, company, email_address, password){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.submitButton.click()
    }    
    async close(){
        await this.page.close()
    }
}


