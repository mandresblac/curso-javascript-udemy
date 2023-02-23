//Obtener los datos que tenemos almacenados en Local Storage

//Para obtener los datos de regreso usamos: localStorage.getItem()
const nombre = localStorage.getItem("nombre");
console.log(nombre);

//OBTENER UN OBJETO DEL LOCAL STORAGE
const productoJson = localStorage.getItem("producto");

//Convertimos un string .JSON a un objeto de Javascript con JSON.parse()
console.log(JSON.parse(productoJson));

//OBTENER UN ARRAY DEL LOCAL STORAGE
const meses = localStorage.getItem("meses");
//Convertimos un string .JSON a un objeto de Javascript con JSON.parse()
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
