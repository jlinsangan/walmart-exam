class AccountWalletPage {
  constructor(page) {
    this.page = page
    this.pageHeader = page.locator('.mb4 .ld-Wallet')
    this.paymentMethodHeader = page.locator('h3[class$="f2 ma0"]')
  }

  async getPaymentMethodHeaderText() {
    const text = await this.paymentMethodHeader.innerText()
    return text
  }
}

module.exports = { AccountWalletPage }
