const { POManager } = require('../pageObjects/POManager')
const { LoginHelper } = require('../utils/LoginHelper')
const { test, expect } = require('@playwright/test')

require('dotenv').config()

let poManager
let homePage
let cartPage
let responsiveHeader
let resultsPage
let signInWidget
let loginHelper
let accountNav
let accountWallet

const accoutDetails = [
  {
    firstname: 'jay',
    lastname: 'linsangan',
  },
  {
    firstname: 'test',
    lastname: 'user',
  },
]

test.describe.serial('WALMART EXAM AUTOMATION', () => {
  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page)
    homePage = poManager.getHomePage()
    cartPage = poManager.getCartPage()
    responsiveHeader = poManager.getResponsiveHeader()
    resultsPage = poManager.getResultsPage()
    signInWidget = poManager.getSignInWidget()
    accountNav = poManager.getAccountNavigationPage()
    accountWallet = poManager.getAccountWalletPage()
    loginHelper = new LoginHelper(page)
  })

  test('Main exam requirement', async ({ page }) => {
    await page.goto(process.env.URL)
    await expect(page).toHaveURL('https://www.walmart.com/')
    await homePage.itemSearch('paper')

    // await page.getByRole('button', { name: 'Try a different method' }).click()
    // await page
    //   .frameLocator(
    //     'internal:role=region[name="Human challenge"i] >> internal:attr=[title="reCAPTCHA"i]'
    //   )
    //   .getByRole('checkbox', { name: "I'm not a robot" })
    //   .click()
    await resultsPage.selectFirstItem()
    await responsiveHeader.clickCartIcon()
    await expect(await cartPage.itemCount).toEqual('1')
    await cartPage.clickCheckOut()
    await signInWidget.enterEmail()
    await expect(await signInWidget.passField()).toBeVisible()
  })

  test('New Account - No Wallet Setted Up Validation', async ({ page }) => {
    await page.goto(process.env.URL)
    await responsiveHeader.signIn()
    await loginHelper.enterEmail(process.env.REGISTERED_EMAIL)
    const headerText = await loginHelper.getHeaderText()
    if (headerText.toLowerCase().includes('welcome')) {
      await loginHelper.signIn(proces.env.PASSWORD)
    } else {
      await loginHelper.createAccount(accoutDetails[0])
    }
    await responsiveHeader.goToAccount()
    await accountNav.pageNavigation('Wallet')
    const pmHeader = await accountWallet.getPaymentMethodHeaderText()
    await expect(pmHeader).toContain('Add a payment method')
  })

  test('Existing Account - No Wallet Setted Up Validation', async ({ page }) => {
    await page.goto(process.env.URL)
    await responsiveHeader.signIn()
    await loginHelper.enterEmail(process.env.NOTREGISTERED_EMAIL)
    const headerText = await loginHelper.getHeaderText()
    if (headerText.toLowerCase().includes('create')) {
      await loginHelper.signIn(proces.env.PASSWORD)
    } else {
      await loginHelper.createAccount(accoutDetails[0])
    }
    await responsiveHeader.goToAccount()
    await accountNav.pageNavigation('Wallet')
    const pmHeader = await accountWallet.getPaymentMethodHeaderText()
    await expect(pmHeader).toContain('Add a payment method')
  })

  test('Search item and Select addres', async ({ page }) => {
    await page.goto(process.env.URL)
    await expect(page).toHaveURL('https://www.walmart.com/')
    await homePage.itemSearch('paper')
    await resultsPage.selectFirstItem()
    await page.locator('text="How do you want your items?"').first().click()
    await page.locator('#intent-id1').click()
    await page.locator('[data-automation-id="fulfillment-address"]').click()
    await page.locator('[data-automation-id="store-zip-code"]').fill('95122')
    await page.locator('.pt3.pb0.pl1').first().click()
    await page.locator('[data-automation-id="save-label"]').click()
    await homePage.itemSearch('paper')
  })
})
