/// <reference types="cypress" />

// Para ejecutar en consola cypress utiliza el siguiente comando: npx cypress open
describe("Carga la pagina principal", () => {
  it("Carga lapagina principal", () => {
    cy.visit(
      "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html"
    );

    // Verificar el elemento y su texto
    cy.contains(
      "[data-cy='titulo-proyecto']",
      "Administrador de Pacientes de Veterinaria"
    );

    // Verificar que exista
    cy.get("[data-cy='titulo-proyecto']").should("exist");

    // Verificar que exista el elemento y contenga un texto en especifico
    cy.get("[data-cy='titulo-proyecto']")
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");

    // Verificar el texto de las citas
    cy.get("[data-cy=citas-heading]")
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");
  });
});
