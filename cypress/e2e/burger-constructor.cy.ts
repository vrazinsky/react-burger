import '@4tw/cypress-drag-drop'
Cypress.config("defaultCommandTimeout", 40000);

const BASE_URL = 'http://localhost:3000'

describe('template spec', () => {

  beforeEach(function () {
    cy.visit(BASE_URL);
  });

  it('should open and then close modal', () => {
    cy.get('.buns > div').first().click()
    cy.contains('Детали ингредиента')
    cy.contains('Краторная булка N-200i')
    cy.get('.calories').should('have.text', '420');
    cy.get('.proteins').should('have.text', '80');
    cy.get('.fat').should('have.text', '24');
    cy.get('.carbohydrates').should('have.text', '53');

    cy.get('*[class^="Modal_close"]').click()
    cy.contains('Детали ингредиента').should('not.exist')


  })

  it('drag and drop ingredients', () => {
    cy.visit(`${BASE_URL}/login`);
    cy.get('*[class^="login_wrapper"] > div > div > div > input').eq(0).type('v.razinsky@yandex.ru')
    cy.get('*[class^="login_wrapper"] > div > div > div > input').eq(1).type('password')
    cy.get('button').click()

    cy.get('.buns > div').first().drag('.drag_target');
    cy.get('.top_bun').should('be.visible')
    cy.get('.bottom_bun').should('be.visible')
    cy.get('.counter__num').eq(0).should('have.text', '1')

    cy.get('.sauces > div').first().drag('.drag_target');
    cy.get('.counter__num').eq(1).should('have.text', '1')
    cy.get('.drag_target > div').eq(0).contains('Соус Spicy-X')

    cy.get('.main > div').eq(0).drag('.drag_target');
    cy.get('.drag_target > div').eq(1).should('exist')
  });


  it('create order', () => {
    cy.get('.order_button').click()
    cy.contains('идентификатор заказа')
    cy.get('*[class^="Modal_close"]').click()
    cy.contains('идентификатор заказа').should('not.exist')
  })


})