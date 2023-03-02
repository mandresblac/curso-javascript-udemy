// ------------------ VARIABLES Y SELECTORES ------------------ //
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// ------------------------- EVENTOS ------------------------- //
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  formulario.addEventListener("submit", agregarGasto);
}

// -------------------------- CLASES ------------------------- //
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
}

//Clase User Interface "UI"
class UI {
  insertarPresupuesto(cantidad) {
    //Extraemos valores
    const { presupuesto, restante } = cantidad;

    //Agregamos al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    //Creamos un div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    //Validación
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    //Mensaje de error
    divMensaje.textContent = mensaje;

    //Insertamos en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario); //insertBefore() toma 2 argumentos, el primero lo que vamos a insertar y el segundo en donde lo vamos a insertar

    //Quitamos del HTML
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

// Instanciar objetos
const ui = new UI();
let presupuesto;

// ------------------------ FUNCIONES ------------------------ //
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");
  //console.log(Number(presupuestoUsuario));

  // Validaciones
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload(); //Recarga la pagina en caso que el usuario no escriba nada y de click en aceptar, cancelar o presione tecla enter
  }

  //Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e) {
  e.preventDefault(); //Prevenimos la acción por defecto del evento submit

  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = document.querySelector("#cantidad").value;

  //Validaciones
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no válida", "error");
    return;
  }

  console.log("Agregando gasto");
}
