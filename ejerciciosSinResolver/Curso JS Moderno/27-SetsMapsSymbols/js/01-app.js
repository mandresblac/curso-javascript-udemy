// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

let carrito = new Set();
carrito.add('Camisa');//El metodo .add() permite agregar elemento a un set
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');
console.log(carrito);
console.log(carrito.size);//El metodo .size() permite obtener el tamaño de un set, saber cuanto mide un set

// Comprobamos que un valor existe en un set con el metodo .has() y retornando true o false
console.log( carrito.has('Camisa') );
console.log( carrito.has('Guitarra') );

// Eliminamos elementos del set con el metodo .delete(), uno por uno
console.log(carrito.delete('Disco #3'));
console.log(carrito.has('Camisa'));

// Para limpiar un set completamente utilizamos el metodo clear()
carrito.clear();
console.log(carrito);

// Los set son iterables con un .foreach()
carrito.forEach(producto =>  {
    console.log(producto);
})

// Foreach a un set
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // nombre de la variable
})

console.log(carrito);

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);


// Del siguiente arreglo eliminar los elementos duplicados
let numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);
