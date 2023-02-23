//ALMACENAR OBJETOS EN LOCAL STORAGE

//Para agregar o almacenar elementos a Local Storage usamos: localStorage.setItem(key, value)
//key: Es como se va a obtenerlos valores
//Value: Es lo que puede cambiar

//OJO: Local Storage solamente almacena Strings, no se pueden almacenar arrays ni objetos, pero usando JSON.stringify() se convierte a formato .JSON que es un string valido para local storage

localStorage.setItem("nombre", "Manuel"); //Llave (Key), Valor(Value)

//ALMACENAR OBJETOS EN LOCAL STORAGE
//Creamos un objeto
const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 300,
};

//Convertimos el objeto a formato .JSON con JSON.stringify()
const productoString = JSON.stringify(producto); //JSON.stringify convierte un objeto Javascript en formato JSON
console.log(typeof productoString); //Comprobamos que el objeto ya se un string para poder ser almacenado en local Storage

//Guardamos en local storage productoString que ya esta en formato JSON
localStorage.setItem("producto", productoString);

//ALMACENAR ARRAYS EN LOCAL STORAGE
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
localStorage.setItem("meses", JSON.stringify(meses)); //En vez de crear una variable transformamos directamente a formato JSON con JSON.stringify()
