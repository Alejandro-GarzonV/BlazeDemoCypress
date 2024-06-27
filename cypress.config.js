const { defineConfig } = require("cypress");
//For Cucumber Integration
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout:60000,

  env: {
    allure: true,
    allureResults: 'allure-results',
    allureResultsWatchPath: 'allure-results',
    allureLogCyCommands: true,
    allureSkipCommands: 'screenshot,wait',
    allureWrapCustomCommands: true,
    allureCleanResults: false,
    allureAttachRequests: false,
    allureCompactAttachments: true,
    allureAddVideoOnPass: false,
  },

  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        define: { global: 'window' },
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      configureAllureAdapterPlugins(on, config); // Integración de Allure Adapter

      return config;
      
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl:"https://www.demoblaze.com/",
    chromeWebSecurity: false,
  },
});
