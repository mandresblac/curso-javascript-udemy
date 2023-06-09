// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}


// const nombre = producto.nombre;
// console.log(nombre);



// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

// const { nombre } = producto;
// console.log(nombre);

// const { precio } = producto;
// console.log(precio)

// O puedes hacerlo mejor con

const {nombre, precio, disponible, noExiste} = producto;
console.log(`Nombre: ${nombre}.`);
console.log(`Precio: ${precio}.`);
console.log(`Disponible: ${disponible}.`);
console.log(`${noExiste}.`);
