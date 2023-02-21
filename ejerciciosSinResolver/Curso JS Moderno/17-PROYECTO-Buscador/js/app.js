// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const maxYear = new Date().getFullYear(); //.getFullYear() nos trae el año actual
const minYear = maxYear - 10;

// Generamos objeto con la búsqueda para filtra los objetos del array que están en el archivo db.js
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  // Muestra los automóviles al cargar
  mostrarAutos();

  // LLena las opciones de años
  llenarSelect();
});

// EVENT LISTENERS PARA LOS SELECT DE BÚSQUEDA
//Evento change para cuando cambia el select
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
});

// Funciones
function mostrarAutos() {
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

// Genera los años de la etiqueta Select Año
function llenarSelect() {
  for (let i = maxYear; i >= minYear; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año a la etiqueta select
  }
}
