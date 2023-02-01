describe('Visuals Regression Testing', () => {
  it('should compare screenshot of the entire page', () => {
    cy.visit('www.google.com')
    cy.compareSnapshot('home-page', 0.2)
  })
})