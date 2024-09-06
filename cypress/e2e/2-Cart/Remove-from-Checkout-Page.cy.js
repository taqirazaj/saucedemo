import { constants } from "../../support/constant";

describe('Cart', () => {
    // Run this block before all tests
    before(() => {
        // Load fixture data once before all tests
        cy.fixture('data').then((userData) => {
            // Save the fixture data in a global variable
            Cypress.env('data', userData);
        });
    });

    // Run this block before each test
    beforeEach(() => {
        cy.clearAppData();  // Clear data before re-login
        // Retrieve the fixture data from global variables
        const user = Cypress.env('data').user;
        // Perform login using the fixture data
        cy.login(user.username, user.password);
    });

    it('should add items to cart, proceed to checkout, and remove them from the cart', () => {
        // Add items to the cart
        cy.get(constants.Cart.SelectProduct).click(); // Click to add Sauce Labs Backpack to the cart
        // Verify items are added to the cart
        cy.get(constants.Cart.CartBadge).should('have.text', '1'); // Check that the cart badge shows 1 item
        cy.get(constants.Cart.ShoppingCart).click(); // Navigate to the shopping cart page
        cy.get(constants.Cart.Checkout).click(); // Click on the checkout button
        cy.get(constants.Cart.Cancel).click(); // Click on the cancel button to return to the cart
        // Remove the item from the cart
        cy.get(constants.Cart.RemoveFromCart).click(); // Click to remove Sauce Labs Backpack from the cart
        // Ensure no items remain in the cart
        cy.get(constants.Cart.CheckIfCartIsEmpty).should('not.exist'); // Verify that there are no items left in the cart
    });
});
