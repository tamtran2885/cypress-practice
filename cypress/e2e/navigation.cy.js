describe("Navigation Back and Forward", () => {
  it("passes", () => {
    // get url and verify the home page
    cy.visit("https://demo.nopcommerce.com/");
    cy.title().should("eq", "nopCommerce demo store");

    // navigate to register page and verify register page
    cy.get(".ico-register").contains("Register").click();
    cy.title().should("eq", "nopCommerce demo store. Register");

    // go back to home page
    cy.go("back");
    cy.title().should("eq", "nopCommerce demo store");

    // go forward to register page
    cy.go("forward");
    cy.title().should("eq", "nopCommerce demo store. Register");

    // go back to homepage
    cy.go(-1);
    cy.title().should("eq", "nopCommerce demo store");

    // go forward to register page
    cy.go(1);
    cy.title().should("eq", "nopCommerce demo store. Register");

    // reload page
    cy.reload();
  });
});
