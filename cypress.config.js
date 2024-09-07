const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '2asdmr',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 10000, // 10 seconds
    pageLoadTimeout: 120000, // 2 minutes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      recordKey: '8d15e82b-5582-4fb1-aa76-1407ed8d7796' // This is for storing environment variables, but not used by Cypress Cloud
    }
  }
});
