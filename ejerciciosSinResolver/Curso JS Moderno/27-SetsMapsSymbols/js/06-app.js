// Iterators
// Esta es una función que retorna otra función (siguiente())
function crearIterador(carrito) {
  // Variable contador
  let i = 0;

  return {
    siguiente: () => {
      // Obtener cuantos elementos hay en el carrito o cuando llegamos al final de arreglo para detener el iterador
      let fin = i >= carrito.length;

      //Obtener el valor actual
      let valor = !fin ? carrito[i++] : undefined;

      return {
        fin,
        valor,
      };
    },
  };
}
const carrito = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];

// Utilizamos el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
