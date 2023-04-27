describe('Routing', () => {
  it('should display home page on base url "/" ', () => {
    cy.visit('/').contains('Search');
  });
  it('should display form page on url "/forms" ', () => {
    cy.visit('/').contains('Search');
    cy.contains(/forms/i).click();
    cy.url().should('include', '/forms');
    cy.get('form');
    cy.get('legend').should('have.text', 'Please, enter your personal data');
  });
  it('should display about us page on url "/about" ', () => {
    cy.visit('/').contains('Search');
    cy.contains(/about/i).click();
    cy.url().should('include', '/about');
    cy.get('h1').should('have.text', 'About us');
  });
  it('should display 404 page on wrong url ', () => {
    cy.visit('/wrong').contains(/not found/i);
  });
});
