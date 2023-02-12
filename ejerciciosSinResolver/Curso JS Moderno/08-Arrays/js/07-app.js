const carrito = [];

const producto1 = {
  nombre: "Monitor 20 Pulgadas",
  precio: 500,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

const producto4 = {
  nombre: "Mouse",
  precio: 25,
};

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto4);

carrito.unshift(producto3);

console.table(carrito);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
// carrito.shift();

//Eliminar el ultimo elemento...
// carrito.pop();

// Ahora supongamos que deseas eliminar elementos del medio, para ello se utiliza el método .splice()
carrito.splice(3, 1); // El primer parámetro es la posición donde va a iniciar a cortar, el segundo parámetro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
// carrito.splice(1, 2);

console.table(carrito);
