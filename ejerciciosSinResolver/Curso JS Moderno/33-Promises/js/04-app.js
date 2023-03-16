// callback hell to promise...
const paises = [];

// 1- Definimos una promise o promesa
const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve("EL resultado del Resolve");
    }, 3000);
});

// 2- Utilizamos el Promise
nuevoPais('Alemania')
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises);
    })