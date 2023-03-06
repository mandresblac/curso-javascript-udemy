// ------------------ VARIABLES Y SELECTORES ------------------ //
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//Interfaz de usuario
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

//Objeta principal con la información de la cita
//Para que esto funcione las claves de las propiedades del objeto "citaObj" deben tener el mismo nombre que tiene el atributo "name" del elemento "input" del documento HTML
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

// ------------------------- EVENTOS ------------------------- //
function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);
  telefonoInput.addEventListener("input", datosCita);
  fechaInput.addEventListener("input", datosCita);
  horaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);

  formulario.addEventListener("submit", nuevaCita);
}

eventListeners();

// -------------------------- CLASES ------------------------- //
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }
}

//Clase User Interface
class UI {
  imprimirAlerta(mensaje, tipo) {
    //Creamos un div de mensaje
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    //Agregamos una clase en base al tipo de error
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    //Mensaje de error
    divMensaje.textContent = mensaje;

    //Agregamos el div mensaje al DOM HTML
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    //Quitamos la alerta después de 4 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 4000);
  }
}

//Instanciamos objetos de las clases Citas y UI
const administrarCitas = new Citas();
const ui = new UI();

// ------------------------ FUNCIONES ------------------------ //

//Agrega datos al objeto "citaObj"
function datosCita(e) {
  citaObj[e.target.name] = e.target.value; //Para escribir sobre cada propiedad del objeto "citaObj"
  //console.log(citaObj);
}

//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
  e.preventDefault();

  //Extraer información del objeto "citaObj"
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  //Validaciones
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return; //return para que no se ejecute la siguiente línea y salga de la función
  }

  //Agregamos un id único en el objeto "citaObj" con Date.now()
  citaObj.id = Date.now();

  //Creando una nueva cita
  administrarCitas.agregarCita({ ...citaObj });

  //Reiniciamos el objeto "citaObj" para la validación
  reiniciarObjeto();

  //Reiniciamos formulario
  formulario.reset();

  //Mostrar el HTMl de las citas
}

//Función que reinicia el objeto "citaObj"
function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}
