// Async Await

function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (!error) {
        resolve("El Listado de Clientes se descargo correctamente");
      } else {
        reject("Error en la conexion");
      }
    }, 3000);
  });
}

// Async await
async function ejecutar() {
  try {
    console.log(1 + 1);
    // await detiene la ejecución del código hasta que se resuelva el Promise
    const respuesta = await descargarClientes(); // Deten la ejecución hasta que sea ejecutado...

    console.log(2 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}
ejecutar();

//console.log(2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
