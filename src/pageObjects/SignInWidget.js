class SignInWidget {
  constructor(page) {
    this.page = page
    this.emailField = page.frameLocator('#auth-frame').locator('#email-split-screen')
    this.passwordField = page.locator('#auth-frame').locator('#sign-in-password-no-otp')
    this.signInButton = page.locator('#auth-frame').locator('[data-automation-id="sign-in-pwd"]')
    this.continueButton = page
      .frameLocator('#auth-frame')
      .locator('[data-automation-id="signin-continue-submit-btn"]')
  }

  async clickContinue() {
    await this.continueButton.click()
  }

  async clickSignIn() {
    await this.signInButton.click()
  }

  async passField() {
    return this.passwordField
  }

  async enterPassword(password) {
    await this.passwordField.fill(password)
    await this.clickSignIn()
  }

  async enterEmail(email) {
    await this.emailField.fill(email)
    await this.clickContinue()
  }
}

module.exports = { SignInWidget }
