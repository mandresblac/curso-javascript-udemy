// En este video estaremos viendo la palabra this...
// This se refiere a los valores que existen dentro del mismo objeto
// This es un aforma de referirse al objeto en si mismo
// This se mantiene dentro del ambito del objeto en el que fue declarado

// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...

const producto1 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 400,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
