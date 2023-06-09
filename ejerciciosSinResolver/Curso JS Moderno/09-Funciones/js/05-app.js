// Funciones que toman parametros y argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos

function saludar(nombre, apellido) {
  // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
  return `Hola ${nombre}  ${apellido} `;
}
console.log(saludar("Juan", "De la torre")); // Juan y De la torre son argumentos, son los valores reales...

console.log(saludar("Juan"));
console.log(saludar());
