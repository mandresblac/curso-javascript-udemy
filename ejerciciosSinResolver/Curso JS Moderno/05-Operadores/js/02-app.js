const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero3);
console.log(numero1 == numero2);


// Typeof
console.log( typeof numero1 );
console.log( typeof numero2 );

// Operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2 );
console.log(numero1 === parseInt(numero2));
console.log(numero1 === Number(numero2));

const password1 = "admin";
const password2 = "Admin";

// Diferente a
console.log("");
console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);