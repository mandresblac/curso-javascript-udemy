// El problema que solucionan los prototypes...

//Cliente
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

//Instancia de cliente
const juan = new Cliente("Juan", 400);

console.log(juan);

// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente(cliente) {
  //Desestructuramos Cliente
  const { nombre, saldo } = cliente;
  return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));

//Empresa
function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

//Instancia de empresa
const ccj = new Empresa("Código Con Juan", 400, "Cursos en línea");

function formatearEmpresa(empresa) {
  //Desestructuramos Cliente
  const { nombre, saldo, categoria } = empresa;
  return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(ccj);
console.log(formatearEmpresa(ccj));

// Debido a que tengo una propiedad nueva, es difícil reutilizar esa función, lo cual nos llevaría digamos a muchas funciones que no sabríamos cuales utilizar para los diferentes objetos, esa es una ventaja que nos dan los prototypes ya que podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...
