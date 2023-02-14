// En este video veremos for of...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este se ejecuta mientras haya elementos por iterar como puede ser un arreglo, for of solo itera sobre arreglos...

// Arreglo
let pendientes = ["Escribir", "Comer", "Proyecto", "Estudiar JavaScript"];

// objeto
const carrito = [
  { id: 1, nombre: "Libro", precio: 150 },
  { id: 2, nombre: "Camisa", precio: 200 },
  { id: 3, nombre: "Disco", precio: 180 },
  { id: 4, nombre: "Celular", precio: 700 },
];

for (let tarea of pendientes) {
  console.log(tarea);
}

for (let producto of carrito) {
  console.log(
    `Id: ${producto.id} \nNombre: ${producto.nombre} \nPrecio: ${producto.precio}`
  );
}

// Sin duda una forma más sencilla que un foreach y un for no?
