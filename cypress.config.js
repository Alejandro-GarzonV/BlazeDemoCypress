const { defineConfig } = require("cypress");
//For Cucumber Integration
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout:60000,

  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
      
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl:"https://www.demoblaze.com/",
    chromeWebSecurity: false,
  },
});
