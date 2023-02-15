// En este video veremos como unir 2 arreglos, para ello existe un array method llamado .concat

const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const meses2 = ["Julio", "Agosto", "Septiembre"];

const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// Unir 2 arreglos con .concat()
const resultado1 = meses1.concat(meses2, meses3, "Otro mes");
console.log(resultado1);

// Existe otra forma que es con spread operator o rest operator
const resultado2 = [...meses1, ...meses2, ...meses3, "Otro mes"]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(resultado2);
