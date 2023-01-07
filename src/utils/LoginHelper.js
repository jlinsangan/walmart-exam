require('dotenv').config()

class LoginHelper {
  constructor(page) {
    this.page = page
    this.emailAddressField = page.locator('#ld_ui_textfield_27772')
    this.continueButton = page.locator('[type="Continue"]')

    // Existing Account Login requirements
    this.passwordField = page.locator('#react-aria-1')
    this.signInButton = page.locator('text="Sign In"')

    // Create Account fields
    this.firstnameField = page.locator('#ld_ui_textfield_27700')
    this.lastnameField = page.locator('#ld_ui_textfield_27701')
    this.newPasswordField = page.locator('#ld_ui_textfield_27703')

    this.checkBoxKeepMeSignedIn = page.locator('#ld_checkbox_4416')
    this.checkboxSubscribe = page.locator('ld_checkbox_4417')
    this.createAccountButton = page.locator('text="Create Account"')

    this.headerText = page.locator('.f3')
  }

  async enterEmail(email) {
    await this.emailAddressField.fill(email)
    await this.continueButton.click()
  }

  async signIn(password) {
    await this.passwordField.fill(password)
    await this.signInButton.click()
  }
  async createAccount({ firstname, lastname }) {
    await this.firstnameField.fill(firstname)
    await this.lastnameField.fill(lastname)
    await this.newPasswordField.fill(process.env.PASSWORD)
    await this.createAccountButton.click()
  }

  async getHeaderText() {
    const text = await this.headerText.innerText()
    return text
  }
}

module.exports = { LoginHelper }
