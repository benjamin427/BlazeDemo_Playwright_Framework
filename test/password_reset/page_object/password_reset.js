exports.blazedemo_rest_password = class BlazeDemo_PasswordReset {
    constructor(page){
        this.page = page
        this.emailAddress = page.getByRole('textbox', "E-Mail Address")
        this.submitButton = page.getByRole("button", "Send Password Reset Link")
    }

    async visitWebsite(){
        await this.page.goto("https://www.blazedemo.com/password/reset")
    }

    async test_password_reset_form(email_address){
        await this.emailAddress.fill(email_address, {timeout: 7000})
        await this.submitButton.click({timeout: 7000})
    }
    async negative_test_password_reset_form(){
        await this.submitButton.click({timeout: 7000})
    }
    async close(){
        await this.page.close({timeout: 7000})
    }
}