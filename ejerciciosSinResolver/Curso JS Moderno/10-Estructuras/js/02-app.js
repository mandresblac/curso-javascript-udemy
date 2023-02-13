// Veamos otras comparaciones
const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// No es igual
if (puntaje != 1000) {
  console.log("Si! es diferente!");
} else {
  console.log("No, no es diferente");
}

// comparador estricto de tipo y valor
if (puntaje === 1000) {
  console.log("Si es igual!");
} else {
  console.log("No no es igual");
}

// comparador estricto de tipo y valor
if (puntaje !== 1000) {
  console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
  console.log("No, es igual");
}

/* == Operador de igualdad no estricto, solo compara por valor*/
/* === Operador de igualdad estricto, compara por valor y por tipo de dato */
/* != Operador de diferencia no estricto, solo diferencia por valor */
/* !== Operador de diferencia estricto, diferencia por valor y por tipo de dato */
