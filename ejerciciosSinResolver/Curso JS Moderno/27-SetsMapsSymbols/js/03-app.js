// MAPS
// Son listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

let cliente = new Map();

//Para agregar un elemento a un map se utiliza el metodo .set()
cliente.set("nombre", "Karen"); // key: "nombre", value: "Karen"
cliente.set("tipo", "Premium"); // key: "tipo", value: "Premium"
cliente.set("saldo", 3000); // key: "saldo", value: 3000
cliente.set(true, true);

console.log(cliente);

// acceder a los valores
console.log(cliente.get("nombre"));
console.log(cliente.get("tipo"));
console.log(cliente.get("saldo"));

// Métodos al MAP
// Tamaño del MAP
console.log(cliente.size);
// Contiene un valor
console.log(cliente.has("tipo"));
console.log(cliente.get("tipo"));
// Borrar
cliente.delete("nombre");
console.log(cliente.has("nombre"));
console.log(cliente.get("nombre"));
console.log(cliente.size);

// Borrar el map
//cliente.clear();
console.log(cliente);

// También se puede inicializar un map con diferentes valores...
const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

// paciente.set('cuarto', 400);
paciente.set("nombre", "Antonio");

console.log(paciente);

// Foreach a un map
cliente.forEach((datos, index) => {
  // console.log(datos);
  console.log(`${index}: ${datos}`);
});
