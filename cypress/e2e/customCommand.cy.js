describe("Custom Command", () => {
  it("Login Test", () => {
    cy.login("admin@yourstore.com", "admin"); // valid data
    cy.title().should("be.equal", "Dashboard / nopCommerce administration");

    cy.login("admin@yourstore.com", "ad"); // valid data
    cy.title().should("not.be.equal", "Dashboard / nopCommerce administration");
    cy.title().should("be.equal", "Your store. Login");
  });

  it("Add customer", function () {
    cy.login("admin@yourstore.com", "admin");
    cy.log("Adding new customer...");
  });

  it("Edit customer", function () {
    cy.login("admin@yourstore.com", "admin");
    cy.log("Editing customer...");
  });
});
