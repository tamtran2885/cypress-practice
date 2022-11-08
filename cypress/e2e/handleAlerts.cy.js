describe("Handle Alerts", () => {
  it("Alert Verification", () => {
    // this is the alert from Window
    cy.visit("https://testautomationpractice.blogspot.com/");

    // cy.get("input[value='Sign in']").click();

    // after that will open an alert window
    // drive on an event on window:alert - this window only have "accept" option
    // if have other option, use window:confirm
    // capture and validate the message on alert window

    // cy.on("window:alert", (str) => {
    //   expect(str).to.equal("Please enter a valid user name");
    // });

    cy.get("button").contains("Click Me").click();

    // if the alert window is a confirmation alert
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Press a button!");
    });

    // For window alert, CYpress will automatically accept it by default
    // So we only can capture the message
  });
});
