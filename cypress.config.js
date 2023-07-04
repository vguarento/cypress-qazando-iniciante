const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yg75q5',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reportOptions: {
      charts: true,
      reportTitle: 'Projeto Cypress',
      reportPageTitle: 'Projeto do curso Cypress'
    },
    baseUrl:"http://automationpratice.com.br/",
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
