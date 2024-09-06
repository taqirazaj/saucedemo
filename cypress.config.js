const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2asdmr',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    projectId: "2asdmr",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
