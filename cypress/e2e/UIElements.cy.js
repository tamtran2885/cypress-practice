describe("UI Elements", () => {
  before(() => {
    // get url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // check url's title
    cy.title().should("eq", "Practice Page");
  });

  it("Radio Button Identification", () => {
    // Radio button verification
    // check their states (visible, checked)
    cy.get("input[value='radio1']")
      .should("be.visible")
      .should("not.be.checked")
      .click();

    cy.get("input[value='radio2']")
      .should("be.visible")
      .should("not.be.checked");

    cy.get("input[value='radio3']")
      .should("be.visible")
      .should("not.be.checked");
  });

  it("Checkbox Verification", () => {
    // locate the element
    // check the ele
    // verify the ele if checked, and its value
    // Can use Negative validation and Positive Validation
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1")
      .uncheck()
      .should("not.be.checked");

    cy.get("#checkBoxOption2")
      .check()
      .should("be.checked")
      .and("have.value", "option2")
      .uncheck()
      .should("not.be.checked");

    cy.get("#checkBoxOption3")
      .check()
      .should("be.checked")
      .and("have.value", "option3")
      .uncheck()
      .should("not.be.checked");

    // Check many options at the same times
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
  });

  it("Dropdown & select 1 option Verification", () => {
    // get the id of "select" list
    // select the option
    // verify the value of selected option
    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");
  });

  xit("Dropdown and select multiple options Verification", () => {
    // get url
    cy.visit("https://demo.automationtesting.in/Register.html");

    // get the Language element
    cy.get("#msdd").click();

    // get the options inside
    cy.get(".ui-corner-all").contains("Bulgarian").click();
    cy.get(".ui-corner-all").contains("Croatian").click();
  });
});
