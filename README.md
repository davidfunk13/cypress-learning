# cypress-learning
learning cypress

# Cypress Notes


# Intro

— Easy for beginners 

— Does not use Selenium to control browser, has own methods

— works with any frontend framework

— no boilerplate or config 

— has visual interface

— automatic async/waiting

— realtime reloads on change

—works on network layer

Limitations: 

— only javascript

— limited cross browser testing ability.

- no safari

— one browser, one tab at a time.

FIXTURES

Mock data in JSON format

INTEGRATIONS

All tests stored in here

SUPPORT

Runs files before every spec file to eliminate need for repeat imports

SPEC FILES

Every spec file should begin with “describe” as a way to group tests in mocha

Do smaller describe blocks, not large ones. Under ten steps inside a describe block.

Recipe for error handling: https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/fundamentals__errors

CYPRESS LOGS:

So you can console.log information inside of a description.

cy.log()

FORMS AND INPUTS

cy.type for input fields by selector. Takes arguments for delay, etc.
