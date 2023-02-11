// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..
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
};


const { nombre, precio, informacion, informacion: { fabricacion: { pais }, medidas: { peso, medida} } } = producto;

console.log(`nombre: ${nombre}`);
console.log(`precio: ${precio}`);
console.log("informacion: " , informacion);
console.log("pais: " , pais);
console.log(`peso: ${peso}`);
console.log(`peso: ${peso}`);
console.log(`medida: ${medida}`);

