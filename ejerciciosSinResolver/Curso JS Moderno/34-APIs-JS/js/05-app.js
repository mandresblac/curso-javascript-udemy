// Detectar si nuestra página se esta ejecutando en primer o segundo plano con la API visibilityState y el avento "visibilitychange".

document.addEventListener("visibilitychange", () => {
  //console.log(document.visibilityState);

  if (document.visibilityState === "visible") {
    console.log("Función para reproducir el video....");
  } else {
    console.log("Pausando el video...");
  }
});

// Existen muchas API's nuevas, la de geolocalización no es tan nueva y es de las más populares, también Fetch API que estaremos viendo en el siguiente capítulo
