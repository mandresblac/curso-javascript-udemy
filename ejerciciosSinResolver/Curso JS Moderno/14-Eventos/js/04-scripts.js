// Veamos los eventos para un formulario, básicamente es uno pero es muy importante y merecía su propio video...

// Cuando envías un formulario usualmente lo que este en el action, es la página que se abre...

//

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault(); // PreventDefault es evitar que el navegador realice la acción por default, en este caso ir al action que envía el formulario en el HTML y enviar los datos via metodo "POST"

  // Usualmente utilizaras preventDefault para validar el formulario antes de enviarlo a un servidor

  // Crear consultas Ajax entre otras cosas

  console.log("enviando...");

  // Mucha información valiosa en este e...
  console.log(e);

  console.log(e.target.method); // Para saber el método que usa el formulario
  console.log(e.target.action); // La acción por default, es decir a que dirección va a ser enviada la información una vez que la mandemos
}
