// LOS GENERADORES
// Un generador es una funcion que retorna un Iterador.
// Se indican con un asterisco después de la palabra function

// Generador

function* crearGenerador() {
  // Yiel es nuevo también en es6 y son los valores que podemos utilizar para iterar...
  yield 1;
  yield "Nombre";
  yield 3 + 3;
  yield true;
}
// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

/* console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value); */

// Generador para carrito de compras
function* nuevoGenerador(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}
// carrito
const carrito = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];

// Recorrer el iterador
let iterador1 = nuevoGenerador(carrito);

console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
