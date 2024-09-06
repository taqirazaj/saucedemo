import { constants } from "../../support/constant";

describe('Cart', () => {
    // Load fixture data once before all tests
    before(() => {
        cy.fixture('data').then((userData) => {
            // Save the fixture data in a global variable for reuse
            Cypress.env('data', userData);
        });
    });

    // Log in before each test using the fixture data
    beforeEach(() => {
        cy.clearAppData();  // Clear data before re-login
        const user = Cypress.env('data').user; // Retrieve user data from global variables
        cy.login(user.username, user.password); // Perform login
    });

    it('should add and remove items from the cart on the product details page', () => {
        // Open the first product's details page
        cy.get(constants.Cart.DetailPage).first().click();
        // Add the item to the cart
        cy.get(constants.Cart.AddToCart).click();
        // Verify that the cart icon appears, indicating an item is added
        cy.get(constants.Cart.CartBadge).should('exist');
        // Remove the item from the cart
        cy.get(constants.Cart.RemoveFromCartViaDetail).click();
        // Verify that the cart icon disappears, indicating the cart is empty
        cy.get(constants.Cart.CartBadge).should('not.exist');
        // Verify that the button text changes back to 'Add to cart'
        cy.get(constants.Cart.AddToCart).should('have.text', 'Add to cart');
    });
});
