// --------------------- VARIABLES -----------------------------------
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = []; //Arreglo vació que almacena los tweets

// ---------------------- EVENT LISTENERS -----------------------------
eventListener();

function eventListener() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  // Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    //Traemos los tweets que están en local storage con formato .JSON y los convertimos a un objeto javascript con JSON.parse() si no hay tweets se asigna como una array vació "[]" para que no nos de "null"
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);

    crearHtml();
  });
}

// ----------------------- FUNCIONES ----------------------------------
function agregarTweet(e) {
  e.preventDefault(); // Prevenimos la acción por defecto

  // TextArea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value; //Accedemos al valor

  // Validación de TextArea
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vació");
    return; // return evita que se ejecuten mas lineas de código, es decir sale de la función agregarTweet()
  }

  //Generamos un identificador único de tweets
  const tweetObj = {
    id: Date.now(),
    tweet, // tweet: tweet
  };

  // Agregamos contenido al arreglo de tweets
  tweets = [...tweets, tweetObj]; //tweetObj es lo que el usuario esta escribiendo

  //Después de agregar contenido al arreglo "tweets" generamos o creamos código HTML
  crearHtml();

  //Reiniciamos el formulario
  formulario.reset();

  //Establecemos el foco en el elemento textArea con id "tweet"
  document.querySelector("#tweet").focus();
}

//Mostrar mensaje de error
function mostrarError(error) {
  //Generamos código HTML
  const mensajeError = document.createElement("p"); //Creamos un elemento "p" de HTML
  mensajeError.textContent = error; //Muestra como mensaje el parámetro error que le pasamos en la función agregarTweet()
  mensajeError.classList.add("error"); //Agregamos estilos CSS del archivo custom.css, clase .error

  //Definimos ubicación del mensaje de error en el Documento HTML
  const contenido = document.querySelector("#contenido"); //div con "id" contenido
  contenido.appendChild(mensajeError); //Agregamos mensajeError a contenido

  //Después de 3 segundos eliminamos o removemos el mensaje de error con un temporizador como setTimeout()
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//Muestra un listado de los tweets
function crearHtml() {
  //Primero limpiamos el HTML para que no se repitan los tweets
  limpiarHtml();

  //Ejecutamos una validación en caso de que el arreglo "tweets" tenga algún contenido, ya que inicia vació y generamos el código HTML, si esta vació, no ejecuta nada
  if (tweets.length > 0) {
    //Iteramos con un forEach() sobre el arreglo tweets
    tweets.forEach( tweet => {
      //Agregamos botón para eliminar el tweet
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet"); //Agregamos estilos CSS del archivo custom.css, clase .borrar-tweet
      //Agregamos texto
      btnEliminar.textContent = "X";
      //Añadimos función para eliminar el "li"
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      //Creamos el código HTML
      const li = document.createElement("li");
      //Añadimos texto
      li.textContent = tweet.tweet; //Accedemos a la clave "tweet" del objeto "tweetObj"
      //Añadimos el botón a la etiqueta "li"
      li.appendChild(btnEliminar);
      //Insertamos "li" en el elemento "listaTweets" del Documento HTML
      listaTweets.appendChild(li);
    });
  }

  // Llamada a la función  que agrega los tweets al local storage del navegador
  sincronizarStorage();
}

// Agrega los tweets actuales al local storage del navegador
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Limpiamos HTML
function limpiarHtml() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}

//Elimina un tweet
function borrarTweet(id) {
  tweets = tweets.filter( tweet => tweet.id !== id); // Muestra todos los tweets ecepto el que tiene id diferente, es decir: tweet.id !== id

  crearHtml();
}
