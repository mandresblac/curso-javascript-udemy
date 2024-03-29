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

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id); // Traemos todos los "id" menos el que estamos tratando de eliminar
    this.calcularRestante();
  }
}

//Clase User Interface "UI"
class UI {
  insertarPresupuesto(cantidad) {
    // Extraemos valores
    const { presupuesto, restante } = cantidad;

    // Agregamos al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    //Creamos un div de alerta
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    // Validamos si es de tipo de error o de tipo correcto
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger"); // Error
    } else {
      divMensaje.classList.add("alert-success"); // Exito
    }

    // Agregamos mensaje de error
    divMensaje.textContent = mensaje;

    // Insertamos mensaje en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario); //insertBefore() toma 2 argumentos, el primero lo que vamos a insertar, el segundo en que parte lo vamos a insertar

    //Quitamos el mensaje del HTML y ponemos el foco en el input gasto
    setTimeout(() => {
      divMensaje.remove();
      document.querySelector("#gasto").focus();
    }, 3000);
  }

  mostrarGastos(gastos) {
    // Elimina el HTML previo
    this.limpiarHtml();

    // Iteramos sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto; // Desestructuramos gasto

      // Creamos un elemento li de HTML
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevoGasto.dataset.id = id;

      // Agregar el HTML del gasto
      nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

      // Botón para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "Borrar &times"; // "&times" es una entidad de HTML
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };
      nuevoGasto.appendChild(btnBorrar);

      // Agregamos el botón al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHtml() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestoObj) {
    const { presupuesto, restante } = presupuestoObj;

    const restanteDiv = document.querySelector(".restante");

    // Comprobar 25%
    if (presupuesto / 4 > restante) {
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      restanteDiv.classList.remove("alert-success");
      restanteDiv.classList.add("alert-warning");
    } else {
      restanteDiv.classList.remove("alert-danger", "alert-warning");
      restanteDiv.classList.add("alert-success");
    }

    // Si el total es cero o menor
    if (restante <= 0) {
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");
      //Para prevenir que el usuario siga agregando gastos
      formulario.querySelector("button[type='submit']").disabled = true;
    }
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
    window.location.reload(); // Recarga la pagina en caso que el usuario no escriba nada y de click en aceptar, cancelar o presione tecla enter
  }

  //Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);
  //console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e) {
  e.preventDefault(); //Prevenimos la acción por defecto del evento submit

  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  //Validaciones
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return; // return para que no se ejecuten las siguientes líneas de codigo
  } else if (!isNaN(nombre)) {
    // !isNaN(nombre) Validam que los datos insertados sean letras no números
    ui.imprimirAlerta("Campo gasto no valido", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    // isNaN() valida que los datos insertados sean números no letras
    ui.imprimirAlerta("Cantidad no válida", "error");
    return; // return para que no se ejecuten las siguientes líneas de codigo
  }

  // Creamos un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() }; // Contrario al destructuring

  // Añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);

  // Mensaje de todo bien
  ui.imprimirAlerta("Gasto agregado correctamente");

  // Imprimir los gastos
  const { gastos, restante } = presupuesto; // Desestructuramos el objeto presupuesto
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);

  // Reiniciamos el formulario y ponemos el foco en el input gasto
  formulario.reset();
  document.querySelector("#gasto").focus();
}

function eliminarGasto(id) {
  // Elimina elementos del objeto
  presupuesto.eliminarGasto(id);

  //Elimina los gastos del HTML
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
}
