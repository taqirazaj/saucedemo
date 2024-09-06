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

  it('should add items to the cart and remove them from the products page', () => {
    // Click the "Add to Cart" button for the "Sauce Labs Backpack" item
    cy.get(constants.Cart.SelectProduct).first().click();
    // Verify that the cart badge is visible, indicating that an item has been added to the cart
    cy.get(constants.Cart.CartBadge).should('exist');
    // Click the "Remove" button for the "Sauce Labs Backpack" item
    cy.get(constants.Cart.RemoveFromCart).first().click();
    // Verify that the cart badge is not visible, indicating that the cart is now empty
    cy.get(constants.Cart.CartBadge).should('not.exist');
    // Verify that the "Add to Cart" button text has changed back to "Add to cart"
    cy.get(constants.Cart.SelectProduct).first().should('have.text', 'Add to cart');
  });
});
