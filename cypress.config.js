const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w5cjha',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
