// Previamente vimos algunos métodos para strings, para números y también para objetos...

// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Comprobar si un valor existe en un arreglo
/* meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Enero si existe");
  }
}); */

// En un arreglo normal común y corriente se utiliza el método .includes(), OJO, no se puede utilizar en un arreglo de objetos
const resultado = meses.includes("Enero");
console.log(resultado);

// En un arreglo de objetos y tambien de indices normales se puede utilizar el método .some()
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe);

// EN un arreglo tradicional con .some()
const existe2 = meses.some((mes) => mes === "Febrero");
console.log(existe2);
