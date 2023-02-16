// Finalmente otro tema importante cuando trabajas con el DOM, es la creación de HTML desde JavaScript..

// Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, de ahi la gente comienza a darle me gusta, así que veamos como hacerlo generar HTML desde JavaScript...

// Y no te preocupes si todo lo que vemos en este video no queda claro, estaremos practicando mucho lo que es el DOM Scripting ya con muchos otros proyectos...

// Vamos a crear un nuevo enlace... lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...

const enlace = document.createElement("a");

// Segundo paso es crear el texto del enlace no? lo haremos con textContent

enlace.textContent = "Nuevo Enlace";
console.log(enlace);

// Después vamos a asignar una ruta
enlace.href = "/nuevo-enlace";

// Agregamos un target
enlace.target = "_blank";

// Si quieres agregar una clase

enlace.classList.add("enlace");

enlace.setAttribute("data-enlace", "nuevo-enlace");

// Finalmente se agrega el enlace donde deseas mostrarlo...

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace);

console.log(enlace);

// Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards... sin duda será algo más complejo...

// crear los 3 párrafos.

// Primer párrafo
const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

console.log(parrafo1);

// Segundo párrafo
const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

console.log(parrafo2);

// Tercer parrafo...
const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

console.log(parrafo3);

// Función que crea un párrafo
/* function crearParrafo(etiqueta, texto, clase) {
  let parrafo = document.createElement(etiqueta);
  parrafo.textContent = texto;
  parrafo.classList.add(clase);
  console.log(parrafo);
}
crearParrafo("p", "Concierto", "categoria"); */

// crear el div...
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1); //Agregamos a info el parrafo1
info.appendChild(parrafo2); //Agregamos a info el parrafo2
info.appendChild(parrafo3); //Agregamos a info el parrafo3

console.log(info);

// Vamos a crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.alt = "texto alternativo";

console.log(imagen);

// Crear el Card padre
const card = document.createElement("div");
card.classList.add("card");

// Vamos a asignar la imagen y el info al card
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

// Insertamos el card en el HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card); // Agregamos el card al como ultimo elemento

//Si queremos agregar el card al inicio utilizamos .insertBefore()
contenedor.insertBefore(card, contenedor.childNodes[0]);
