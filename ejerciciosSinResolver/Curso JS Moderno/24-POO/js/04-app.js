// En este video estaremos viendo los modificadores de acceso, básicamente solamente hay private, es decir que se pueda acceder desde la clase...

// Ahora en JavaScript de nueva cuenta las classes son algo nuevo, funcionan sobre prototypes, pero con una forma más sencilla, previamente la forma de hacerlo private era con un guion bajo, eso le daba a entender al programador que esa propiedad o método era privado pero aún asi no era como un private real...

class Cliente {
  //El signo # hace que la propiedad "nombre" sea privada, es decir que solamente se puede acceder desde la clase con otro atributo
  #nombre = "";
  constructor(nombre, saldo = 0) {
    // this._nombre = nombre; //Forma antigua
    this.#nombre = nombre;
    this.saldo = saldo;
  }
  nombreCliente() {
    return this.#nombre;
  }

  retiraSaldo(retiro) {
    this.saldo -= retiro;
  }
}

const pedro = new Cliente("Pedro", 200);

console.log(pedro.nombreCliente());

// console.log(pedro._nombre);

// SOLUCION
//console.log(pedro.#nombre);

//----------------------- EJEMPLO 2 ------------------------//
class Cliente2 {
  #nombre;

  setNombre(nombre) {
    this.#nombre = nombre; //Propiedad privada
  }

  getNombre() {
    return this.#nombre;
  }
}

const manuel = new Cliente2();
manuel.setNombre("manuel");
console.log(manuel.getNombre());

//console.log(manuel.#nombre); // Da un error
