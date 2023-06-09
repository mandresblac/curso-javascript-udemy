// Veamos algunas operaciones útiles en los arreglos,

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

// console.table(meses);

// Si quieres saber cuantos elementos hay en un arreglo puedes utilizar la propiedad .length
console.log(meses.length);

//Destructuración de un array
const [en, fe, ma] = meses;
//console.log(en);
//console.log(fe);

// ahora, si recuerdas en videos anteriores vimos como acceder a un arreglo, pero si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica, entonces, como acceder a todos los elementos? con algo llamado un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
