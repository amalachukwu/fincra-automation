
import { login} from "../fixtures/selectors";

describe("Authentication",function(){
        beforeEach(function () {
            cy.visit("https://sandbox.fincra.com/auth/login")
        });

    it("validLogin",()=>{
                cy.get(login.emailAddressText).should('be.visible').clear().type(login.emailAddressInput)
                cy.get(login.passwordText).should('be.visible').clear().type(login.passwordInput)
                cy.get(login.logInButton).click()
                cy.wait(3000)
                
             })

    it("InvalidLogin",()=>{
                cy.get(login.emailAddressText).should('be.visible').clear().type(login.emailAddressInput)
                cy.get(login.passwordText).should('be.visible').clear().type(login.wrongPassword)
                cy.get(login.logInButton).click()
                cy.wait(3000)
                
             })

    it("complete login",()=>{

                cy.get(login.emailAddressText).should('be.visible').clear().type(login.emailAddressInput)
                cy.get(login.passwordText).should('be.visible').clear().type(login.passwordInput)
                cy.get(login.keepMeIn).click()
                cy.get(login.logInButton).click()
                cy.wait(3000)

    } )





})
