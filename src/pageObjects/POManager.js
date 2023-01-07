const { HomePage } = require('../pageObjects/HomePage')
const { CartPage } = require('../pageObjects/CartPage')
const { ResponsiveHeader } = require('../pageObjects/ResponsiveHeader')
const { ResultsPage } = require('../pageObjects/ResultsPage')
const { SignInWidget } = require('../pageObjects/SignInWidget')
const { AccountNavigationPage } = require('../pageObjects/AccountPage/AccountNavigationPage')
const { AccountWalletPage } = require('../pageObjects/AccountPage/AccountWalletPage')

class POManager {
  constructor(page) {
    this.page = page
    this.homePage = new HomePage(this.page)
    this.cartPage = new CartPage(this.page)
    this.responsiveHeader = new ResponsiveHeader(this.page)
    this.resultsPage = new ResultsPage(this.page)
    this.signInWidget = new SignInWidget(this.page)
    this.accountNavigationPage = new AccountNavigationPage(this.page)
    this.accountWalletPage = new AccountWalletPage(this.page)
  }

  getHomePage() {
    return this.homePage
  }

  getCartPage() {
    return this.cartPage
  }

  getResponsiveHeader() {
    return this.responsiveHeader
  }

  getResultsPage() {
    return this.resultsPage
  }

  getSignInWidget() {
    return this.signInWidget
  }

  getAccountNavigationPage() {
    return this.accountNavigationPage
  }

  getAccountWalletPage() {
    return this.AccountWalletPage
  }
}

module.exports = { POManager }
