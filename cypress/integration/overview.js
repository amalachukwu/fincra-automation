
import { overview} from "../fixtures/selectors";

describe("Landing page",function(){
        beforeEach(function () {
            cy.login()
            cy.wait(3000)
        });

it("Landing page vaildation",()=>{

    cy.get(overview.overviewChecker).should('be.visible')
    cy.get(overview.requestAccount).should('be.visible')
    cy.get(overview.fundWallet).should('be.visible')
    cy.get(overview.payout).should('be.visible')
    cy.get(overview.support).should('be.visible')
    cy.get(overview.yourBalance).should('be.visible')

})
})
