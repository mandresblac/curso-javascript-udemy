/// <reference types="cypress" />
// Para ejecutar en consola cypress utiliza el siguiente comando: npx cypress open

describe("Valida el formulario", () => {
  it("Submit al formulario y mostrar la elerta de error", () => {
    cy.visit(
      "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html"
    );

    // Verificar que exista
    cy.get("[data-cy='formulario']").submit();

    // seleccionar la alerta
    cy.get("[data-cy='alerta']")
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");

    cy.get("[data-cy='alerta']").should("have.class", "alert-danger");
  });
});
