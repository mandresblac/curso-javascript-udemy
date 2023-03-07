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

//Variable de el modo edición
let editando;

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

//Llamamos la función eventListeners()
eventListeners();

// -------------------------- CLASES ------------------------- //
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  editarCita(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
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

  //Podemos aplicar desestructuración desde los paréntesis de los parámetros de la la función imprimirCitas()
  imprimirCitas({ citas }) {
    //Primero limpiamos el HTML
    this.limpiarHtml();

    citas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;

      //Creamos un div para la cita
      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      //Scripting de los elementos de la cita
      //Para la mascota
      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      //Para el propietario
      const propietarioParrafo = document.createElement("p");
      propietarioParrafo.innerHTML = `
        <span class="font-weight-bolder">Propietario:</span> ${propietario}
      `;

      //Para el telefono
      const telefonoParrafo = document.createElement("p");
      telefonoParrafo.innerHTML = `
        <span class="font-weight-bolder">Teléfono:</span> ${telefono}
      `;

      //Para la fecha
      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `
        <span class="font-weight-bolder">Fecha:</span> ${fecha}
      `;

      //Para la hora
      const horaParrafo = document.createElement("p");
      horaParrafo.innerHTML = `
        <span class="font-weight-bolder">Hora:</span> ${hora}
      `;

      //Para los sintomas
      const sintomasParrafo = document.createElement("p");
      sintomasParrafo.innerHTML = `
        <span class="font-weight-bolder">Síntomas:</span> ${sintomas}
      `;

      //Añade botón para eliminar la cita
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>`;
      btnEliminar.onclick = () => eliminarCita(id);

      //Añade botón para editar la cita
      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-info");
      btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>`;
      btnEditar.onclick = () => cargarEdicion(cita);

      //Agregar los párrafos al divCita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      //Agregar las citas al HTML
      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarHtml() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

//Instanciamos 2 objetos de las clases Citas y UI
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

  if (editando) {
    ui.imprimirAlerta("Editado correctamente");

    //Pasamos el objeto de la cita a edición
    administrarCitas.editarCita({ ...citaObj });

    //Cambia el texto del botón a su estado original
    formulario.querySelector('button[type="submit"]').textContent =
      "Crear cita";

    //Deshabilitamos modo edición para que se reinicie el formulario
    editando = false;
  } else {
    //Agregamos un id único en el objeto "citaObj" con Date.now()
    citaObj.id = Date.now();

    //Creando una nueva cita
    administrarCitas.agregarCita({ ...citaObj });

    //Mensaje de agregado correctamente
    ui.imprimirAlerta("Se agrego correctamente");
  }

  //Reiniciamos el objeto "citaObj" para la validación
  reiniciarObjeto();

  //Reiniciamos formulario y ponemos foco en el input con id "mascota"
  formulario.reset();
  document.querySelector("#mascota").focus();

  //Mostrar el HTMl de las citas
  ui.imprimirCitas(administrarCitas);
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

//Función para eliminar cita
function eliminarCita(id) {
  //Eliminar la cita
  administrarCitas.eliminarCita(id);

  //Muestra un mensaje
  ui.imprimirAlerta("La cita se elimino correctamente");

  //Refresca las citas
  ui.imprimirCitas(administrarCitas);
}

//Carga los datos y el modo edición
function cargarEdicion(cita) {
  //Extraemos información del parámetro cita
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

  //Llenamos los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  //Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  //Cambia el texto del botón
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar cambios";

  editando = true;
}
