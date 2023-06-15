// VARIABLES
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor para los resultados
const resultado = document.querySelector("#resultado");

// Variables de año
const maxYear = new Date().getFullYear(); //.getFullYear() nos trae el año actual
const minYear = maxYear - 10;
// console.log(maxYear);
// console.log(minYear);

// Generamos objeto con la búsqueda para filtrar los objetos del array que están en el archivo db.js
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  // Muestra los automóviles al cargar
  mostrarAutos(autos);

  // LLena las opciones de años de la etiqueta Select "Año"
  llenarSelect();
});

// EVENT LISTENERS PARA LOS SELECT DE BÚSQUEDA
// Evento change para cuando cambia el select
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);

  filtrarAuto();
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;

  filtrarAuto();
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;

  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);

  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;

  filtrarAuto();
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;

  filtrarAuto();
});

// FUNCIONES
function mostrarAutos(autos) {
  limpiarHtml(); //Elimina el HTML previo

  autos.forEach((auto) => {
    // Desestructuramos el parámetro auto
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    const autoHtml = document.createElement("p"); //Creamos un elemento párrafo de HTML para cada automóvil
    autoHtml.textContent = `
    ${marca} ${modelo} - ${year} - ${puertas}  Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    //Insertamos el resultado en el HTML
    resultado.appendChild(autoHtml);
  });
}

// Función que limpia el HTML
function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

// Genera los años de la etiqueta Select Año
function llenarSelect() {
  for (let i = maxYear; i >= minYear; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año a la etiqueta select
  }
}

// Función que filtra en base a la búsqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  // Muestra mensaje cuando no hay resultado de búsqueda
  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  //Limpiamos primero el Documento HTML
  limpiarHtml();

  //Luego de limpia el HTML generamos un div con un mensaje de error
  const noResultado = document.createElement("div"); //Creamos un elemento div de HTML
  noResultado.classList.add("alerta", "error"); //Agregamos clases al elemento div
  noResultado.textContent = "No hay resultados, intenta con otros términos de búsqueda"; //Generamos texto en el elemento div
  resultado.appendChild(noResultado); //Añadimos el div "noResultado" al elemento resultado del HTML
}

function filtrarMarca(auto) {
  //Desestructuramos datosBusqueda
  const { marca } = datosBusqueda;

  if (marca) {
    return auto.marca === marca; //Filtra por la selección que halla realizado el usuario
  }
  return auto; //Si el usuario no ha seleccionado nada retornamos el auto completo
}

function filtrarYear(auto) {
  //Desestructuramos datosBusqueda
  const { year } = datosBusqueda;

  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  //Desestructuramos datosBusqueda
  const { minimo } = datosBusqueda;

  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  //Desestructuramos datosBusqueda
  const { maximo } = datosBusqueda;

  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  //Desestructuramos datosBusqueda
  const { puertas } = datosBusqueda;

  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

function filtrarTransmision(auto) {
  //Desestructuramos datosBusqueda
  const { transmision } = datosBusqueda;

  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  //Desestructuramos datosBusqueda
  const { color } = datosBusqueda;

  if (color) {
    return auto.color === color;
  }
  return auto;
}
