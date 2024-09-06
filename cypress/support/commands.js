// Define a custom command for logging in
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/'); // Adjust if the login page is different
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });



  // cypress/support/commands.js

Cypress.Commands.add('clearAppData', () => {
  cy.window().then((win) => {
      win.sessionStorage.clear();
      if (win.indexedDB) {
          win.indexedDB.databases().then(databases => {
              databases.forEach(db => {
                  win.indexedDB.deleteDatabase(db.name);
              });
          });
      }
      if (navigator.serviceWorker) {
          navigator.serviceWorker.getRegistrations().then(registrations => {
              registrations.forEach(registration => {
                  registration.unregister();
              });
          });
      }
  });
});
