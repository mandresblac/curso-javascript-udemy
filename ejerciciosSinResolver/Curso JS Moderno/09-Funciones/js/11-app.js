// Parámetros en un arrow Function...

// Parámetros
const aprendiendo1 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);

aprendiendo1("JavaScript");

// si es un solo parámetro no ocupamos el paréntesis
const aprendiendo2 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);

aprendiendo2("JavaScript");

// multiples parámetros si requieren paréntesis
const aprendiendo3 = (tecn1, tecn2) =>
  console.log(`Aprendiendo ${tecn1} ${tecn2}`);

aprendiendo3("JS", "ES");
