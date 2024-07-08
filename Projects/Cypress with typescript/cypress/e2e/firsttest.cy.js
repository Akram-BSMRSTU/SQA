/// <reference types="cypress" />
it('first test', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation Step by step{enter}')
    //cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.get('.HiHjCd > [href="https://automationstepbystep.com/free-online-tutorials/"]').click()
  })