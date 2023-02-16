// No siempre estarás haciendo traversing a tu dom,

const btnFlotante = document.querySelector(".btn-flotante");

const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    // this hace referencia a btnFlotante que es el botón
    this.classList.remove("activo");
    this.textContent = "Idioma y Moneda";
  } else {
    footer.classList.add("activo");
    // this hace referencia a btnFlotante que es el botón
    this.classList.add("activo");
    this.textContent = "X Cerrar";
  }
}
