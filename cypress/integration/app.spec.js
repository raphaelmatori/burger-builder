it("should start", () => {
  cy.clock();
  cy.visit("http://localhost:3000");
  cy.tick(3000000);
});
