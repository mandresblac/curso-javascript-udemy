//-------------------- CONSTRUCTORES --------------------//
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function () {
  /* 
  1 = Americano, incrementa valor en 1.15
  2 = Asiático, incrementa valor en 1.05
  3 = Europa, incrementa valor en 1.35 
  */

  let cantidad;
  const base = 2000;

  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }

  // Leer el año
  const diferencia = new Date().getFullYear() - this.year;

  // Cada año que la diferencia es mayor, el costo del valor del seguro va a reducirse un 3%
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /* 
    Si el seguro es básico se multiplica por un 30% (1.3) mas
    Si el seguro es completo se multiplica por un 50% (1.5) mas
  */
  if (this.tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  return cantidad;
};

// Objeto para la Interfaz de Usuario "UI"
function UI() {}

// LLena las opciones de los años, es decir genera el HTML, este es el primer prototype de la interfaz "UI"
UI.prototype.llenarOpciones = function () {
  const max = new Date().getFullYear(), //.getFullYear() nos trae el año actual 2023
    min = max - 20;

  const selecYear = document.querySelector("#year");

  //Con un ciclo for iteramos sobe el año maximo "max" hasta el año minimo "min" creando las diferentes opciones del elemento "select"
  for (let i = max; i >= min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selecYear.appendChild(option);
  }
};

// Prototype 2 que muestra alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
  const div = document.createElement("div");

  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }

  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  // Insertamos el div en el HTML
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

//
UI.prototype.mostrarResultado = (total, seguro) => {
  // Destructuring de seguro
  const { marca, year, tipo } = seguro;

  let nombreMarca;

  //Switch que evalúa la marca
  switch (marca) {
    case "1":
      nombreMarca = "Americano";
      break;
    case "2":
      nombreMarca = "Asiático";
      break;
    case "3":
      nombreMarca = "Europeo";
      break;
    default:
      break;
  }

  // Crear resultado
  const div = document.createElement("div");
  div.classList.add("mt-10");

  div.innerHTML = `
    <p class="header">Tu resumen</p>
    <p class="font-bold">Marca: <span class="font-normal">${nombreMarca}</span></p>
    <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
  `;

  const resultadoDiv = document.querySelector("#resultado");

  //Mostrar el spinner
  const spinner = document.querySelector("#cargando");
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none"; // Se borra el Spinner
    resultadoDiv.appendChild(div); //Se muestra el div después de que el spinner halla sido borrado
  }, 3000);
};

// Instanciamos un objeto de "UI"
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); //Llenamos el elemento "select" con los años
});

eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  // Leer la marca seleccionada
  const marca = document.querySelector("#marca").value;

  // Leer el año seleccionado
  const year = document.querySelector("#year").value;

  // Leer el tipo de seguro seleccionado, que es un input de tipo radio de HTML
  const tipo = document.querySelector("input[name='tipo']:checked").value;

  // VALIDACIONES
  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    return;
  }
  ui.mostrarMensaje("Cotizando...", "exito");

  // Ocultar las cotizaciones previas
  const resultados = document.querySelector("#resultado div");
  if (resultados != null) {
    resultados.remove();
  }

  // Instanciamos un objeto de "Seguro"
  const seguro = new Seguro(marca, year, tipo);
  const total = seguro.cotizarSeguro();

  // Utilizar prototype que va a cotizar el seguro
  ui.mostrarResultado(total, seguro);
}
