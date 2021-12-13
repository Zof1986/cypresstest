/// <reference types="Cypress" />

const { entries } = require("lodash")

//prvi test



    it('Sign in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('nikola.zof@gmail.com')
        cy.get('input[type="password"]').type('dukenukem3d')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })



    //drugi test
    
    it('Create a post', function(){
       
        cy.get('ul.navbar-nav').children().contains('nikola').click()
       /* cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test2')
        cy.contains('Publish Article').click()*/
      //  cy.url().should('include','article')
        //ovo neradi
    })

   //treci test
   /*
    it('Mark-unmark as favorite', function(){
        cy.get('.nav-link').contains('nikola').click()
        cy.contains('My Articles').should('be.visible')
             cy.get('.ion-hart').click()
        cy.contains('Favorited Articles').click()
        cy.url('include','favorites')
        cy.get('.ion-hart').click()
        cy.reload()
        cy.contains('No articles are here... yet').should('be.visible')
        cy.go('back')*/
        //ili gore ili dole
      //  cy.go(-1)

      //  cy.go('forward')
        //ili gore ili dole
       // cy.go(1)
 //   })

//cetvrti test
/*
    it('test', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('nikola.zof@gmail.com')
        cy.get('input[type="password"]').type('dukenukem3d')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
        cy.contains('conduit').should('be visible').click()
        
        cy.contains('Global Feed').should('be.visible').click()

             cy.get('.ion-hart').click()
    }
    )
})  */

/*
it('Create a post', function(){

    cy.visit('https://www.google.com/')
    cy.get('input[type="text"]').type('youtube').type('{enter}')
    
}) */
