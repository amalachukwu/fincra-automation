import {wallet} from "../fixtures/selectors";

describe("Wallet page",function(){
        beforeEach(function () {
            cy.login()
            cy.wait(3000)
            cy.get(wallet.walletNavbar).should('be.visible').click({ force: true })
        });

it("All wallet",()=>{
    cy.get(wallet.allWallet).should('be.visible')
    cy.get(wallet.topUpHistory).should('be.visible')

})

it("Fund wallet",()=>{
    cy.get(wallet.fundWalletButton).should('be.visible').click()
    cy.get(wallet.fundPageCheker).should('be.visible')
    cy.get(wallet.fundCurrencySelection).select('USD')
    cy.get(wallet.avaliableBalanceCheker).should('be.visible')
    cy.get(wallet.amountText).type(wallet.amountInput)
    cy.get(wallet.fundWalletContinueButton).click()
    cy.wait(2000)
    //wallet confrimation page
    cy.get(wallet.fundConfrimationText).should('contain.text', wallet.fundConfrimationInput)
    cy.get(wallet.doneButton).click()


})
})