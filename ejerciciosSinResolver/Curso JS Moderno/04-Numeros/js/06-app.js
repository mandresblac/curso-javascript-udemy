// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// console.log(typeof numero1);

// Convertir de Strings a Números flotantes o Enteros
const stringANumero = parseInt(numero1)// Convertir de String a Número
console.log(stringANumero);
console.log(typeof stringANumero)
console.log(parseFloat(numero2)); // Convertir a número con decimales
console.log(parseInt(numero3));

// Con el metodo .isIntiger()) comprobamos si un número es entero o no
console.log(Number.isInteger(numero4)); // Revisar si un número es entero o no
console.log(Number.isInteger(numero3) ); //

// Convertir numero a String
console.log(numero4.toString());