//Implicit Assertions --> 1. shoud 2. and keywords
//Cypress Built-in Assertions

describe('Assertions',()=>{
    it('implicit assertions testing',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //should and implicit assertions
        /*cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')*/
        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')*/
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        //Negative Aeertions
        .and('not.contain','greenhrm')
        //Title Aeertions
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
        //Logo exist or not
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        //or
        .and('exist')
        //Number of Links
        cy.get('a').should('have.length',5)
        //Provide a value into inputbox 
        cy.get("[name='username']").type('Admin')
        //Value Check
        cy.get("[name='username']").should('have.value','Admin')
     })

     it('explicit assertions testing',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
        let expName='first last'
        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actualName=x.text()
            //BDD Style
            expect(actualName).to.equal(expName)
            expect(actualName).to.not.equal(expName)
            //TDD Style
            assert.equal(actualName,expName)
            assert.notEqual(actualName,expName)
        })
     })
})