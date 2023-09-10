import { defineConfig } from "cypress"; //ES module, sirve para importar, exportar y reutilizar archivos

export default defineConfig({
  testIsolation: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  chromeWebSecurity: false, 
  retries: process.env.CI ? 2 : 0,
  video: false,

  e2e: {
    specPattern: 'cypress/test/**/*.cy.{js, jsx, ts, tsx}',
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
