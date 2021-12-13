/// <reference types="Cypress" />

describe('Login', function(){
    it('Sign in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('nikola.zof@gmail.com')
        cy.get('input[type="password"]').type('dukenukem3d')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})