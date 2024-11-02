# Magento SoftwareTestingBoard Portal Testing with Cypress

Automation Tool: 
1. Cypress

Functionalities Tested: 
1.Create an Account      
2. LogIn


- [What is Cypress?](#what-is-cypress)
  - [Page Object Model Classes](#page-object-model-classes)
  - [Cucumber](#cucumber)

## What is Cypress?

[Cypress](https://docs.cypress.io/guides/overview/why-cypress) is an open source front end testing tool capable of testing anything that runs in a browser. It addresses many of the pain points developers and QA engineers face when developing modern web-based applications e.g. synchronization issues, test flakiness/inconsistencies due to element visibility etc. Cypress is built on Node.js and comes packaged as an npm module. As it is based on Node.js, the tests are written in JavaScript using the library of Cypress commands to interact with the application under test. It also bundles in JavaScript libraries such as jQuery (for easier DOM tree traversal/manipulation and event handling) plus mocha and chai assertion libraries.


### Page Object Model Classes

The page object classes are stored in the [cypress/e2e/pages](e2e/pages) directory. Generally speaking there is one page object for each page that has tests (or is accessed during the tests). However, despite the name the page objects are not just limited to actual pages - there are "page" objects for various components that may be shared between pages. For example, the top nav is common to all pages so is split out into a separate class for methods related to that component.

Element selectors are declared as constants in each page object module to improve maintainability of the test framework, following the DRY principle. Many Cypress test examples online repeat element selectors across multiple tests. If we were writing application code and were using the same value multiple times we would declare it as a constant and use that constant in our code - why should test code be any different? This way, should the selector for a given page element change, we only need change it one place and the rest of the code can remain unchanged.

---

### Cucumber

Cucumber tests are written in feature files - the Laser features are stored in `cypress/e2e/features`. Within that folder are various sub-folders, one per functional area tested, containing the feature files for that aspect of Laser.



