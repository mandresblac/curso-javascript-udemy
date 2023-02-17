// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

function cargarEventListeners() {
  //Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}
cargarEventListeners();

//Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenimos la acción por default para que no se valla hacia arriba
  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target);
  }
}
