// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto1 = {
  nombre: "Monitor 20 Pulgadas",
  precio: 500,
};

const producto2 = {
  nombre: "Celular",
  precio: 500,
};

carrito.push(producto1);
carrito.push(producto2);
console.log(carrito);

// Añadir al Inicio del carrito...

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.table(carrito);
console.log(carrito[0]);
