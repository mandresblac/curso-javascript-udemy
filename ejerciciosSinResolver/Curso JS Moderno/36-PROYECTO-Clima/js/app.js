const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

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
    main: { temp, temp_max, temp_min },
  } = datos;

  const centigrados = kelvinACentigrados(temp);

  const actual = document.createElement("p");
  actual.innerHTML = `${centigrados} &#8451;`; //&#8451; es una entidad HTML que genera °C
  actual.classList.add("font-bold", "text-6xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(actual);

  resultado.appendChild(resultadoDiv);
}

// Convertir temperatura de grados Kelvin (273.15) a Centígrados
const kelvinACentigrados = (grados) => parseInt(grados - 273.15);

function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
