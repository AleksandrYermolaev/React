import { createFormCard } from './createCardHelper';

describe('Form page', () => {
  beforeEach(() => cy.visit('/forms'));

  it('shold include form and no cards', () => {
    cy.get('form');
    cy.get('article').should('not.exist');
  });

  it('should display card when user write correct data', () => {
    createFormCard();
    cy.get('article').should('exist');
  });

  it('should not create card if user dont fill the form', () => {
    cy.get('button[type="submit"]').click();
    cy.contains(/field is required/i);
    cy.get('article').should('not.exist');
  });
});
