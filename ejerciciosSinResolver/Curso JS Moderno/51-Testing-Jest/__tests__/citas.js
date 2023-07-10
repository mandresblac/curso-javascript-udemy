// Utiliza el siguiente comando para correr este archivo: npm t -- -u
import Citas from "../js/classes/Citas";

describe("Probar la clase de citas", () => {
  const citas = new Citas();
  const id = Date.now();

  // Prueba 1
  test("Agregar una nueva cita", () => {
    const citaObj = {
      id,
      mascota: "Hook",
      propietario: "Manuel",
      telefono: "19082737636",
      fecha: "10-12-202",
      hora: "10:30",
      sintomas: "Solo duerme",
    };

    citas.agregarCita(citaObj);

    // Prueba
    expect(citas).toMatchSnapshot();
  });

  test("Actualizar cita", () => {
    const citaActualizada = {
      id,
      mascota: "Nuevo nombre",
      propietario: "Roberto",
      telefono: "19082737636",
      fecha: "10-12-202",
      hora: "10:30",
      sintomas: "Solo duerme",
    };

    citas.editarCita(citaActualizada);

    expect(citas).toMatchSnapshot();
  });

  test("Eliminar cita", () => {
    citas.eliminarCita(id);

    expect(citas).toMatchSnapshot();
  });
});
