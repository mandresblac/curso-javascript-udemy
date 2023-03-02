// Veamos como añadir métodos a nuestras classes...
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  // cualquier método agregado a la clase será parte del proto
  imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
  }

  retirarSaldo(retiro) {
    this.saldo -= retiro;
  }

  // También existe algo llamado las propiedades estáticas, estas no requieren ser instanciadas para ser mostradas, se mandan llamar directamente desde la clase
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

// javascript es constructor
const juan = new Cliente("Juan", 400); //Instanciamos un objeto llamado "juan" de la clase Cliente

console.log(juan);

console.log(juan.imprimirSaldo());
juan.retirarSaldo(200);
console.log(juan.imprimirSaldo());

// Ver propiedad estatica...

//console.log(juan.bienvenida()); // No va a funcionar, marca un error

console.log(Cliente.bienvenida()); // Esto si va a funcionar
