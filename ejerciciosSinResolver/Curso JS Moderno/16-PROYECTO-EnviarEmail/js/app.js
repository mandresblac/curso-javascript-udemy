document.addEventListener("DOMContentLoaded", function () {
  // Objeto donde se verifica que todos los campos estén llenos
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  //Capturamos los elementos del documento HTML en Javascript
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  // Asignamos los eventos
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", (e) => {
    e.preventDefault(); // Previene la acción por defecto del boton reset que es reiniciar el formulario
    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      resetFormulario();

      //Creamos mensaje de alerta exitosa
      const alertaExito = document.createElement("p");
      alertaExito.classList.add( "bg-green-500", "text-white", "p-2", "text-center",
      "rounded-lg", "mt-10", "font-bold", "text-sm","uppercase"); // Clases de Tailwind CSS
      alertaExito.textContent = "MENSAJE ENVIADO CORRECTAMENTE";

      //Agregamos la alerta de éxito al DOM
      formulario.appendChild(alertaExito);

      //Eliminamos la alerta de éxito
      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    // Validacion para revisar que los campos no esten vacios
    if (e.target.value.trim() === "") { // .trim() elimina espacios en blanco
      mostrarAlerta( `El campo ${e.target.id} es obligatorio`, e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    //Llamamos a la función validarEmail
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    //Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();

    //Comprobar el objeto de email
    comprobarEmail();
  }

  //Muestra una alerta si el usuario comete un error
  function mostrarAlerta(mensaje, referencia) {
    // Comprueba si ya existe una alerta
    limpiarAlerta(referencia);

    // Generamos alerta en HTML
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center"); //Agregamos clases al elemento error generado en el HTML, en este caso una clase de Tailwind CSS

    //Inyectar el error al formulario del documento HTML
    referencia.appendChild(error); //.appendChild() agrega un nuevo elemento al final del formulario en HTML
  }

  function limpiarAlerta(referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //Expresión regular para validar email
    const resultado = regex.test(email); // .test() retorna false sino se cumple la expresión regular y true si se cumple la expresión regular
    return resultado;
  }

  function comprobarEmail() {
    //Toma los valores del objeto y luego los asigna a un arreglo
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  //Función que reinicia todo el formulario
  function resetFormulario() {
    //Reiniciar el objeto
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset(); // Reinicia el formulario
    comprobarEmail(); // LLamamos la función comprobarEmail() que comprueba que el objeto email este lleno
  }
});
