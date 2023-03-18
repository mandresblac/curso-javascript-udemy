// Fetch API consumir datos desde un txt...
// Con fetch APi se pueden recibir o enviar datos

const cargarTxtBtn = document.querySelector("#cargarTxt");

cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("data/datos.txt") // URL de donde van a venir o, a donde se van a enviar los datos
    .then((respuesta) => {
      console.log(respuesta);

      console.log(respuesta.headers.get("Content-Type"));
      console.log(respuesta.status); // Estado
      console.log(respuesta.statusText); //estado en ingles
      console.log(respuesta.url); // URL a la que consultamos
      console.log(respuesta.type); // Tipo de consulta que se esta realizando

      // Hay que decirle que método vamos a utilizar...

      // Hay 2 JSON o Texto, en el siguiente video vemos jSON pero esto es un texto

      return respuesta.text(); // Que este mal escrito
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}
