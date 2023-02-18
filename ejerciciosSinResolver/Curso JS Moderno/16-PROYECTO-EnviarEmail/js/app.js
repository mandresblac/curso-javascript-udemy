document.addEventListener("DOMContentLoaded", function () {
  //Capturamos los elementos del documento HTML en Javascript
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //Asignamos los eventos
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      return;
    }

    limpiarAlerta(e.target.parentElement);
  }

  //Muestra una alerta si el usuario comete un error
  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //Generamos alerta en HTML
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center"); //Agregamos clases al elemento error generado en el HTML, en este caso una clase de Tailwind CSS

    //Inyectar el error al formulario del documento HTML
    referencia.appendChild(error); //.appendChild() agrega un nuevo elemento al final del formulario en HTML
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }
});
