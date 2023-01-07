class ResponsiveHeader {
  constructor(page) {
    this.page = page
    this.cartIcon = page.locator('.ld-Cart')
    this.cartBadge = page.locator('#cart-badge')
    this.totalCartAmount = page.locator('#cart-button-header .db')
    this.signInContainer = page.locator('[data-automation-id="headerSignIn"]')
    this.signInAndCreateAccountButton = page.locator('text="Sign in or create account"')
    this.accountContainer = page.locator('[link-identifier="Account"] >> nth=0')
    this.accountLink = page.locator('[link-identifier="Account"] >> nth=1')
  }

  async clickCartIcon() {
    await this.cartIcon.click()
  }

  async signIn() {
    await this.signInContainer.click()
    await this.signInAndCreateAccountButton.click()
  }

  async goToAccount() {
    await this.accountContainer.click()
    await this.accountLink.click()
  }
}

module.exports = { ResponsiveHeader }
