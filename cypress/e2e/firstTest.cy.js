describe("My first test", () => {
  it("Verify title of page", () => {
    cy.visit("https://demo.nopcommerce.com");
    cy.title().should("eq", "nopCommerce demo store");
  });

  xit("Verify title of page - Negative", () => {
    cy.visit("https://demo.nopcommerce.com");
    cy.title().should("eq", "nopCommerce store");
  });
});
