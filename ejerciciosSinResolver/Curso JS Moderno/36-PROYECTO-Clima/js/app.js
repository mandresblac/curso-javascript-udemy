// ------------------ VARIABLES Y SELECTORES ------------------ //

const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

// ------------------------- EVENTOS ------------------------- //

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

// ------------------------ FUNCIONES ------------------------ //

function buscarClima(e) {
  e.preventDefault();

  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  // Validación
  if (ciudad === "" || pais === "") {
    // Hubo un error
    mostrarError("Ambos campos son obligatorios");
    return; // Detenemos la ejecución del código con un return
  }

  // Consultar la Api
  consultarApi(ciudad, pais);

  // Resetea el formulario después de 5 segundo (5000)
  setTimeout(() => {
    formulario.reset();
  }, 5000);

  //Pone el foco en el elemento HTML con id ciudad
  document.querySelector("#ciudad").focus();
}

function mostrarError(mensaje) {
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    //Creamos alerta
    const alerta = document.createElement("div");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.innerHTML = `
    <strong class="font-bold">¡Error!</strong>
    <span class="block">${mensaje}</span>
  `;

    container.appendChild(alerta);

    // Se elimina la alerta después de 3 segundos
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function consultarApi(ciudad, pais) {
  const appId = "ee3f2ff2083c3e9b91fda76ec8a00ea1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

  spinner(); // Muestra un spinner de carga

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      limpiarHtml(); // Limpiar el HTML previo
      if (datos.cod === "404") {
        mostrarError("Ciudad no encontrada");
        return;
      }

      // Imprime la respuesta en el HTML
      mostrarClima(datos);
    });
}

function mostrarClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const centigrados = kelvinACentigrados(temp);
  const max = kelvinACentigrados(temp_max);
  const min = kelvinACentigrados(temp_min);

  // Nombre de la ciudad
  const nombreCiudad = document.createElement("p");
  nombreCiudad.textContent = `Temperatura en ${name}`;
  nombreCiudad.classList.add("font-bold", "text-2xl");

  // Temperatura actual
  const actual = document.createElement("p");
  actual.innerHTML = `${centigrados} &#8451;`; //&#8451; es una entidad HTML que genera °C
  actual.classList.add("font-bold", "text-6xl");

  // Temperatura maxima
  const tempMaxima = document.createElement("p");
  tempMaxima.innerHTML = `Max: ${max} &#8451;`; //&#8451; es una entidad HTML que genera °C
  tempMaxima.classList.add("text-xl");

  // Temperatura minima
  const tempMinima = document.createElement("p");
  tempMinima.innerHTML = `Min: ${min} &#8451;`; //&#8451; es una entidad HTML que genera °C
  tempMinima.classList.add("text-xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");

  resultadoDiv.appendChild(nombreCiudad); //Agregamos nombre de la Ciudad
  resultadoDiv.appendChild(actual); //Agregamos temperatura actual
  resultadoDiv.appendChild(tempMaxima); //Agregamos temperatura Maxima
  resultadoDiv.appendChild(tempMinima); //Agregamos temperatura Minima

  resultado.appendChild(resultadoDiv);
}

// Convertir temperatura de grados Kelvin (273.15) a Centígrados
const kelvinACentigrados = (grados) => parseInt(grados - 273.15);

function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {
  limpiarHtml(); //Limpia cualquier registro previo que halla

  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;

  resultado.appendChild(divSpinner);
}
