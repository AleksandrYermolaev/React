import { createFormCard } from './createCardHelper';

describe('Saving data between pages', () => {
  it('shold save search value, cards on home page and cards on forms page when user navigating from page to page', () => {
    cy.visit('/');

    cy.get('input[type="text"]').as('input');
    cy.get('@input').type('morty');
    cy.get('button[type="submit"]').click();
    cy.contains(/forms/i).click();

    createFormCard();
    cy.contains(/home/i).click();

    cy.get('@input').should('have.value', 'morty');
    cy.get('article').contains(/morty/i);
    cy.contains(/forms/i).click();

    cy.get('article').should('exist');
  });
});
