// Veamos lo que se conoce como Event Bubbling...

// Event Bubbling es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

// tenemos diferentes cards, con información...
//  vamos a crear 3 selectores

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
  e.stopPropagation(); // .stopPropagation() detiene la propagación del evento o Event Bubbling
  console.log("click en card");
});
infoDiv.addEventListener("click", (e) => {
  e.stopPropagation(); // .stopPropagation() detiene la propagación del evento o Event Bubbling
  console.log("click en info");
});

titulo.addEventListener("click", (e) => {
  e.stopPropagation(); // .stopPropagation() detiene la propagación del evento o Event Bubbling
  console.log("click en titulo");
});
