// En este video estaremos viendo eventos que suceden con el teclado, es decir cuando el usuario escribe en un input...

// tenemos un formulario
const busqueda = document.querySelector(".busqueda");

// keydown  - Se ejecuta cuando presionas una tecla
busqueda.addEventListener("keydown", () => {
  console.log("Presionaste una tecla");
});

// keyup - Cuando sueltas la tecla despues de presionarla
busqueda.addEventListener("keyup", () => {
  console.log("Soltaste la tecla");
});

// blur - cuando sales del input - ideal para validación de formularios
busqueda.addEventListener("blur", () => {
  console.log("Estas afuera");
});

// También hay eventos para cortar copiar y pegar

// copy - copiar texto
busqueda.addEventListener("copy", () => {
  console.log("Copiaste el texto");
});
// paste - pegar texto
busqueda.addEventListener("paste", () => {
  console.log("Pegaste un texto");
});

// cut - cortar texto
busqueda.addEventListener("cut", () => {
  console.log("Cortaste el texto");
});

// input - cuando se ejecutan todas las anteriores, copiar, pegar y cortar excepto el blur
busqueda.addEventListener("input", () => {
  console.log("Hiciste un input");
});

// Ahora, no tiene mucha utilidad enviar a la consola un mensaje no? lo ideal seria saber el texto que se escribe el usuario o poderlo leerlo

busqueda.addEventListener("input", (e) => {
  console.log(e); // Mucha información...
  console.log(e.type); // Te dira sobre que elemento estamos trabajando...
  console.log(e.target); // el input completo...
  console.log(e.target.value); // Para conocer lo que el usuario escribe
});

// También puede ser como función...

busqueda.addEventListener("input", leerInput);

function leerInput(e) {
  console.log(e); // Mucha información...
  console.log(e.type); // Te dira sobre que elemento estamos trabajando...
  console.log(e.target); // el input completo...
  console.log(e.target.value); // lo que el usuario escribe...
}
