/// <reference types="cypress" />
it('first test', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation Step by step{enter}')
    // cy.get
    cy.get('.HiHjCd > [href="https://automationstepbystep.com/free-online-tutorials/"]').click()
  })