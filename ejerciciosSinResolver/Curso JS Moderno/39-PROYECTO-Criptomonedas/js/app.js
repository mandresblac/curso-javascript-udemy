const criptomonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

// Objeto que se llena conforme el usuario valla seleccionando algo
const objBusqueda = {
  moneda: '',
  criptomoneda: ''
};

// Crear promesa
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();

  formulario.addEventListener('submit', submitFormulario);
  criptomonedasSelect.addEventListener('change', leerValor);
  monedaSelect.addEventListener('change', leerValor);
});

function consultarCriptomonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptomonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptomonedasSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  // Extraer los valores
  const { moneda, criptomoneda} = objBusqueda;

  // Validación
  if(moneda === '' || criptomoneda === '') {
      mostrarAlerta('Ambos campos son obligatorios');
      return; //Cortamos ejecución de la función con un return
  }

  //Consultamos la API con los resultados
  consultarAPI();
}

function mostrarAlerta(mensaje) {
  const existeError = document.querySelector(".error");

  // Validacion para que el mensaje de alerta solo aparesca una vez y no se repita
  if(!existeError) {
    // Crea el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');//Agregamos estilos

    // Agregamos mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el DOM
    formulario.appendChild(divMensaje);

    // Quitar el alert despues de 3 segundos
    setTimeout( () => {
      divMensaje.remove();
    }, 3000);
  }
}

function consultarAPI() {
  const { moneda, criptomoneda} = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  fetch(url)
      .then(respuesta => respuesta.json())
      .then(cotizacion => {
          mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);

      });
}

function mostrarCotizacionHTML(cotizacion) {

  // Limpiamos el HTML para que no se repita el mensaje mas de una vez
  limpiasHtml();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  // Precio
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = ` El precio es: <span>${PRICE}</span>`;

  // Precio mas alto del dia
  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `<p>Precio mas alto del dia: <span>${HIGHDAY}</span></p>`

  // Precio mas bajo del dia
  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `<p>Precio mas bajo del dia: <span>${LOWDAY}</span></p>`

  // Variación ultimas 24 horas
  const ultimasHoras = document.createElement("p");
  ultimasHoras.innerHTML = `<p>Variación ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`

  // Precio mas bajo del dia
  const ultimaActualizacion = document.createElement("p");
  ultimaActualizacion.innerHTML = `<p>Ultima actualización: <span>${LASTUPDATE}</span></p>`

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimaActualizacion);
}

function limpiasHtml() {
  while(resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  limpiasHtml();

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  `;

  resultado.appendChild(spinner);
}