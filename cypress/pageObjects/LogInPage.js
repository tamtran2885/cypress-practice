class LogInPage {
  elements = {
    email: () => cy.get("#Email"),
    password: () => cy.get("#Password"),
    signInBtn: () => cy.get("button[type='submit']"),
  };

  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/login");
  }

  login(e, p) {
    this.elements.email().clear().type(e);
    this.elements.password().clear().type(p);
    this.elements.signInBtn().click();
  }
}

module.exports = new LogInPage();
