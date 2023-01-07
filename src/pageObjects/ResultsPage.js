class ResultsPage {
  constructor(page) {
    this.page = page
    this.addButton = page.locator('[data-automation-id="add-to-cart"]')
    this.optionButton = page.locator('')
  }

  async selectFirstItem() {
    await this.addButton.first().click()
  }
}

module.exports = { ResultsPage }
