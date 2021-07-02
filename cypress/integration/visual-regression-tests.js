it('should display the home page correctly', () => {
  cy.visit('/');
  cy.compareSnapshot('home', {
    capture: 'fullPage',
    errorThreshold: 0
  });
});