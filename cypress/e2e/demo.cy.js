/// <reference types="cypress" />

describe("Locating elements", () => {
  it("Verify types of locators", () => {
    cy.visit("https://demo.nopcommerce.com/"); // get the url

    // get - get element based on locator
    // type - set value for search input
    cy.get("#small-searchterms").type("Apple MacBook Pro 13");

    // click on Search button
    cy.get("[type='submit']").click();

    // click on "Add to Cart" button
    cy.get(".product-box-add-to-cart-button[type='button']").click();

    // get quantity element
    // clear the existing value
    // type new value
    cy.get("#product_enteredQuantity_4").clear().type("2");

    // click on "add to cart" button again after providing the quantity
    cy.get("#add-to-cart-button-4").click();

    // click on "Shopping Cart" link
    cy.get("span[class='cart-label']").click();

    // pause some seconds
    // cy.wait(3000);

    // validate the unit price
    cy.get(".product-unit-price").contains("$1,800.00");
  });
});
