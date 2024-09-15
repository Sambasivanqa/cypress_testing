const cypress=require('cypress');
describe('CSS Locators',()=>{
    it('css locators',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('#search_query_top').type('T Shirts')
        cy.get("[name='submit_search']").click()
        cy.get('.lighter').contains('T Shirts')

    })
})