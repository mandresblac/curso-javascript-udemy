function iniciarApp() {

  const resultado = document.querySelector("#resultado");
  const selectCategorias = document.querySelector("#categorias");

  if(selectCategorias) {
    selectCategorias.addEventListener("change", seleccionarCategoria); // El evento "change" se utiliza con un elemento "select" de HTML

    // Arranca la aplicación
  obtenerCategorias();
  }

  const favoritosDiv = document.querySelector(".favoritos");
  if (favoritosDiv) {
    obtenerFavoritos();
  }


  const modal = new bootstrap.Modal("#modal", {});

  function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    // fetch es como un llamado a una url
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarCategorias(resultado.categories));
  }

  function mostrarCategorias(categorias = []) {
    categorias.forEach((categoria) => {
      // Desestructuramos categoria
      const { strCategory } = categoria;

      const option = document.createElement("option");
      option.value = strCategory;
      option.textContent = strCategory;

      // Agregamos el elemento "option" a selectCategorias
      selectCategorias.appendChild(option);
    });
  }

  function seleccionarCategoria(e) {
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarRecetas(resultado.meals));
  }

  function mostrarRecetas(recetas = []) {
    limpiarHtml(resultado);

    const heading = document.createElement("h2");
    heading.classList.add("text-center", "text-black", "my-5");
    heading.textContent = recetas.length ? "Resultados" : "No hay resultados";
    resultado.appendChild(heading);

    //Iterar en los resultados
    recetas.forEach((receta) => {
      const { idMeal, strMeal, strMealThumb } = receta;

      const recetaContenedor = document.createElement("div");
      recetaContenedor.classList.add("col-md-4");

      const recetaCard = document.createElement("div");
      recetaCard.classList.add("card", "mb-4");

      // Creamos imagen
      const recetaImagen = document.createElement("img");
      recetaImagen.classList.add("card-img-top");
      recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`;
      recetaImagen.src = strMealThumb ?? receta.img;

      // Creamos cuerpo de la receta
      recetaCardBody = document.createElement("div");
      recetaCardBody.classList.add("card-body");

      // Creamos un Heading
      const recetaHeading = document.createElement("h3");
      recetaHeading.classList.add("card-title", "mb-3");
      recetaHeading.textContent = strMeal ?? receta.titulo;

      // Creamos un botón
      const recetaButton = document.createElement("button");
      recetaButton.classList.add("btn", "btn-danger", "w-100");
      recetaButton.textContent = "Ver receta";
      //recetaButton.dataset.bsTarget = "#modal";
      //recetaButton.dataset.bsToggle = "modal";
      recetaButton.onclick = function () {
        seleccionarReceta(idMeal ?? receta.id);
      };

      // Inyectamos en el documento HTML
      recetaCardBody.appendChild(recetaHeading);
      recetaCardBody.appendChild(recetaButton);

      recetaCard.appendChild(recetaImagen);
      recetaCard.appendChild(recetaCardBody);

      recetaContenedor.appendChild(recetaCard);

      // Insertamos en el elemento con id "resultado" el elemento recetaContenedor que contiene todo
      resultado.appendChild(recetaContenedor);
    });
  }

  function seleccionarReceta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarRecetaModal(resultado.meals[0]));
  }

  function mostrarRecetaModal(receta) {
    const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

    // Añadir contenido al modal
    const modalTitle = document.querySelector(".modal .modal-title");
    const modalBody = document.querySelector(".modal .modal-body");

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
      <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>
      <h3 class="my-3">Ingredientes y cantidades</h3>
    `;

    // Creamos un elemento "ul" de HTML
    const listGroup = document.createElement("ul");
    listGroup.classList.add("list-group");

    // Mostrar cantidades e ingredientes
    for (let i = 1; i <= 20; i++) {
      // Validamos si hay algo
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`];
        const cantidad = receta[`strMeasure${i}`];

        // Creamos un elemento "li" de HTML
        const ingredienteLi = document.createElement("li");
        ingredienteLi.classList.add("list-group-item");
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

        // Agregamos el elemento "li" al "ul"
        listGroup.appendChild(ingredienteLi);
      }

    }

    modalBody.appendChild(listGroup);

    // Traemos del documento HTML el elemento con clase ".modal-footer"
    const modalFooter = document.querySelector(".modal-footer")

    // Limpiamos el modalFooter para que aparescan solo dos botones
    limpiarHtml(modalFooter)

    // Botones de favorito y cerrar
    const btnFavorito = document.createElement("button");
    btnFavorito.classList.add("btn", "btn-danger", "col");
    btnFavorito.textContent = existeStorage(idMeal) ? "Eliminar Favorito": "Guardar favorito";

    // Almacenar y eliminar elementos del localStorage
    btnFavorito.onclick = function () {
      //Eliminando
      if(existeStorage(idMeal)) {
        eliminarFavorito(idMeal);
        btnFavorito.textContent = "Guardar favorito";
        mostrarToast("Eliminado correctamente");
        return;
      };

      //Agregando
      agregarFavorito({
        id: idMeal,
        titulo: strMeal,
        img: strMealThumb
      });
      btnFavorito.textContent = "Eliminar favorito";
      mostrarToast("Agregado correctamente");
    }

    const btnCerrarModal = document.createElement("button");
    btnCerrarModal.classList.add("btn", "btn-secondary", "col");
    btnCerrarModal.textContent = "Cerrar";

    //Para darle la funcionalidad al boton de cerrar
    btnCerrarModal.onclick = () => {
      modal.hide(); //Para cerrar el modal
    }

    // Agregamos botones al footer
    modalFooter.appendChild(btnFavorito);
    modalFooter.appendChild(btnCerrarModal);

    // Muestra el modal
    modal.show();
  }

  function agregarFavorito(receta) {
    //Si no existe le agrega un arreglo ?? []
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];// JSON.parse() convierte formato JSON a objeto de Javascript

    localStorage.setItem("favoritos", JSON.stringify([...favoritos, receta]));
  }

  function eliminarFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    const nuevosaFavoritos = favoritos.filter(favorito => favorito.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(nuevosaFavoritos));
  }

  function existeStorage(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritos.some(favorito => favorito.id === id);
  }

  function mostrarToast(mensaje) {
    const toastDiv = document.querySelector("#toast");
    const toastBody = document.querySelector(".toast-body");

    //Generamos una instancia de Toast
    const toast = new bootstrap.Toast(toastDiv);

    toastBody.textContent = mensaje;
    toast.show();
  }

  function obtenerFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    if (favoritos.length) {
      mostrarRecetas(favoritos);
      return;
    }

    const noFavoritos = document.createElement("p");
    noFavoritos.textContent = "No hay favoritos aún";
    noFavoritos.classList.add("fs-4", "text-center", "font-bold", "mt-5");

    favoritosDiv.appendChild(noFavoritos);
  }

  function limpiarHtml(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
