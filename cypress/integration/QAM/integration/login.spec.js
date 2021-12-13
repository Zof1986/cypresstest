/// <reference types="cypress" />

describe('login test', () => {

    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/');
      
        cy.url().should('eq', "https://gallery-app.vivifyideas.com/");

        cy.get('a[href="/login"]').click();

        cy.get('#email').type('nikola.zof@gmail.com');
        cy.get('#password').type('dukenukem3d');
        cy.get('button[type="submit"]').click();
    });

    

    it("logout", () => {
        cy.wait(1000);
        cy.get(".nav-link").eq(3).click();
      });

      it('login with invalid email', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
      
        cy.url().should('eq', "https://gallery-app.vivifyideas.com/");

        cy.get('a[href="/login"]').click();

        cy.get('#email').type('nikolla.zof@gmail.com');
        cy.get('#password').type('dukenukem3d');
        cy.get('button[type="submit"]').click();
    });

    it('login with no password', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
      
        cy.url().should('eq', "https://gallery-app.vivifyideas.com/");

        cy.get('a[href="/login"]').click();

        cy.get('#email').type('nikola.zof@gmail.com');
        //cy.get('#password').type('dukenukem3d');
        cy.get('button[type="submit"]').click();

    });

    it('login with wrong password', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
      
        cy.url().should('eq', "https://gallery-app.vivifyideas.com/");

        cy.get('a[href="/login"]').click();

        cy.get('#email').type('nikola.zof@gmail.com');
        cy.get('#password').type('dukeknukem3d');
        cy.get('button[type="submit"]').click();

    });

    it('login with no credentials', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
      
        cy.url().should('eq', "https://gallery-app.vivifyideas.com/");

        cy.get('a[href="/login"]').click();

        //cy.get('#email').type(' ');
      //  cy.get('#password').type(' ');
        cy.get('button[type="submit"]').click();

    });
});
