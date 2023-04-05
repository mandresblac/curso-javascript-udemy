// Utilizando MAP

// La diferencia entre .forEcah() y .map() es que el primero solo itera sobre un array, mientras que el segundo itera y ademas crea un nuevo array ambas cosas a la vez.
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const obtenerNombres = producto => {
    return producto.nombre
}

const resultado = carrito.map(obtenerNombres);
console.log(resultado); // Devuelve un nuevo array unicamente con los nombres de los productos del array carrito

console.log(carrito);

// Y hay muchos otros ejemplos de programación Funcional, en el sig video veamos otros tips para hacer mejor tu código...