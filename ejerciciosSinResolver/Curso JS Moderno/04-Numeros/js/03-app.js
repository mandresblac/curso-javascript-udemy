// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

let resultado;

// Pi
resultado = Math.PI;
// console.log(resultado);

// redondeo
resultado = Math.round(2.6);
resultado = Math.round(2.8);
// console.log(resultado);

// redondeo arriba o abajo (ceil o floor )
resultado = Math.ceil(2.2);
// console.log(resultado);
resultado = Math.floor(2.4)
// console.log(resultado);

// Raiz cuadrada
resultado = Math.sqrt(144);
// console.log(resultado);

// Valor absoluto
resultado = Math.abs(-300);
// console.log(resultado);

// Potencia
resultado = Math.pow(2, 4);
// console.log(resultado);

// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
// console.log(resultado);

// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
// console.log(resultado);

// Aleatorio
resultado = Math.random();
// console.log(resultado);

// Aleatorio dentro de un rango: del 0 al 30
resultado =  Math.floor( Math.random() * 30 );
console.log(resultado);
