// Async Await Con una API...
const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

/* PROMISE */
/* function obtenerDatos() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
} */

/* ASYNC - AWAIT */
/* async function obtenerDatos() {
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  console.log(resultado);
} */

/* ASYNC-AWAIT CON TRY-CATCH */
async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
