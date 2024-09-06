import { constants } from '../../support/constant';

describe('Successful Sign In', () => {
  before(() => {
    // Visit the base URL before running the tests
    cy.visit('/');
  });

  beforeEach(function() {
    cy.clearAppData();  // Clear data before re-login
    // Load the fixture data before each test and assign it to 'this' context
    cy.fixture('data').then((data) => {
      this.userData = data.user;
    });
  });

  it('Automate the login process using valid credentials', function() {
    // Use the loaded fixture data to input the credentials
    cy.get(constants.login.userNamefield).type(this.userData.username);  // Use username from fixture
    cy.get(constants.login.Passwordfield).type(this.userData.password);  // Use password from fixture
    cy.get(constants.login.LoginButton).click();
    // Verify successful login by checking URL or a specific element
    cy.url().should('include', '/inventory.html');  // Assuming login redirects to the inventory page
  });
});
