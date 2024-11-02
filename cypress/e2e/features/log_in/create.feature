@Register
Feature: Create New Customer Account

  Background: Set up
    Given I am not logged in
    And I am on the "Create New Customer Account" page

  Scenario Outline: Create New Customer Account
    Given I enter "<First Name>" and "<Last Name>" in the Name input field
    And I enter "<email address>" in the email address input field on the register form
    And I enter the password for that email address in the password input field
    And I enter the Confirm Password for that email address in the password input field
    Then I click the "Create An Account" button on the Register Form
    And I am taken to the "Home" page
    Examples:
      | First Name | Last Name | email address |
      | SK         | SK        | a@gmail.com   |
