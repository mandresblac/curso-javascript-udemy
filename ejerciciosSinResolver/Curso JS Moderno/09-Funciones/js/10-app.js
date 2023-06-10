// En este video estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

const aprendiendo1 = function () {
  console.log("Aprendiendo JavaScript");
};

const aprendiendo2 = () => {
  return "Aprendiendo JavaScript";
};

// Una linea no requiere llaves
const aprendiendo3 = () => console.log("Aprendiendo JavaScript");

// Dan por inplicito el return
const aprendiendo4 = () => "Aprendiendo JavaScript";

console.log(aprendiendo1());
console.log(aprendiendo2());
console.log(aprendiendo3());
console.log(aprendiendo4());
