/// <reference types="cypress" />

import LogInPage from "../pageObjects/LogInPage";

describe("Page Object Model", () => {
  it("LogIn with POM", () => {
    LogInPage.visit();
    LogInPage.login("admin@yourstore.com", "admin");
    cy.title().should("be.equal", "Dashboard / nopCommerce administration");
  });
});
