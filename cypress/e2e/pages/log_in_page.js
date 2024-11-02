const LOG_IN_BUTTON = '[data-testid=log-in-button]'
const CREATE_NEW_ACCOUNT_BUTTON = '[data-testid=create-new-account-button]'
const HOMEPAGE = '[data-testid=HomePage]'

class LoginPage {
  static LoginURL = 'https://magento.softwaretestingboard.com/customer/account/login/';
  static CreateURL = 'https://magento.softwaretestingboard.com/customer/account/create/';

  static PAGE_NAME = 'Log In'

  // ***** INTERACTION METHODS *****
  //To open the Login Page
  static openLoginPage() {
    cy.visit(this.LoginURL)
  }

  //To open the Create New Account Page
  static openCreateNewAccountPage(){
    cy.visit(this.CreateURL)
  }

  //To enter Input text
  static enterTextInInput(input, text, blur = true) {
    super.enterTextInInput(LOGIN_FORM, input, text, blur)
  }

  //Clicking the Login Button
  static clickLoginButton() {
   cy.get(LOG_IN_BUTTON).click({force:true})
  }

  //Clicking the Create An Account Button
  static clickCreateNewAccountButton(){
    cy.get(CREATE_NEW_ACCOUNT_BUTTON).click({force:true)}
}

 //To Open the HomePage
  static assertPageOpen(){
    cy.get(HOMEPAGE).contain('HomePage')
}

export default LoginPage
