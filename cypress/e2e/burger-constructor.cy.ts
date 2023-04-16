import '@4tw/cypress-drag-drop'
Cypress.config("defaultCommandTimeout", 40000);

describe('template spec', () => {

  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });

  it('should open and then close modal', () => {
    cy.get('.buns > div').first().click()
    cy.contains('Детали ингредиента')
    cy.get('*[class^="IngredientDetails_macronutrients"] > div > div').eq(1).should('have.text', '420');
    cy.get('*[class^="Modal_close"]').click()
    cy.contains('Детали ингредиента').should('not.exist')


  })

  it('drag and drop ingredients and create order', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('*[class^="login_wrapper"] > div > div > div > input').eq(0).type('v.razinsky@yandex.ru')
    cy.get('*[class^="login_wrapper"] > div > div > div > input').eq(1).type('password')
    cy.get('button').click()
    cy.get('.buns > div').first().drag('.drag_target');
    cy.get('.sauces > div').first().drag('.drag_target');
    cy.get('.main > div').eq(1).drag('.drag_target');
    cy.get('.main > div').eq(2).drag('.drag_target');
    cy.get('.order_button').click()
    cy.contains('идентификатор заказа')
    cy.get('*[class^="Modal_close"]').click()
    cy.contains('идентификатор заказа').should('not.exist')
  });
})