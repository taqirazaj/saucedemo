import { constants } from "../../support/constant";

describe('Cart Persistence', () => {
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

    it('Add Items to Cart, Logout, and Login Again to Verify Cart Persistence', () => {
        // Click the "Add to Cart" button for the "Sauce Labs Backpack" item
        cy.get(constants.Cart.SelectProduct).first().click();
        // Verify that the cart badge is visible, indicating that an item has been added to the cart
        cy.get(constants.Cart.CartBadge)
            .should('exist')
            .and('have.text', '1');
        cy.get(constants.Cart.Menu).click({ force: true });
        cy.wait(1000)
        cy.get(constants.Cart.Logout).click({ force: true });

        cy.clearAppData();  // Clear data before re-login


        // Log back in
        const user = Cypress.env('data').user;
        cy.login(user.username, user.password);

        // Verify that the cart persists after logging back in
        cy.get(constants.Cart.CartBadge)
            .should('exist')
            .and('have.text', '1');
    });
});
