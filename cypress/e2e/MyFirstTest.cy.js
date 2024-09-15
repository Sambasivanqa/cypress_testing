describe('MyFirstTest Suite',()=>{
    it('Title Test - Positive',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
    })
    it('Title Test - Negative',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google1')
    })
})