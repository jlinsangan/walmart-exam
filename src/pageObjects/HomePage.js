class HomePage {
  constructor(page) {
    this.page = page
    this.searchField = page.locator('.items-center .b--none.f5')
    this.searchIcon = page.locator('.items-center .br-100.bg-gold')
  }

  async itemSearch(itemName) {
    await this.searchField.fill(itemName)
    await this.searchIcon.click()
  }
}

module.exports = { HomePage }
