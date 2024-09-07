const { defineConfig } = require("cypress");
const { reporter } = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  projectId: "2asdmr",
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 10000, // 10 seconds
    pageLoadTimeout: 120000, // 2 minutes
    setupNodeEvents(on, config) {
      reporter(on); // Integrate the reporter plugin
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory to save reports
      html: true,
      json: true,
    },
  },
});
