// En javascript hay un objeto llamado Date() o fecha que muestra el día, Mes, año y la hora actual
const diaHoy = new Date();
let valor;
valor = diaHoy;

// .now() muestra el tiempo en milisegundos que ha pasado desde el 1 de enero de 1970 hasta la fecha actual
Date.now();

// Date es Mes, dia y año
let cumple = new Date("1-5-1987");
cumple = new Date("January 5 1987");

// .toString lo cambiaria de object a string

console.log(typeof valor);

// Convertir fecha a string

// cumple.toString();
valor = cumple;

//Métodos del objeto Date()
//get sirve para extraer o mostrar el valor del objeto Date()
//set modifica el valor del objeto Date()
valor = diaHoy.getFullYear(); // getFullYear()muestra el año actual
valor = diaHoy.getMonth(); //getMonth() muestra el mes en el que estamos iniciando el mes de enero en 0, febrero en 1, etc.
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getMinutes(); //getMinutes() muestra el minuto en el que estamos actualmente
valor = diaHoy.getHours(); //getHours() muestra la hora actual
valor = diaHoy.getTime(); //getTime() muestra los milisegundos que han transcurrido desde el 1 de enero de 1970 hasta la actualidad
valor = diaHoy.setFullYear(2018); //setFullYear(2018) muestra el año en 2018

console.log(valor);
