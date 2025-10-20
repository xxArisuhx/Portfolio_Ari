const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://neocatportfolioari.netlify.app", // cambia esta URL si tu proyecto usa otra
    setupNodeEvents(on, config) {
      // aquí puedes agregar plugins o eventos
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://neocatportfolioari.netlify.app",
    setupNodeEvents(on, config) {},
    screenshotOnRunFailure: true, // ✅ toma screenshot automáticamente si falla un test
    defaultCommandTimeout: 10000, // tiempo prudente para comandos como cy.get o cy.contains
    pageLoadTimeout: 15000, // tiempo prudente para cargar la página
  },
});

