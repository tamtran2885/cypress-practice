/// <reference types="cypress" />

describe("Check Credential", () => {
  it("Login with invalid credentials", () => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/"); // visit URL

    // url - return the current url
    // validate the url
    cy.url().should("include", "rahulshettyacademy");

    // validate and enter value to the username input
    cy.get("input[name='username']")
      .should("be.visible")
      .should("be.enabled")
      .type("rahulshettyacademy");

    // validate and enter value to the password input
    cy.get("input[name='password']")
      .should("be.visible")
      .should("be.enabled")
      .type("learn");

    // validate and click on "Sign In" btn
    cy.get("#signInBtn").should("be.visible").should("be.enabled").click();

    // validate the page - use "should" method
    cy.title().should("eq", "LoginPage Practise | Rahul Shetty Academy");
  });

  it("Login with valid credentials", () => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/"); // visit URL

    // url - return the current url
    // validate the url
    cy.url().should("include", "rahulshettyacademy");

    // validate and enter value to the username input
    cy.get("input[name='username']")
      .should("be.visible")
      .should("be.enabled")
      .type("rahulshettyacademy");

    // validate and enter value to the password input
    cy.get("input[name='password']")
      .should("be.visible")
      .should("be.enabled")
      .type("learning");

    // validate and click on "Sign In" btn
    cy.get("#signInBtn").should("be.visible").should("be.enabled").click();

    // validate the new page - use "should" method
    cy.title().should("eq", "ProtoCommerce");
  });
});
