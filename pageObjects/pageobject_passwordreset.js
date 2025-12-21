// Page object for the user to reset password
exports.blazedemo_passwordreset = class BlazeDemo_Password_Reset{
    constructor(page){
        this.page = page
        this.emailAddress = page.getByRole("textbox", {name: "E-Mail Address"})
        this.submitButton = page.getByRole("button", {name: "Send Password Reset Link"})
    }
    async vistiWebsite(){
        await this.page.goto("https://blazedemo.com/password/reset")
    }
    async resetPassword(email_address){
        await this.emailAddress.fill(email_address)
        await this.submitButton.click()
    }
    async close(){
        await this.page.close()
    }
}

