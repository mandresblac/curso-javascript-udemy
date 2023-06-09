// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: "China"
        }
    }
}



// console.log(producto); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

// console.log(producto.informacion);
// console.log(producto.informacion.medidas.peso);
// console.log(producto.informacion.medidas);
console.log(producto.informacion.medidas.medida);
console.log(producto["informacion"]["fabricacion"]["pais"]);