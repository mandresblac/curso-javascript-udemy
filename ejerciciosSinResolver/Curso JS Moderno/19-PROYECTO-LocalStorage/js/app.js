// --------------------- VARIABLES -----------------------------------
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = []; //Arreglo que almacena los tweets

// ---------------------- EVENT LISTENERS -----------------------------
eventListener();

function eventListener() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  // Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);

    crearHtml();
  });
}

// ----------------------- FUNCIONES ----------------------------------
function agregarTweet(e) {
  e.preventDefault(); // Prevenimos la acción por defecto

  // TextArea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  // Validación de TextArea
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vació");
    return; //return evita que se ejecuten mas lineas de código, es decir sale de la función agregarTweet()
  }

  const tweetObj = {
    id: Date.now(),
    tweet, // tweet: tweet
  };

  // Agregamos contenido al arreglo de tweets
  tweets = [...tweets, tweetObj]; //tweet es lo que el usuario esta escribiendo

  //Después de agregar contenido al arreglo generamos o creamos código HTML
  crearHtml();

  //Reiniciamos formulario
  formulario.reset();

  //Establecemos el foco en el elemento textArea con id "tweet"
  document.querySelector("#tweet").focus();
}

//Mostrar mensaje de error
function mostrarError(error) {
  //Generamos código HML
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error; //Muestra como mensaje el parámetro error que le pasamos en la función agregarTweet()
  mensajeError.classList.add("error"); //Agregamos estilos CSS del archivo custom.css, clase .error

  //Definimos ubicación del mensaje de error en el Documento HTML
  const contenido = document.querySelector("#contenido"); //div con "id" contenido
  contenido.appendChild(mensajeError);

  //Después de 3 segundos eliminamos o removemos el mensaje de error
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//Muestra un listado de los tweets
function crearHtml() {
  //Primero limpiamos el HTML para que no se repitan los tweets
  limpiarHtml();

  //Ejecutamos una validación en caso de que el arreglo "tweets" tenga algún contenido, ya que inicia vació
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
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
      //Definimos ubicación de los tweet en el Documento HTML
      listaTweets.appendChild(li);
    });
  }

  // Llamada a la función  que agrega los tweets al local storage
  sincronizarStorage();
}

// Agrega los tweets actuales al local storage
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
  tweets = tweets.filter((tweet) => tweet.id !== id);

  crearHtml();
}
