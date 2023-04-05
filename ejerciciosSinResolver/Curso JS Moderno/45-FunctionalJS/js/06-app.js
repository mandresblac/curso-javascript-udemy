// Pure Functions o funciones puras...

// Son funciones que retornan un dato pero no modifican los valores de las variables...

// otra caracteristica es que con una entrada de datos deben retornar la misma cantidad de entradas

// Usualmente el resultado deberá ser una nueva variable, ya modificada.
// Y

const numero1 = 20;
const duplicar = numero => numero * 2;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);


const nombre = 'Juan';
const trabajo = 'Web Developer';

const formatearNombre = (arg1, arg2) => `${arg1} - ${arg2}`;


const mostrarNombre = formatearNombre;

console.log(mostrarNombre(nombre, trabajo));