// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..

let i = 1; //Inicialización del While
while (i < 100) {
  // condición
  if (i % 15 === 0) {
    console.log(`${i} Fizz Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(`${i}`);
  }

  i++; // incremento
}

// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicializamos en 20, no hará nada..

/* Intenta realizar los mismos ejemplos  Detectar pares y nones y el fizz buzz con el while, seguramente va a quedar mucho mas claro... */
