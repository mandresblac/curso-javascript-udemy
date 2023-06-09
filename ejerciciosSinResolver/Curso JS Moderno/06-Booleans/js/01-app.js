// El tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";


console.log(boolean1);
console.log(boolean2);


console.log(typeof boolean2);
console.log(boolean1 == boolean3);

//También un Boolean se puede crear con la palabra new
const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);
