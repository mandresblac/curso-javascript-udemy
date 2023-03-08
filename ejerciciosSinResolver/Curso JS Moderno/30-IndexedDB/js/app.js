/* Que es IndexedDB

- IndexedDB es una manera de almacenar datos dentro del navegador del usuario. Debido a que permite la creación de aplicaciones con habilidades de consulta enriquecidas, con independencia de la disponibilidad de la red, sus aplicaciones pueden trabajar tanto en línea como fuera de línea.

- IndexedDB es una api de javascript para almacenar grandes cantidades de datos de forma estructurada, al igual que una base de datos como Mysql, Postgres, etc.

- A diferencia de LocalStorage que solo puede almacenar strings, IndexedDB puede almacenar cualquier tipo de dato que sea soportado por Javascript como strings, booleans, numbers o incluso archivos.

- No tiene limites conocidos (como si los tiene Local Storage), aunque cuando quieras almacenar un archivo de más de 50mb va a preguntar por permisos, es decir, le va a preguntar al usuario si desea hacerlo.

- Esta soportado en todas las ultimas versiones de todos los navegadores.

- IndexedDB es una base de datos completa, pero ten en cuenta que los datos almacenados en IndexedDB van a estar visibles para cualquiera en una pestaña del navegador, por lo tanto no es recomendable almacenar passwords, emails de usuarios, números de cuentas bancarias y números de tarjetas de crédito.

Sitio de consulta MDN:
https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API
https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API/Using_IndexedDB

*/

let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 3000);
});

function crmDB() {
  // Crear base de datos con la versión 1.0
  let crmDB = window.indexedDB.open("crm", 1.0); //Nombre, Versión

  // si hay un error, lanzarlo
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la BD");
  };

  // Si todo esta bien y se crea correctamente, asignar a database el resultado
  crmDB.onsuccess = function () {
    console.log("Base de datos creada!");

    // guardamos el resultado
    DB = crmDB.result;

    console.log(DB);
  };

  // Configuración de la base de datos, este método solo corre una vez
  crmDB.onupgradeneeded = function (e) {
    //console.log("Este método solo se ejecuta una vez");

    // El evento que se va a correr tomamos la base de datos
    let db = e.target.result;

    // Definir el objectStore, primer parámetro el nombre de la BD, segundo las opciones
    // keypath es de donde se van a obtener los indices
    let objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true, //Autoincremento
    });

    //Definimos las columnas de la base de datos
    //createindex, nombre y keypath, 3ro los parámetros, keypath en este caso sera el indice para poder realizar búsquedas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("DB creada y lista");
  };
}

function crearCliente() {
  // Crear un nuevo registro

  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function (event) {
    console.log("Transacción Completada");
  };

  transaction.onerror = function (event) {
    console.log("Hubo un error en la transacción");
  };

  let objectStore = transaction.objectStore("crm");
  console.log(objectStore);

  const nuevoCliente = {
    nombre: "Juan",
    email: "correo@correo.com",
    telefono: 1020912,
  };

  let peticion = objectStore.add(nuevoCliente);

  console.log(peticion);
}
