exports.blazedemo_login = class BlazerDemo_Login {
    constructor(page){
        this.page=page
        this.emailAddress=page.getByRole('textbox', {name: 'E-Mail Address'})
        this.password=page.getByRole('textbox', {name: 'Password'})
        this.submitButton=page.getByRole('button', {name: 'Login'})
    }
    async visitWebsiteLogin(){
        await this.page.goto('https://www.blazedemo.com/login')
    }
    async test_login(email_address, password){
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.submitButton.click()
    }
    async negative_test_blank_email_login(password){
        await this.password.fill(password)
        await this.submitButton.click()
    }
    async negative_test_blank_password_login(email_address){
        await this.emailAddress.fill(email_address)
        await this.submitButton.click()
    }
    async negative_test_blank_login(){
        await this.submitButton.click()
    }
    async close(){
        await this.page.close()
    }
}