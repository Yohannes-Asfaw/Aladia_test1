const { defineConfig } = require('cypress');
const { installPlugin } = require("@chromatic-com/cypress");

module.exports = defineConfig({
  e2e: {
    // Enable Cypress Studio
    experimentalStudio: true,
    // The base URL of your Nuxt application
    baseUrl: 'http://localhost:3000', // Update this if necessary
    setupNodeEvents(on, config) {
      installPlugin(on, config);
      // implement node event listeners here
    },
  },
});
