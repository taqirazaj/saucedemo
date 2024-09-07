const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '2asdmr',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 10000, // 10 seconds
    pageLoadTimeout: 120000, // 2 minutes
    setupNodeEvents(on, config) {
    },
  },
},
);
