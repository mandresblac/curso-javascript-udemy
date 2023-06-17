// Las Classes en JavaScript llegaron hasta hace pocos años, muchas personas no consideraban a javascript como un lenguaje serio ya que la programación orientada a objetos era el object constructor y los métodos eran los prototypes...

// Así que en 2015 llegaron las classes a javascript, que solo es una mejora en la sintaxis, al final sigue siendo un object constructor con sus prototypes..

// En realidad sigue siendo lo mismo, pero la facilidad de crear objetos y añadirle métodos si mejoro bastante gracias a las classes

// Las classes se crean con la palabra reservada class...

// Existen 2 formas de declarar clases en Javascript:

// FORMA 1 - Class Declaration, esta es la forma mas usada
class Cliente1 {
  // El Nombre debe ser en mayúsculas... Y esta forma se le conoce como CLASS DECLARATION

  // Método constructor
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}.`;
  }

  // Propiedades estaticas
  
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

// Si recuerdas previamente instanciabamos nuestro objecto con... para pasar esos valores las classes introdujeron lo que se conoce como constructores... en algunos lenguajes el constructor es el mismo nombre de la clase pero en javascript es constructaor
const juan = new Cliente1("Juan", 400);
console.log(juan);
console.log(juan.mostrarInformacion());

// Los metotos estaticos (static) no requieren de una instancia para mandarse llamar, se mandan llamar directamente desde la clase
console.log(Cliente1.bienvenida());

// Existe una segunda forma de crear classes, se le conoce como class Expression
// FORMA 2 - Class expression
const Cliente2 = class {
  // Método constructor
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}.`;
  }
};

const juan2 = new Cliente2("Juan", 500);
console.log(juan2);
console.log(juan2.mostrarInformacion());
