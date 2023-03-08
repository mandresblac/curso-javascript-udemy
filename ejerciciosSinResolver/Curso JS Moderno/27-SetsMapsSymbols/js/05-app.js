
// Symbol

// Los simbolos son nuevos en ES6, te permiten crear una propiedad única
// No hay dos symbols que sean iguales

// Symbol es creado y se agrega a una propiedad del objeto.
// Symbol no utiliza "new", es decir: new Symbol(), si se le agrega "new" dara error.


const sym = Symbol('symbol');
const sym2 = Symbol('symbol');

// Los symbolos siempre son diferentes
if(sym === sym2) {
    console.log('Los symbolos son iguales');
} else {
    console.log('Los symbolos son diferentes');
}

console.log( Symbol() === Symbol() );

// Llaves de objetos únicas
let nombre = Symbol();
let apellido = Symbol();

// Crear un objeto vacio
let persona = {}
// Esto no va a servir

//persona.datos;

// Agregar nombre y apellido como llaves del objeto, debe tener corchetes
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;
console.log(persona);
//console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables, No se puede acceder al SYMBOL con un for.
for(let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}

// También se puede crear UNA DESCRIPCION DEL SYMBOLO

let nombreCliente = Symbol('Nombre del cliente');
let cliente = {};

cliente[nombreCliente] = 'Pedro';


// Probar
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);

