function iniciarApp() {
  const selectCategorias = document.querySelector("#categorias");
  const resultado = document.querySelector("#resultado");

  selectCategorias.addEventListener("change", seleccionarCategoria); // El evento "change" se utiliza con un elemento "select" de HTML

  const modal = new bootstrap.Modal("#modal", {});

  // Arranca la aplicación
  obtenerCategorias();

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
      recetaImagen.alt = `Imagen de la receta ${strMeal}`;
      recetaImagen.src = strMealThumb;

      // Creamos cuerpo de la receta
      recetaCardBody = document.createElement("div");
      recetaCardBody.classList.add("card-body");

      // Creamos un Heading
      const recetaHeading = document.createElement("h3");
      recetaHeading.classList.add("card-title", "mb-3");
      recetaHeading.textContent = strMeal;

      // Creamos un botón
      const recetaButton = document.createElement("button");
      recetaButton.classList.add("btn", "btn-danger", "w-100");
      recetaButton.textContent = "Ver receta";
      /* recetaButton.dataset.bsTarget = "#modal";
      recetaButton.dataset.bsToggle = "modal"; */
      recetaButton.onclick = function () {
        seleccionarReceta(idMeal);
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
    `;

    // Muestra el modal
    modal.show();
  }

  function limpiarHtml(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
