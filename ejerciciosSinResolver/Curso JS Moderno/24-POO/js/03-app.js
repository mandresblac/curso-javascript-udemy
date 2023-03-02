// De la misma forma que puedes heredar un constructor con Prototypes y sus métodos, también puedes heredar una clase, es una de las caracteristicas que hay en POO

class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
  }
  retiraSaldo(retiro) {
    this.saldo -= retiro;
  }
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

// HERENCIA :
// Para heredar utilizamos la palabra "extends" y luego el nombre de la clase de la cual queremos heredar
// En este caso la clase Empresa hereda todos los atributos, métodos y el constructor de la clase Cliente
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipo) {
    // La función super() va hacia el método constructor de la clase padre y busca los atributos o propiedades que le pasemos dentro, es decir, para heredar los atributos del método constructor de la clase padre en una clase hija debemos utilizar la función super()
    super(nombre, saldo);
    // otros atributos se declaran fuera
    this.telefono = telefono;
    this.tipo = tipo;
  }

  // Reescribir un método, para reescribir un método de la clase padre en la clase hija basta con nombrarlo de la misma forma en la clase hija
  static bienvenida(mensaje) {
    return `Bienvenido al cajero para empresas`;
  }
}

const pedro = new Cliente("Pedro", 3000);
console.log(pedro);
console.log(pedro.imprimirSaldo());

// Heredando y creando una instancia de empresa
const empresa = new Empresa("Empresa1", 10000, 10290193, "Textiles");
console.log(empresa);

// Debido a que heredamos podemos acceder a imprimirSaldo
console.log(empresa.imprimirSaldo());

// Acceder al statico sin instanciar de ambos
console.log(Empresa.bienvenida());
console.log(Cliente.bienvenida());
