exports.blazedemo_register = class BlazeDemo_Register{
    constructor(page){
        this.page = page
        this.name = page.getByRole('textbox', {name: "Name"})
        this.company = page.getByRole('textbox', {name: "Company"})
        this.emailAddress = page.getByRole('textbox', {name: "E-Mail Address"})
        this.password = page.locator("#password")
        this.confirmPassword = page.getByRole('textbox', {name: "Confirm Password"})
        this.submitButton = page.getByRole('button', {name: "Register"})
    }
    async visitWebsite(){
        await this.page.goto("https://www.blazedemo.com/register")
    }
    async test_register_form(name, company, email_address, password, password_confirm) {
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_name(company, email_address, password, password_confirm){
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_company(name, email_address, password, password_confirm){
        await this.name.fill(name)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_email(name, company, password, password_confirm){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_password(name, company, email_address, password_confirm){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_passwordConfirm(name, company, email_address, password){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.submitButton.click()
    }
    async negative_test_register_blank(){
        await this.submitButton.click()
    }
    async close(){
        await this.page.close()
    }
}