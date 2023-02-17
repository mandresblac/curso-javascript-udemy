// Variables
const carrito = document.querySelector("#carrito"),
  contenedorCarrito = document.querySelector("#lista-carrito tbody"),
  vaciarCarritoBtn = document.querySelector("#vaciar-carrito"),
  listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = []; //Arreglo vació que se va llenando con los artículos seleccionados por el usuario

//Función para registrar o cargar todos los EventListeners
function cargarEventListeners() {
  //Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

//Llamamos la función cargarEvenListeners()
cargarEventListeners();

//Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenimos la acción por default para que no haga scroll hacia arriba

  //Para prevenir el Event Bubbling, se ejecuta solamente cuando el elemento presionado tenga la clase "agregar-carrito"
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement; //.parentElement para ir al elemento padre
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
  //console.log(curso);

  // Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Agrega elementos al arreglo carrito "articulosCarrito"
  articulosCarrito = [...articulosCarrito, infoCurso];

  console.log(articulosCarrito);

  carritoHtml();
}

// Muestra y genera el carrito de compras en el documento HTML
function carritoHtml() {
  // Limpiar el HTML
  limpiarHtml();

  // Iteramos con un forEach() sobre el arreglo "articulosCarrito" y genera el HTML
  articulosCarrito.forEach((curso) => {
    // Creamos una fila con el contenido del curso en el HTML
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        ${curso.titulo}
      </td>`;

    // Agrega el HTML del carrito en la etiqueta tbody del HTML
    contenedorCarrito.appendChild(row);
  });
}

// Eliminar los cursos de tbody
function limpiarHtml() {
  // Forma lenta de eliminar HTML
  //contenedorCarrito.innerHTML = "";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
