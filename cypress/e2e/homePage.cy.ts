describe('Home page', () => {
  beforeEach(() => cy.visit('/'));

  it('shold include search field and button, cards and pagination elemetn ', () => {
    cy.get('input[type="text"]').should('be.empty');
    cy.get('button[type="submit"]').contains(/search/i);
    cy.get('article').should('have.length', 20);
    cy.get('[data-testId="pagination"]');
  });

  it('should display value typed in search field', () => {
    const TEST = 'test prompt';
    cy.get('input[type="text"]').as('input');
    cy.get('@input').type(TEST);
    cy.get('@input').should('have.value', TEST);
  });

  it('should display correct cards on search query', () => {
    cy.get('input[type="text"]').as('input');
    cy.get('@input').type('rick');
    cy.get('button[type="submit"]').click();
    cy.get('article').contains(/rick/i);
  });

  it('should display message when no cards found', () => {
    cy.get('input[type="text"]').as('input');
    cy.get('@input').type('wrong-query');
    cy.get('button[type="submit"]').click();
    cy.get('p').contains(/not exist/i);
  });

  it('should display prev pagination button disabled', () => {
    cy.contains(/prev/i).should('be.disabled');
  });

  it('should display properly page number', () => {
    cy.get('[data-testId="pagination"]').as('pagination');
    cy.get('@pagination').contains('1');
    cy.contains(/next/i).click();
    cy.get('@pagination').contains('2');
    cy.contains(/prev/i).click();
    cy.get('@pagination').contains('1');
    cy.contains(/next/i).click();
    cy.contains(/next/i).click();
    cy.get('@pagination').contains('3');
  });
});
