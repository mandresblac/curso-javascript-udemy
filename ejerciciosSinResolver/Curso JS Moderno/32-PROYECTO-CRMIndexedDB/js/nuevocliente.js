(function () {
  let DB;
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", validarCliente);

    conectarDB();
  });

  function validarCliente(e) {
    e.preventDefault();

    //Leer todos los inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === "" || telefono === "" || empresa === "") {
      imprimirAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    //Crear un objeto con la información
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    cliente.id = Date.now();
    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");
    objectStore.add(cliente);

    transaction.oncomplete = function () {
      //console.log("Cliente agregado");
      imprimirAlerta("El cliente se agrego correctamente");

      setTimeout(() => {
        //Nos envía al archivo index.html
        window.location.href = "index.html";
      }, 3000);
    };

    transaction.onerror = function () {
      imprimirAlerta("Hubo un error", "error");
    };
  }
})();
