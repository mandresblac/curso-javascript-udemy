// Closure
// Un closure es una forma de acceder al codigo o a los valores internos de una funcion desde el exterior

// En JavaScript los Closures son creados cada que una función se crea...

// Pero un closure es una forma de acceder a una función o valor, desde el exterior...


const obtenerCliente = () =>  {
    const nombre = "Juan";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();