// .repeat() te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas. ';
const texto = 'en Promoción '.repeat(3);

console.log(texto);
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);

// .split() permite dividir un string
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));
