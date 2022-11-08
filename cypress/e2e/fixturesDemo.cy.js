/// <reference types="cypress" />

describe("Fixtures Demo", function () {
  // load data from fixtures
  before(function () {
    // load data from adminCredential.json and wrongCredentials
    cy.fixture("adminCredential").then(function (data) {
      this.adminCredential = data;
    });

    // get url and verify page title
    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.title().should("eq", "Your store. Login");
  });

  it("Login with valid credentials", function () {
    // Trigger LogIn action
    cy.get("#Email").clear().type(this.adminCredential.email);
    cy.get("#Password").clear().type(this.adminCredential.password);
    cy.get("button").contains("Log in").click();

    // Verify new url title after login successfully
    cy.title().should("eq", "Dashboard / nopCommerce administration");
  });
});
