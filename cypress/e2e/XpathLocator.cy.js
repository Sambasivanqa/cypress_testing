//const cypress=require('cypress')
describe('XpathLocator',()=>{
    it('xpathlocator',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get("a[title='Women']").click()
        cy.get("li.ajax_block_product").should('have.length',7)
        
    })
})