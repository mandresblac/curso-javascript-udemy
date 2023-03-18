// ejecutar el sitio web en pantalla completa...

const abrirBtn = document.querySelector("#abrir-pantalla-completa");
const salirBtn = document.querySelector("#salir-pantalla-completa");

abrirBtn.addEventListener("click", pantallaCompleta);
salirBtn.addEventListener("click", cerrarPantallaCompleta);

function pantallaCompleta() {
  document.documentElement.requestFullscreen(); //requestFullscreen() pone en modo pantalla completa, se puede colocar una imagen o un video que se abrirá en pantalla completa en el navegador
}

function cerrarPantallaCompleta() {
  document.exitFullscreen(); //exitFullscreen() para salir de modo pantalla completa
}
