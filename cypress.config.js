const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "w5cjha",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
