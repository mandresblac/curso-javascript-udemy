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

    //con un ciclo for iteramos sobe el año maxima "max" hasta el año minima "min" creando las diferentes opciones del elemento "select"
    for (let i = max; i >= min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selecYear.appendChild(option);
    };
};

// Instanciamos un objeto de "UI"
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();//llenamos el elemento "select" con los años
});