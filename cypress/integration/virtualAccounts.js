import {virtualAccounts} from "../fixtures/selectors";

describe("virtual Accounts page",function(){
        beforeEach(function () {
            cy.login()
            cy.wait(3000)
            cy.get(virtualAccounts.virtualAccountNavba).should('be.visible').click({ force: true })
        });

it("Request account",()=>{
    cy.get(virtualAccounts.virtualAccountbutton).should('be.visible').click()
    cy.get(virtualAccounts.setUpChecker).should('be.visible')
    cy.get(virtualAccounts.continueButton).click()
    cy.get(virtualAccounts.bankAccountChecker).should('be.visible')
    cy.get(virtualAccounts.selectCurrency).click()
    cy.get(virtualAccounts.requestAccountBottun).click()
    cy.get(virtualAccounts.reasonText).type(virtualAccounts.reasonInput)
    cy.get(virtualAccounts.entityNameText).type(virtualAccounts.entityNameInput)
    cy.get(virtualAccounts.monthlyVolumeText).type(virtualAccounts.monthlyVolumeInput)
    cy.get(virtualAccounts.descriptionText).type(virtualAccounts.descriptionInputs)
    cy.get(virtualAccounts.accountInfoCotinueButton).should('be.visible').click()
    cy.get(virtualAccounts.okayButton).click()


    

})

it("All wallet",()=>{
    cy.get(virtualAccounts.allvirtualAccount).should('be.visible')
    cy.get(virtualAccounts.pendingtab).should('be.visible')
    

})

})