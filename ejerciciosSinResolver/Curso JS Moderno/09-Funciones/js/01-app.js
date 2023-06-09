// Las funciones en cualquier lenguaje son una serie de procedimientos o instrucciones, que realizan una acción, una ventaja de las funciones es que permiten tener un código más ordenado fácil de mantener..

// Otra ventaja de las funciones es que son reutilizables, puedes tener una función que valide un formulario y utilizarla en todos tus formularios, puedes tener también una función que envie datos al servidor y reutilizarla múltiples veces...

// Existen 2 formas de crear funciones en JavaScript

// Declaración de Función, la expresión de la función utiliza la palabra reservada function, seguida de un nombre y un parentesis, en este parentesis se colocan los argumentos, finalmente el cuerpo de la función se define por unas llaves...

//Forma 1 - Función Declarada (Function declaration)
function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

// Las funciones deben llamarse, de otra forma en realidad no hacen mucho:

console.log(sumar(2, 3)); // se manda llamar por su nombre seguido del parentesis()

// Expresión de función - Este tipo de funciones se asigna como si fuera una variable
//Forma 2 - Función expresada (function expression)
const sumar2 = function () {
  return 3 + 3;
};

console.log(sumar2()); // se manda llamar de la misma forma

// Existe una 3ra forma de crear funciones, que más bien son métodos, la veremos un poco más adelante...
