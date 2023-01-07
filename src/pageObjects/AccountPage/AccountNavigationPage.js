class AccountNavigationPage {
  constructor(page) {
    this.page = page

    this.homePage = page.locator('text="My account"')
    this.purchaseHistory = page.locator('')
    this.wallet = page.locator('[link-identifier="wallet"]')
    this.walmartPlus = page.locator('')

    // Manage Account
    this.personalInfo = page.locator('')
    this.address = page.locator('')
    this.communicationsAndPrivary = page.locator('')
    this.givingImpact = page.locator('')

    // My Items
    this.reOrder = page.locator('')
    this.lists = page.locator('')
    this.registries = page.locator('')

    // Subscription & plans
    this.protectionPlans = page.locator('')

    // Other Accounts
    this.pharmacy = page.locator('')
    this.photo = page.locator('')
    this.eBooks = page.locator('')

    // Privacy
    this.privacyPolicy = page.locator('')
    this.yourPrivacyChoices = page.locator('')
    this.requestMyPersonalInformation = page.locator('')

    // Customer Service
    this.help = page.locator('')
    this.termsOfUse = page.locator('')

    this.logOut = page.locator('')
  }

  async pageNavigation(rawName) {
    const pageName = rawName.toLowerCase()
    switch (pageName) {
      case 'home page':
        await this.homePage.click()
        break
      case 'purchase history':
        await this.purchaseHistory.click()
        break
      case 'wallet':
        await this.wallet.click()
        break
      case 'walmart plus':
        await this.walmartPlus.click()
        break
      default:
        throw new Error('Input Error')
    }
  }
}

module.exports = { AccountNavigationPage }
