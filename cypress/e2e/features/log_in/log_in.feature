@login
Feature: Log In

  Background: Set up
    Given I am not logged in
    And I am on the "Log In" page

  Scenario Outline: Log in with valid credentials 
    When I enter "<email address>" in the email address input field on the login form
    And I enter the password for that email address in the password input field
    And I click the "LOG IN" button on the login form
    Then I am taken to the "Home" page
    @smoke
    Examples:
      | email address    | 
      | a@gmail.com      |