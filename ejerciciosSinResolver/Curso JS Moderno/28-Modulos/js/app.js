// import nuevaFuncion, { Cliente, ahorro, mostrarInformacion, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

// 4
import nuevaFuncion, {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  Cliente,
} from "./cliente.js";

let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

//const nombreCliente = "Juan",
//ahorroCliente = 400;

//let cliente = new Cliente(nombreCliente, ahorroCliente);
console.log(cliente.mostrarInformacion());

const nombreEmpresa = "Udemy",
  ahorroEmpresa = 1000000000,
  categoriaEmpresa = "aprendizaje";

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoriaEmpresa);
console.log(empresa.mostrarInformacion());

nuevaFuncion();
