describe("Portafolio de Arianna Hernández", () => {
  beforeEach(() => {
    cy.visit("https://neocatportfolioari.netlify.app", { timeout: 15000 }); // usa baseUrl de config
  });

  it("Carga correctamente el título del sitio", () => {
    cy.title().should("include", "Portfolio Arianna");
  });

  it("Tiene un header con menú de navegación", () => {
    cy.get("nav").should("exist");
    cy.get("nav ul li a").should("have.length.at.least", 4);
  });

  it("Contiene las secciones principales del portafolio", () => {
    cy.get("#about").should("exist");
    cy.get("#projects").should("exist");
    cy.get("#skills").should("exist");
    cy.get("#contact").should("exist");
  });

  it("Muestra el título principal 'Welcome to my portfolio'", () => {
    cy.contains("Welcome", { timeout: 10000 }).should("be.visible");
    cy.contains("portfolio").should("be.visible");
  });

  it("Muestra los tres proyectos destacados", () => {
    cy.get("#projects .grid > div", { timeout: 10000 }).should("have.length", 3);
      cy.get("#projects").contains("Bienes Raices").should("exist");
    cy.get("#projects").contains("ZADUM").should("exist");
    cy.get("#projects").contains("Gestion Cultural Alajuelita").should("exist");
  });

  it("El formulario de contacto se puede llenar y mostrar el botón", () => {
    cy.scrollTo("bottom");
    cy.contains("button", "Enviar Mensaje", { timeout: 10000 }).should("be.visible");

    cy.get("input[name='name']").type("Tester", { delay: 50 });
    cy.get("input[name='email']").type("tester@example.com", { delay: 50 });
    cy.get("textarea[name='message']").type("Prueba automatizada desde Cypress", { delay: 50 });

    cy.contains("button", "Enviar Mensaje").click();
  });

  it("El footer contiene derechos reservados", () => {
    cy.get("footer").should("be.visible");
    cy.get("footer p").invoke("text").should("contain", "NeoCat");
  });
});



