/// <reference types="Cypress" />

describe("this is first test suite",function(){
    it("firet test case",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent child relationship
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1,index,$list)=> {
           const textvar= $e1.find('h4.product-name').text()
           if(textvar.includes('Cash')){
               cy.wrap($e1).find('button').click()
           }
        })
    })
})