/// <reference type="cypress">

describe("Table Test", () => {
  before(() => {
    // get url and verify the title
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.title().should("eq", "Automation Testing Practice");
  });

  it("Check Value presence anywhere in the table", () => {
    // get table
    cy.get("table[name='BookTable']")
      .contains("td", "Learn Selenium")
      .should("be.visible");
  });

  it("Check Value presence in specific row & column", () => {
    cy.get(
      "table[name='BookTable'] > tbody > tr:nth-child(3) > td:nth-child(3)"
    )
      .contains("Java")
      .should("be.visible");

    cy.get(
      "table[name='BookTable'] > tbody > tr:nth-child(4) > td:nth-child(3)"
    )
      .contains("Javascript")
      .should("be.visible");
  });

  it("Check Value presence based on condition by iterating rows", () => {
    cy.get("table[name='BookTable'] > tbody > tr > td:nth-child(2)").each(
      ($e, index, $list) => {
        const text = $e.text();
        if (text.includes("Amod")) {
          cy.get("table[name='BookTable'] > tbody > tr > td:nth-child(1)")
            .eq(index)
            .then((bName) => {
              const bookName = bName.text();
              expect(bookName).to.equal("Master In Java");
            });
        }
      }
    );
  });
});
