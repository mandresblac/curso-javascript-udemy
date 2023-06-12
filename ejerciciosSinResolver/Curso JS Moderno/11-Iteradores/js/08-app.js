// En el video anterior vimos el for of ,en este video veremos el for in...

// el for in va a iterar sobre objetos unicamente mientras que for of itera sobre arreglos.

let automovil = {
  modelo: "Camaro",
  motor: "6.0",
  anio: "1969",
  marca: "Chevrolet",
};

for (let propiedad in automovil) {
  console.log(`${propiedad} : ${automovil[propiedad]}`);
}


// Otra forma
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave);
  console.log(valor);
}

// Y con eso terminamos lo que son los iteradores, veamos una serie de Array Methods, que son similares a estos iteradores y sus usos. ya vamos terminando toda la parte de básicos de JavaScript para movernos al DOM pero vamos viendo un tema más!
