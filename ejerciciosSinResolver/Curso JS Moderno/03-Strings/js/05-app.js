// En este video estaremos viendo 3 métodos más .replace, .slice y .repeat

// .Replace() permite remplazar un texto especifico en un String
const producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24"));
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// Slice te va a permitir extraer,  es decir cortar, una parte de una cadena
console.log( producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto.slice(8));// Cortar desde el 8 hasta el fin
console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 10

console.log(producto.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// Existe uno similar a Slice que se llama substring, es una alternativa a Slice
console.log( producto.substring(0, 10) );

console.log( producto.substring(4, 0) );  // Si el primer número es mayor al segundo, va a cortar hacia atras (voltear los números)

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:
const nombre = "Manuel";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));

