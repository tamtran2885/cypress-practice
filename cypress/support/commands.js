// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Customize command
Cypress.Commands.add("login", (email, password) => {
  // get url and verify page title
  cy.visit("https://admin-demo.nopcommerce.com/login");
  cy.title().should("eq", "Your store. Login");

  // Trigger Login action
  cy.get("#Email").clear().type(email);
  cy.get("#Password").clear().type(password);
  cy.get("button").contains("Log in").click();
});
