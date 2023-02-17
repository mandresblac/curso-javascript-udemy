// En este video estaremos viendo eventos que ocurren con el mouse

const nav = document.querySelector(".navegacion");

// vamos a registrar el eventListener para el nav..

nav.addEventListener("mouseenter", () => {
  console.log("entrando a la navegación");

  nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseout", () => {
  console.log("saliendo de la navegacion");

  nav.style.backgroundColor = "transparent";
});

// otros eventos abarcan...

// mousedown - cuando presionamos, es similar a click, de hecho es probablemente el más utilizado
nav.addEventListener("mousedown", () => {
  console.log("Has presionado el botón");
});

// mouseup - Se ejecuta cuando suelto o dejo de presionar el botón del mouse
nav.addEventListener("mouseup", () => {
  console.log("Has soltado el botón");
});

// dblclick - doble click como cuando quieres abrir un archivo
nav.addEventListener("dblclick", () => {
  console.log("Has dado doble click en el botón");
});
