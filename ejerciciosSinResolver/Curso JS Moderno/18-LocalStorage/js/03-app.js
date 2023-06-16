//ELIMINAR ELEMENTOS DE LOCAL STORAGE

//Para eliminar elementos de Local Storage usamos: localStorage.removeItem()
localStorage.removeItem('nombre');

//ACTUALIZAR UN REGISTRO ALMACENADO EN LOCAL STORAGE
// 1- Obtenemos el registro almacenado en local Storage
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

// 2- Agregamos un nuevo valor al registro obtenido del Local Storage
mesesArray.push('nuevo Mes');
console.log(mesesArray);

// 3- Actualizamos el registro almacenado en Local Storage con localStorage.setItem() porque en local Storage no hay otra manera para actualizar un elemento
localStorage.setItem('meses', JSON.stringify(mesesArray)); //Esto reescribe el valor actual almacenado en el Local Storage

//LIMPIAR TODO EL LOCAL STORAGE
localStorage.clear();
