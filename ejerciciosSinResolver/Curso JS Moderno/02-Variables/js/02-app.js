// var era la forma de crear variables en versiones anteriores de ECMASscript hoy en día las opciones se reducen a 2 let y const
// Las reglas son básicamente las mismas con let

let producto = "Tablet";

// Las variables con let también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;

console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico,
// No se especifican tipos de datos cuando
// se crea la variable

let precio = 300;
console.log(precio);
