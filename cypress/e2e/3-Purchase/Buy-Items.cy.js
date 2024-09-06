import { constants } from "../../support/constant";

describe('Buy Items', () => {
    let userData;
    let itemData;
    let checkoutCompletionData;
    let checkoutInfo;

    // Load fixture data once before all tests
    before(() => {
        cy.fixture('data').then((data) => {
            userData = data.user;
            itemData = data.item;
            checkoutCompletionData = data.checkoutCompletion;
            checkoutInfo = data.checkoutInfo;
        });
    });

    // Log in before each test using the fixture data
    beforeEach(() => {
                cy.clearAppData();  // Clear data before re-login

        cy.login(userData.username, userData.password); // Perform login with fixture data
    });

    it('should add items to the cart, proceed to checkout, and complete the purchase', () => {
        // Add item to the cart and verify cart badge
        cy.get(`[data-test="add-to-cart-${itemData.name}"]`).click();
        cy.get(constants.Cart.CartBadge)
            .should('exist')
            .and('have.text', '1'); // Assert the correct number of items in the cart
        // Proceed to checkout
        cy.get(constants.Cart.ShoppingCart).click();
        cy.get(constants.Cart.Checkout).click();
        // Verify the checkout form is visible and fill out the form
        cy.get(constants.Buy.FirstName).type(checkoutInfo.firstName);
        cy.get(constants.Buy.LastName).type(checkoutInfo.lastName);
        cy.get(constants.Buy.PostalCode).type(checkoutInfo.postalCode);
        cy.get(constants.Buy.ContinueButton).click();
        // Verify the checkout summary and complete the purchase
        cy.get(constants.Buy.SubTotal).should('contain', `Item total: ${itemData.subtotal}`);
        cy.get(constants.Buy.Finish).click();
        // Verify purchase completion
        cy.get(constants.Buy.ThankYouMessage).should('contain', checkoutCompletionData.message);
    });
});
