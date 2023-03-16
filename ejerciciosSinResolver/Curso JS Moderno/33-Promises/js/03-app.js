
// 1- Definimos una promise o promesa
const aplicarDescuento = new Promise( (resolve, reject) => { // Puede ser arrow function...
    const descuento = true;

    // Comentar estas siguientes lineas para ver el Resolve...
    if(descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

// 2- Utilizamos el Promise
aplicarDescuento
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));

    console.log(aplicarDescuento);

/*
En los Promises hay 3 valores posibles:
- fullfilled - La promesa (o Promise) se cumplido
- rejected - La promesa (o Promise) no se cumplio
- pending - La promesa (o Promise) está pendiente, es decir, no se ha cumplido ni tampoco ha sido rechazada
*/


// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

function descuento() {
    console.log('Aplicando el Descuento...');
}