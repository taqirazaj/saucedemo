import { constants } from "../../support/constant";
describe('Verify All Sorting Options on Products Page', () => {
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

    it('should sort products by price low to high', () => {
        // Wait for a moment to ensure any asynchronous operations complete
        // Select the 'Price (low to high)' option from the sort dropdown
        cy.get(constants.Sorting.Filter).select('Price (low to high)');
        // Retrieve all product prices from the page
        cy.get(constants.Sorting.InventoryItemPrice).then(($prices) => {
            // Log the raw price values before processing
            const rawPrices = $prices.toArray().map(price => price.innerText);
            cy.log('Raw price values: ' + rawPrices.join(', '));
            // Convert the prices to an array of floats, removing the '$' symbol
            const priceValues = rawPrices.map(price => parseFloat(price.replace('$', '')));
            // Log the numeric price values
            cy.log('Numeric price values: ' + priceValues.join(', '));
            // Create a sorted version of the price array in ascending order
            const sortedPriceValues = [...priceValues].sort((a, b) => a - b);
            // Log the sorted price values
            cy.log('Sorted price values: ' + sortedPriceValues.join(', '));
            // Assert that the original price array matches the sorted array
            expect(priceValues).to.deep.equal(sortedPriceValues);
        });  
    });
    it('should sort products by price high to low', () => {
        // Wait for a moment to ensure any asynchronous operations complete
        // Select the 'Price (high to low)' option from the sort dropdown
        cy.get(constants.Sorting.Filter).select('Price (high to low)');
        // Retrieve all product prices from the page
        cy.get(constants.Sorting.InventoryItemPrice).then(($prices) => {
            // Log the raw price values before processing
            const rawPrices = $prices.toArray().map(price => price.innerText);
            cy.log('Raw price values: ' + rawPrices.join(', '));
            // Convert the prices to an array of floats, removing the '$' symbol
            const priceValues = rawPrices.map(price => parseFloat(price.replace('$', '')));
            // Log the numeric price values
            cy.log('Numeric price values: ' + priceValues.join(', '));
            // Create a sorted version of the price array in descending order
            const sortedPriceValues = [...priceValues].sort((a, b) => b - a);
            // Log the sorted price values
            cy.log('Sorted price values: ' + sortedPriceValues.join(', '));
            // Assert that the original price array matches the sorted array
            expect(priceValues).to.deep.equal(sortedPriceValues);
        });
    });

    it('should sort products by name (A to Z)', () => {
        // Wait for a moment to ensure any asynchronous operations complete
        // Select the 'Name (A to Z)' option from the sort dropdown
        cy.get(constants.Sorting.Filter).select('Name (A to Z)');
        // Retrieve all product names from the page
        cy.get(constants.Sorting.InventoryItemName).then(($names) => {
            // Log the raw name values before processing
            const rawNames = $names.toArray().map(name => name.innerText);
            cy.log('Raw name values: ' + rawNames.join(', '));
            // Create a sorted version of the name array in alphabetical order
            const sortedNameValues = [...rawNames].sort();
            // Log the sorted name values
            cy.log('Sorted name values: ' + sortedNameValues.join(', '));
            // Assert that the original name array matches the sorted array
            expect(rawNames).to.deep.equal(sortedNameValues);
        });
    });
    it('should sort products by name (Z to A)', () => {
        // Wait for a moment to ensure any asynchronous operations complete
        // Select the 'Name (Z to A)' option from the sort dropdown
        cy.get(constants.Sorting.Filter).select('Name (Z to A)');
        // Retrieve all product names from the page
        cy.get(constants.Sorting.InventoryItemName).then(($names) => {
            // Log the raw name values before processing
            const rawNames = $names.toArray().map(name => name.innerText);
            cy.log('Raw name values: ' + rawNames.join(', '));
            // Create a sorted version of the name array in reverse alphabetical order
            const sortedNameValues = [...rawNames].sort().reverse();
            // Log the sorted name values
            cy.log('Sorted name values: ' + sortedNameValues.join(', '));
            // Assert that the original name array matches the sorted array
            expect(rawNames).to.deep.equal(sortedNameValues);
        });
    });  
});