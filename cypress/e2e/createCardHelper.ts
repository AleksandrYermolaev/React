export const createFormCard = (): void => {
  const cardData = {
    name: 'userName',
    surname: 'userSurname',
    date: '1993-01-22',
    family: 'single',
    gender: 'male',
    checkbox: 'email',
  };
  cy.get('input[type="text"]').as('textInput');
  cy.get('input[type="date"]').as('dateInput');
  cy.get('input[type="radio"]').as('radio');
  cy.get('input[type="file"]').as('file');
  cy.get('input[type="checkbox"]').as('checkbox');
  cy.get('@textInput').first().type(cardData.name);
  cy.get('@textInput').last().type(cardData.surname);
  cy.get('@dateInput').type(cardData.date);
  cy.get('select').select(cardData.family);
  cy.get('@radio').check(cardData.gender);
  cy.get('@file').selectFile({
    contents: Cypress.Buffer.from('file contents'),
    fileName: 'file.jpg',
    mimeType: 'image/jpg',
    lastModified: Date.now(),
  });
  cy.get('@checkbox').check(cardData.checkbox);
  cy.get('button[type="submit"]').click();
  cy.get('article').should('exist');
};
