describe('template spec', () => {

  before(function () {
    cy.visit('http://localhost:3000');
  });

  it('should open constructor page by default', function () {
    cy.contains('Соберите');
  });
})