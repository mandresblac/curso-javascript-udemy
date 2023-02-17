// Variables
const carrito = document.querySelector("#carrito"),
  contenedorCarrito = document.querySelector("#lista-carrito tbody"),
  vaciarCarritoBtn = document.querySelector("#vaciar-carrito"),
  listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = []; //Arreglo vació que se va llenando con los artículos seleccionados por el usuario

//Llamamos la función cargarEvenListeners()
cargarEventListeners();

//Función para registrar o cargar todos los EventListeners
function cargarEventListeners() {
  //Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  //Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    // Reiniciar el arreglo articulosCarrito, es decir dejarlo vacio
    articulosCarrito = []; // Reseteamos el arreglo

    limpiarHtml(); // Eliminamos todo el HTML
  });
}

//Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenimos la acción por default para que no haga scroll hacia arriba

  //Para prevenir el Event Bubbling, se ejecuta solamente cuando el elemento presionado tenga la clase "agregar-carrito", nos aseguramos que el usuario presione el elemento con clase "agregar-carrito"
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement; //.parentElement para ir al elemento padre
    leerDatosCurso(cursoSeleccionado);
  }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHtml(); // Iterar sobre le carrito y mostrar su HTML
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
  //console.log(curso);

  // Creamos un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Comprobamos si el elemento ya existe en el carrito, si ya existe no lo agregamos al carrito solo actualizamos la cantidad, si no existe si lo agregamos al carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // Retorna el objeto actualizado
      } else {
        return curso; // Retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agrega elementos al arreglo carrito "articulosCarrito"
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  //Mostramos en el documento HTML
  carritoHtml();
}

// Muestra e imprime el carrito de compras en el documento HTML
function carritoHtml() {
  // Limpiamos el HTML para que no se repitan o dupliquen los elementos
  limpiarHtml();

  // Recorremos con un forEach() el arreglo "articulosCarrito" y generamos el HTML
  articulosCarrito.forEach((curso) => {
    //Desestructuramos el objeto infoCurso
    const { imagen, titulo, precio, cantidad, id } = curso;
    // Creamos una fila con el contenido del curso en el HTML
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100">
      </td>
      <td>${titulo}</td>
      <td style="text-align: center;">${precio}</td>
      <td style="text-align: center;">${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>
      `;

    // Agrega el HTML del carrito en la etiqueta tbody del HTML
    contenedorCarrito.appendChild(row);
  });
}

// Eliminar los cursos de la etiqueta tbody de HTML
function limpiarHtml() {
  // Forma lenta de eliminar código HTML
  //contenedorCarrito.innerHTML = "";

  //Forma rápida de eliminar código HTML
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
