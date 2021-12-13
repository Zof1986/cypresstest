
//ova komanda nije main funkcija, moze da se pise bez nje
//describe('my first test', function(){
 /*   it('Does not do much', function (){
        expect(true).to.equal(false)
    })
}
*/


/*
it('Visits the kitchen sink', function(){
    cy.visit('https://example.cypress.io')

    cy.pause

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@email.com').should('have.value','fake@email.com')
}) 
*/


    //nesto zezaju ove komande
   /* it('Creating a New Post', function()  {
      cy.visit('/posts/new') // 1.
  
      cy.get('input.post-title') // 2.
        .type('My First Post') // 3.
  
      cy.get('input.post-body') // 4.
        .type('Hello, world!') // 5.
  
      cy.contains('Submit') // 6.
        .click() // 7.
  
      cy.url() // 8.
        .should('include', '/posts/my-first-post')
  
      cy.get('h1') // 9.
        .should('contain', 'My First Post')
    }) */
  //})


  /*
  it('changes the URL when "awesome" is clicked', () => {
    cy.visit('https://example.cypress.io') // Nothing happens yet
  
    cy.get('.awesome-selector') // Still nothing happening
      .click() // Nope, nothing
  
    cy.url() // Nothing to see, yet
      .should('include', '/my/resource/path#awesomeness') // Nada.
  })
  */

  //ovako je nekorektno
 /* it('test', () => {
    let username = undefined // evaluates immediately as undefined
  
    cy.visit('https://app.com') // Nothing happens yet
    cy.get('.user-name') // Still, nothing happens yet
      .then(($el) => {
        // Nothing happens yet
        // this line evaluates after the .then executes
        username = $el.text()
      })
  
    // this evaluates before the .then() above
    // so the username is still undefined
    if (username) {
      // evaluates immediately as undefined
      cy.contains(username).click()
    } else {
      // this will always run
      // because username will always
      // evaluate to undefined
      cy.contains('My Profile').click()
    }
  })*/

  //ovako je korektno ali se javlja isti slucaj
  /*it('test', () => {
    let username = undefined // evaluates immediately as undefined
  
    cy.visit('https://app.com') // Nothing happens yet
    cy.get('.user-name') // Still, nothing happens yet
      .then(($el) => {
        // Nothing happens yet
        // this line evaluates after the .then() executes
        username = $el.text()
  
        // evaluates after the .then() executes
        // it's the correct value gotten from the $el.text()
        if (username) {
          cy.contains(username).click()
        } else {
          cy.get('My Profile').click()
        }
      })
  })*/




  //nekorektno
 // let found7 = false

//while (!found7) {
  // this schedules an infinite number
  // of "cy.get..." commands, eventually crashing
  // before any of them have a chance to run
  // and set found7 to true
 /* cy.get('#result')
    .should('not.be.empty')
    .invoke('text')
    .then(parseInt)
    .then((number) => {
      if (number === 7) {
        found7 = true
        cy.log('lucky **7**')
      } else {
        cy.reload()
      }
    })
}*/


const checkAndReload = () => {
    // get the element's text, convert into a number
    cy.get('#result')
      .should('not.be.empty')
      .invoke('text')
      .then(parseInt)
      .then((number) => {
        // if the expected number is found
        // stop adding any more commands
        if (number === 7) {
          cy.log('lucky **7**')
  
          return
        }
  
        // otherwise insert more Cypress commands
        // by calling the function after reload
        cy.wait(500, { log: false })
        cy.reload()
        checkAndReload()
      })
  }
  
  cy.visit('public/index.html')
  checkAndReload()



