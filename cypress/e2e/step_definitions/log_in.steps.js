import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../pages/log_in_page'

Given('I am on the "Log In" page', () => {
  LoginPage.openLoginPage()
})

Given('I am on the "Create New Customer Account" page', () => {
  LoginPage.openCreateNewAccountPage()
})

Given(
  /^I (?:have entered|enter) "(.*)" in the (email address|password) input field on the (?:login|register) form$/,
  (text, input) => {
    LoginPage.enterTextInInput(input, text)
  }
)

Given(/^I (?:have entered|enter) the (?:password|Confirm Password) for that email address in the password input field$/, () => {
  LoginPage.enterTextInInput('password', Cypress.env('PASSWORD'))
})

Given(/^I (?:have clicked|click) the "LOG IN" button on the login form$/, () => {
  LoginPage.clickLoginButton()
})

Given(/^I enter "(.*)" in the Name input field$/, ()  => {
  LoginPage.enterTextInInput(input,text)
})

Then(/^I (?:am taken to|remain on) the "Home" page$/, () => {
  LoginPage.assertPageOpen()
})

Then(/^I click the "Create An Account" button on the Register Form$/, () => {
  LoginPage.clickCreateNewAccountButton()
})