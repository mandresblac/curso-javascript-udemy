
// Veamos algunos métodos existentes en los strings o cadenas de Texto:

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Conocer la cantidad de letra de un string
console.log(producto.length); // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo, si no encuentra el texto arroja -1

console.log(producto.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes
console.log(producto.includes('tablet')); // Conocer si un texto existe, sino existe arroja false
console.log(producto.includes('Monitor')); // Conocer si un texto existe, si existe arroja true
console.log(producto.includes('monitor'));
