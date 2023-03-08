// WeakSet o set debil

/*
Diferencias entre Set y WeakSet

- El set puede almacenar cualquier tipo de valor mientras que el WeakSet solo puede almecenar objetos
- El WeakSet no tiene el metodo .size() como si lo tiene el set, por lo tanto no se puede conocer el tamaño del WeakSet
- Los WeakSet no son iterables mientras que los Set si son iterables
*/

// En el Set se puede pasar cualquier valor sea números, strings, boolenos, objetos, arrays, etc, pero en el WeakSet solo se puede agregar objetos
var ws = new WeakSet();
const cliente1 = {
    nombre: 'Manuel',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

const nombre = 'Pedro';

ws.add(cliente1);
ws.add(cliente2);
// ws.add(nombre); // Solo se pueden agregar objetos

console.log(ws);

console.log( ws.has(cliente1) );
console.log( ws.has(cliente2));
// console.log( ws.has(nombre));

// console.log( ws.delete(window));
console.log( ws.delete(cliente1));
console.log( ws.has(cliente1) );


// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.
