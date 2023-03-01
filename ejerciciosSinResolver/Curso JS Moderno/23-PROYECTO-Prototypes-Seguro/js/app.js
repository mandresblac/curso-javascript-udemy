//-------------------- CONSTRUCTORES --------------------//
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

// Objeto para la Interfaz de Usuario "UI"
function UI(){};

// LLena las opciones de los años, es decir genera el HTML, este es el primer prototype de la interfaz "UI"
UI.prototype.llenarOpciones = function () {
    const max = new Date().getFullYear(),//.getFullYear() nos trae el año actual 2023
        min = max - 20;

    const selecYear = document.querySelector("#year");

    //Con un ciclo for iteramos sobe el año maximo "max" hasta el año minimo "min" creando las diferentes opciones del elemento "select"
    for (let i = max; i >= min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selecYear.appendChild(option);
    };
};

// Prototype 2 que muestra alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement("div");

    if(tipo === "error"){
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

// Instanciamos un objeto de "UI"
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();//llenamos el elemento "select" con los años
});

eventListeners();
function eventListeners(){
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
};

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector("#marca").value;

    // Leer el año seleccionado
    const year = document.querySelector("#year").value;

    // Leer el tipo de seguro seleccionado, que es un input de tipo radio de HTML
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    // VALIDACIONES
    if(marca === "" || year === "" || tipo === ""){
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    }
    ui.mostrarMensaje("Cotizando...", "exito");

    // Instanciamos un objeto de "Seguro"

    // Utilizar prototype que va a cotizar el seguro
};