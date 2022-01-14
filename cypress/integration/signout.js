import {signout} from "../fixtures/selectors";

describe("virtual Accounts page",function(){
        beforeEach(function () {
            cy.login()
            cy.wait(3000)
            cy.get(signout.signoutNavba).should('be.visible').click({ force: true })
        });


it("signout flow",()=>{
    
    cy.get(signout.signoutConfrimationChecker).should('be.visible')
    cy.get(signout.sigoutButton).click()
    cy.get(signout.signoutChecker).should('be.visible')
   })



it("Cancel signout flow",()=>{
    
    cy.get(signout.signoutConfrimationChecker).should('be.visible')
    cy.get(signout.cancelSignoutButton).click()
    cy.get(signout.cancelSignoutChecker).should('be.visible')
   })

 })