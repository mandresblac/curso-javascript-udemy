//La API Speech Recognition permite que cuando yo hable, javascript pueda enviar lo que yo estoy diciendo a través de un micrófono, hacia mi pagina web

const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // 1- start recognition - start
  recognition.start();

  // 2- This runs when the speech recognition service starts - onstart
  recognition.onstart = function () {
    salida.classList.add("mostrar");
    salida.textContent = "Escuchando...";
  };

  // 3- Esto se ejecuta cuando hallamos terminado de hablar - onspeechend
  recognition.onspeechend = function () {
    salida.textContent = "Se dejo de grabar";
    recognition.stop();
  };

  // This runs when the speech recognition service returns result - onresult
  recognition.onresult = function (e) {
    console.log(e.results);

    const { confidence, transcript } = e.results[0][0];

    const speech = document.createElement("p");
    speech.innerHTML = `Grabado: ${transcript}`;

    // Para el porcentaje de fiabilidad
    const seguridad = document.createElement("p");
    seguridad.innerHTML = `Seguridad:  ${parseInt(confidence * 100)}%`;

    salida.appendChild(speech);
    salida.appendChild(seguridad);
  };
}
