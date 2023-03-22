const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

//onload es lo mismo que DOMContentLoaded
window.onload = () => {
    formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector("#termino").value;

    //Validación
    if (terminoBusqueda === "") {
        mostrarAlerta("Agrega un término de búsqueda");
        return; //Evita poner un else
    }
};

function mostrarAlerta(mensaje) {

    const existeAlerta = document.querySelector(".bg-red-100")

    //Validacion para que solo genere una alerta y no multiples, es decir limpia el HTML
    if (!existeAlerta) {
        const alerta = document.createElement("p");
        alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center");//Clases de Tailwind Css

        alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        //Despues de 3 segundos eliminamos la alerta
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
};


