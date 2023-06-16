// En este capitulo estaremos viendo que son los prototypes y como utilizarlos

// Los prototypes están muy relacionados con los objetos... de hecho todos los objetos tienen un prototype

// Previamente habíamos visto 2 formas de crear objetos en javascript...

// 1- Object literal, que es algo asi:

const cliente = {
  nombre: "Juan",
  saldo: 500,
}; // Esta forma aunque es la más común, también es menos dinámica...
console.log(cliente);
console.log(typeof cliente);

// 2- object constructor o funcion constructora
//Si necesitas añadir o crear un objeto reutilizable que puedas utilizar en muchas instancias con muchos datos, tienes que utilizar un constructor de función o object constructor
// En JavaScript hoy en día tenemos classes, pero previamente la programación orientada a objetos era de la siguiente forma:
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

//Puedo crear multiples instancias de Cliente
const juan = new Cliente("Juan", 400);
const pedro = new Cliente("Pedro", 600);
const luis = new Cliente("Luis", 200);

console.log(typeof juan, juan);
console.log(typeof pedro, pedro);
console.log(typeof luis, luis); // Puedes ver que si expandimos juan, pedro y luis en la consola tenemos algo llamado el Prototype...
