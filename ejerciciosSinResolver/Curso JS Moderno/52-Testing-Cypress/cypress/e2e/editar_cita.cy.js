/// <reference types="cypress" />
// Para ejecutar en consola cypress utiliza el siguiente comando: npx cypress open

describe("LLena los campos para una nueva cita y la edita", () => {
  it("Campos nueva cita", () => {
    cy.visit(
      "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html"
    );

    cy.get("[data-cy='mascota-input']").type("Firulais");

    cy.get("[data-cy='propietario-input']").type("Manuel");

    cy.get("[data-cy='telefono-input']").type("3114429019273");

    cy.get("[data-cy='fecha-input']").type("2023-04-13");

    cy.get("[data-cy='hora-input']").type("20:30");

    cy.get("[data-cy='sintomas-textarea']").type("El gato solo come y duerme.");

    cy.get("[data-cy='submit-cita']").click();

    cy.get("[data-cy=citas-heading]")
      .invoke("text")
      .should("equal", "Administra tus Citas");

    // seleccionar la alerta
    cy.get("[data-cy='alerta']")
      .invoke("text")
      .should("equal", "Se agregó correctamente");

    cy.get("[data-cy='alerta']").should("have.class", "alert-success");

    cy.get("[data-cy='btn-editar']").click();

    cy.get("[data-cy='mascota-input']").clear().type("Nuevo Firulais");

    cy.get("[data-cy='submit-cita']").click();

    // Verificamos la alerta de exito
    cy.get("[data-cy='alerta']")
      .invoke("text")
      .should("equal", "Guardado Correctamente");

    cy.get("[data-cy='alerta']").should("have.class", "alert-success");
  });
});
