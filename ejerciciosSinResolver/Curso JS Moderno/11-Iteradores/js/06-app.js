// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

// Recorrer por un Foreach
pendientes.forEach((pendiente, index) => console.log(`${index}: ${pendiente}`));

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
const carrito = [
  { id: 1, producto: "Libro", precio: 150 },
  { id: 2, producto: "Camisa", precio: 200 },
  { id: 3, producto: "Disco", precio: 180 },
  { id: 4, producto: "Ipad", precio: 260 },
];

// ForEach
const nuevoArreglo1 = carrito.forEach( producto => `Id: ${producto.id} \nProducto: ${producto.producto} \nPrecio: ${producto.precio}`);

// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...

// map
const nuevoArreglo2 = carrito.map( producto => `Id: ${producto.id}, Producto: ${producto.producto}, Precio: ${producto.precio}`);

console.log(nuevoArreglo1);
console.log(nuevoArreglo2);
