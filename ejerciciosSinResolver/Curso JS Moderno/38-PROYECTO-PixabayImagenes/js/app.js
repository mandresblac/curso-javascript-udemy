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

  buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector(".bg-red-100");

  //Validacion para que solo genere una alerta y no multiples, es decir limpia el HTML
  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    ); //Clases de Tailwind Css

    alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

    formulario.appendChild(alerta);

    //Después de 3 segundos eliminamos la alerta
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes(termino) {
  const key = "34622719-b085ead1d49a26ab9d1e11cb0";
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      mostrarImagenes(resultado.hits);
    });
}

function mostrarImagenes(imagenes) {
  console.log(imagenes);
  //Para eliminar los resultado previos, es decir limpiar el HTML
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }

  //Iteramos sobre ele arreglo de imágenes y construir el HTML
  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;

    resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}" >
                <div class="p-4">
                    <p></p>
                </div>
            </div>  
        </div>
    `;
  });
}
