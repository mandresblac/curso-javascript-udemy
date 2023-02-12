// Veamos como acceder a los elementos de un arreglo...

const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

// esta vez estare utilizando
console.table(numeros);

// La forma en la que accedes a un arreglo es por lo que se conoce como el indice en el arreglo, los arreglos inician en 0 usualmente aun que hay lenguajes donde inician en 1

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[20]);
console.log(numeros[5][1]);
