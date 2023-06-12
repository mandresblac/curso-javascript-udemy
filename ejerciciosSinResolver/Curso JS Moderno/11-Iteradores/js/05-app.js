// Veamos otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...

// a diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.
let i = 1000; // Inicializador - probar con 1000

do {
  console.log(`Numero: ${i}`);
  i++; // Incremento
  // console.log(i);
} while (i < 10); // Condición

// Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...

// cambiamos el i a 100 y revisamos...


// Ejemplo del FizzBuzz
let contador = 1; // Inicializador

do {
  if (contador % 3 === 0 && contador % 5 === 0) {
    console.log(`${contador} Fizz Buzz`);
  } else if (contador % 3 === 0) {
    console.log(`${contador} Fizz`);
  } else if (contador % 5 === 0) {
    console.log(`${contador} Buzz`);
  } else {
    console.log(`${contador}`);
  }

  contador++; // Incremento
} while (contador < 100); // Condición
