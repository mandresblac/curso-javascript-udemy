import { nuevoCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;

        //Validación del formulario
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        };

        if (validar(cliente)) {
            //Mostrar mensaje
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }

        nuevoCliente(cliente);
    }

    function validar(objeto) {
        //Si al menos uno de los campos esta vacio retorna false
        return !Object.values(objeto).every( input => input !== "" );
    }

})();