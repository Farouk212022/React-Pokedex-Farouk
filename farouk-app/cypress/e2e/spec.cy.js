describe('template spec', () => {
  it('Entra a la página y hace una búsqueda', () => {
    cy.visit('http://localhost:3000')
    cy.wait(10000)
    cy.get('input[placeholder="Buscar en este sitio web"]') // Ajusta el selector según tu barra de búsqueda
    .type('pikachu');
    cy.wait(1000)
    cy.get ('#titulo>h1').should('contain', 'pikachu');
  })
})