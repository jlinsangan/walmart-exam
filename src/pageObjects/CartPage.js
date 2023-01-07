class CartPage {
  constructor(page) {
    this.page = page
    this.checkoutButton = page.locator('[data-automation-id="checkout"]')
    this.subTotalCount = page.locator('#totalSummary .ml1')
  }

  async itemCount() {
    const rawText = await this.subTotalCount.innerText()
    const count = rawText.replace('(', '')[0]
    return count
  }

  async clickCheckOut() {
    await this.checkoutButton.click()
  }
}

module.exports = { CartPage }
