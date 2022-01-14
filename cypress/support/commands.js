// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

import {login } from "../fixtures/selectors"
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('login', () => {
    
    cy.visit("https://sandbox.fincra.com/auth/login"),
    cy.get(login.emailAddressText).should('be.visible').clear().type(login.emailAddressInput)
    cy.get(login.passwordText).should('be.visible').clear().type(login.passwordInput)
    cy.get(login.logInButton).click()
    cy.wait(3000)
   

})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
