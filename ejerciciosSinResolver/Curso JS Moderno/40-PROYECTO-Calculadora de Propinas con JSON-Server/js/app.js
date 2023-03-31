/* Para este proyecto se necesita instalar el paquete json-server, para eso en la terminal escribimos el siguiente comando:   npm install -g json-server */
/* Luego para ejecutar desde la consola el archivo API db.json con JSON-Server vamos a la carpeta del proyecto que es "40-PROYECTO-Calculadora de Propinas" y utilizamos el siguiente comando:
 json-server --watch db.json --port 4000 */

let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const categorias = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");
btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector("#mesa").value;
  const hora = document.querySelector("#hora").value;

  // Validamos si hay campos vacios
  const camposVacios = [mesa, hora].some((campo) => campo === "");

  if (camposVacios) {
    //Verificar si ya existe una alerta
    const existeAlerta = document.querySelector(".invalid-feedback");

    if (!existeAlerta) {
      //Generamos alerta
      const alerta = document.createElement("div");
      alerta.classList.add("invalid-feedback", "d-block", "text-center");
      alerta.textContent = "Todos los campos son obligatorios";

      //Insertamos la alerta en el documento HTML
      document.querySelector(".modal-body form").appendChild(alerta);

      //Eliminamos la alerta despues de 3 segundos
      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }

    return;
  }

  // Asignar datos del formulario a cliente
  cliente = { ...cliente, mesa, hora };

  //console.log(cliente);

  // Ocultar ventana modal de bootstrap
  const modalFormulario = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();

  // Mostrar las secciones
  mostrarSecciones();

  // Obtener platillos de la API de JSON-server
  obtenerPlatillos();
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll(".d-none");
  seccionesOcultas.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarPlatillos(resultado))
    .catch((error) => console.error(error));
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector("#platillos .contenido");

  platillos.forEach((platillo) => {
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");

    // Nombre
    const nombre = document.createElement("div");
    nombre.classList.add("col-md-4");
    nombre.textContent = platillo.nombre;

    // Precio
    const precio = document.createElement("div");
    precio.classList.add("col-md-3", "fw-bold");
    precio.textContent = `$ ${platillo.precio}`;

    // Categoria
    const categoria = document.createElement("div");
    categoria.classList.add("col-md-3");
    categoria.textContent = categorias[platillo.categoria];

    // Input de cantidad
    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.id = `producto-${platillo.id}`;
    inputCantidad.classList.add("form-control");

    // Función que detecta la cantidad y el platillo que se esta agregando
    inputCantidad.onchange = () => {
      const cantidad = parseInt(inputCantidad.value);
      agregarPlatillo({ ...platillo, cantidad });
    };

    const agregar = document.createElement("div");
    agregar.classList.add("col-md-2");
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);

    contenido.appendChild(row);
  });
}

function agregarPlatillo(producto) {
  // Extraemos el pedido actual
  let { pedido } = cliente;

  //Condicional que revisa que la cantidad sea mayor a cero
  if (producto.cantidad > 0) {
    // Comprueba si el elemento ya existe en el array
    if (pedido.some((articulo) => articulo.id === producto.id)) {
      // Como el articulo ya existe, actualizamos la cantidad
      const pedidoActualizado = pedido.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      //Se asigna el nuevo array a cliente.pedido
      cliente.pedido = [...pedidoActualizado];
    } else {
      // Si el articulo no existe, lo agregamos al array de pedido
      cliente.pedido = [...pedido, producto];
    }
  } else {
    // Eliminar elementos cuando la cantidad es cero
    const resultado = pedido.filter((articulo) => articulo.id !== producto.id);
    cliente.pedido = [...resultado];
  }

  // Limpiar el código HTML previo
  limpiarHtml();

  if (cliente.pedido.length) {
    // Mostrar el resumen
    actualizarResumen();
  } else {
    mensajePedidoVacio();
  }
}

function actualizarResumen() {
  const contenido = document.querySelector("#resumen .contenido");

  const resumen = document.createElement("div");
  resumen.classList.add("col-md-6", "card", "py-3", "px-4", "shadow");

  //Información de la mesa
  const mesa = document.createElement("p");
  mesa.textContent = "Mesa: ";
  mesa.classList.add("fw-bold");

  const mesaSpan = document.createElement("span");
  mesaSpan.textContent = cliente.mesa;
  mesaSpan.classList.add("fw-normal");

  //Información de la hora
  const hora = document.createElement("p");
  hora.textContent = "Hora: ";
  hora.classList.add("fw-bold");

  const horaSpan = document.createElement("span");
  horaSpan.textContent = cliente.hora;
  horaSpan.classList.add("fw-normal");

  // Agregamos los elementos padre
  mesa.appendChild(mesaSpan);
  hora.appendChild(horaSpan);

  // Titulo de la sección
  const heading = document.createElement("h3");
  heading.textContent = "Platillos consumido";
  heading.classList.add("my-4", "text-center");

  // Iterar sobre el array de pedidos
  const grupo = document.createElement("ul");
  grupo.classList.add("list-group");

  // Desestructuramos
  const { pedido } = cliente;

  // Iteramos sobre el pedido
  pedido.forEach((articulo) => {
    const { nombre, cantidad, precio, id } = articulo;

    const lista = document.createElement("li");
    lista.classList.add("list-group-item");

    // Nombre del articulo solicitado
    const nombreElemento = document.createElement("h4");
    nombreElemento.classList.add("my-4");
    nombreElemento.textContent = nombre;

    // Etiqueta de la cantidad del articulo solicitado
    const cantidadElemento = document.createElement("p");
    cantidadElemento.classList.add("fw-bold");
    cantidadElemento.textContent = "Cantidad: ";

    // Cantidad del articulo solicitado
    const cantidadValor = document.createElement("span");
    cantidadValor.classList.add("fw-normal");
    cantidadValor.textContent = cantidad;

    // Etiqueta del precio del articulo solicitado
    const precioElemento = document.createElement("p");
    precioElemento.classList.add("fw-bold");
    precioElemento.textContent = "Precio unidad: ";

    // Precio del articulo solicitado
    const precioValor = document.createElement("span");
    precioValor.classList.add("fw-normal");
    precioValor.textContent = `$${precio}`;

    // Etiqueta subtotal del articulo solicitado
    const subTotalElemento = document.createElement("p");
    subTotalElemento.classList.add("fw-bold");
    subTotalElemento.textContent = "Subtotal: ";

    // Subtotal del articulo solicitado
    const subTotalValor = document.createElement("span");
    subTotalValor.classList.add("fw-normal");
    subTotalValor.textContent = calcularSubtotal(precio, cantidad);

    // Botón para eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.textContent = "Eliminar del pedido";

    // Función para eliminar del pedido
    btnEliminar.onclick = function () {
      eliminarProducto(id);
    };

    // Agregar valores a sus contenedores
    cantidadElemento.appendChild(cantidadValor);
    precioElemento.appendChild(precioValor);
    subTotalElemento.appendChild(subTotalValor);

    // Agregar elemento al "li"
    lista.appendChild(nombreElemento);
    lista.appendChild(cantidadElemento);
    lista.appendChild(precioElemento);
    lista.appendChild(subTotalElemento);
    lista.appendChild(btnEliminar);

    // Agregar lista al grupo principal
    grupo.appendChild(lista);
  });

  // Agregamos al contenido
  resumen.appendChild(heading);
  resumen.appendChild(mesa);
  resumen.appendChild(hora);
  resumen.appendChild(grupo);

  contenido.appendChild(resumen);

  // Mostramos formulario de propinas
  formularioPropinas();
}

function limpiarHtml() {
  const contenido = document.querySelector("#resumen .contenido");

  // Mientras halla elementos en .contenido se ejecutara este While
  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}

function calcularSubtotal(precio, cantidad) {
  return `$${precio * cantidad}`;
}

function eliminarProducto(id) {
  // Extraemos el pedido del cliente
  const { pedido } = cliente;

  const resultado = pedido.filter((articulo) => articulo.id !== id);
  cliente.pedido = [...resultado];

  // Limpiar el código HTML previo
  limpiarHtml();

  if (cliente.pedido.length) {
    // Mostrar el resumen
    actualizarResumen();
  } else {
    mensajePedidoVacio();
  }

  // Cuando el producto se elimina regresamos la cantidad a cero en el formulario
  const productoEliminado = `#producto-${id}`;
  const inputEliminado = document.querySelector(productoEliminado);
  inputEliminado.value = 0;
}

function mensajePedidoVacio() {
  const contenido = document.querySelector("#resumen .contenido");

  const texto = document.createElement("p");
  texto.classList.add("text-center");
  texto.textContent = "Añade los elementos del pedido";

  contenido.appendChild(texto);
}

function formularioPropinas() {
  const contenido = document.querySelector("#resumen .contenido");

  const formulario = document.createElement("div");
  formulario.classList.add("col-md-6", "formulario");

  const divFormulario = document.createElement("div");
  divFormulario.classList.add("card", "py-3", "px-3", "shadow");

  const heading = document.createElement("h3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Propina";

  // Radio Button del 10%
  const radio10 = document.createElement("input");
  radio10.type = "radio";
  radio10.name = "propina";
  radio10.value = "10";
  radio10.classList.add("form-check-input");
  radio10.onclick = calcularPropina;

  // Label
  const radio10Label = document.createElement("label");
  radio10Label.textContent = "10%";
  radio10Label.classList.add("form-check-label");

  // Creamos un div que contiene el input y el label que creamos anteriormente
  const radio10Div = document.createElement("div");
  radio10Div.classList.add("form-check");

  radio10Div.appendChild(radio10);
  radio10Div.appendChild(radio10Label);

  // Radio Button del 25%
  const radio25 = document.createElement("input");
  radio25.type = "radio";
  radio25.name = "propina";
  radio25.value = "25";
  radio25.classList.add("form-check-input");
  radio25.onclick = calcularPropina;

  // Label
  const radio25Label = document.createElement("label");
  radio25Label.textContent = "25%";
  radio25Label.classList.add("form-check-label");

  // Creamos un div que contiene el input y el label que creamos anteriormente
  const radio25Div = document.createElement("div");
  radio25Div.classList.add("form-check");

  radio25Div.appendChild(radio25);
  radio25Div.appendChild(radio25Label);

  // Radio Button del 50%
  const radio50 = document.createElement("input");
  radio50.type = "radio";
  radio50.name = "propina";
  radio50.value = "50";
  radio50.classList.add("form-check-input");
  radio50.onclick = calcularPropina;

  // Label
  const radio50Label = document.createElement("label");
  radio50Label.textContent = "50%";
  radio50Label.classList.add("form-check-label");

  // Creamos un div que contiene el input y el label que creamos anteriormente
  const radio50Div = document.createElement("div");
  radio50Div.classList.add("form-check");

  radio50Div.appendChild(radio50);
  radio50Div.appendChild(radio50Label);

  // Agregar al div principal
  divFormulario.appendChild(heading);
  divFormulario.appendChild(radio10Div);
  divFormulario.appendChild(radio25Div);
  divFormulario.appendChild(radio50Div);

  // Agregar al formulario
  formulario.appendChild(divFormulario);

  contenido.appendChild(formulario);
}

function calcularPropina() {
  const { pedido } = cliente;
  let subtotal = 0;

  // Iteramos sobre el pedido para calcular el subtotal a pagar
  pedido.forEach((articulo) => {
    subtotal += articulo.cantidad * articulo.precio;
  });

  // Seleccionar el radio Button con la propina del cliente
  const propinaSeleccionada = document.querySelector(
    '[name="propina"]:checked'
  ).value;

  // Calcular la propina
  const propina = (subtotal * parseInt(propinaSeleccionada)) / 100;

  // Calcular el total a pagar
  const total = subtotal + propina;

  mostrarTotalHtml(subtotal, total, propina);
}

function mostrarTotalHtml(subtotal, total, propina) {
  const divTotales = document.createElement("div");
  divTotales.classList.add("total-pagar", "my-3");

  // Label Subtotal
  const subTotalParrafo = document.createElement("p");
  subTotalParrafo.classList.add("fs-4", "fw-bold", "mt-2");
  subTotalParrafo.textContent = "Subtotal consumo: ";

  // Valor subtotal
  const subTotalSpan = document.createElement("span");
  subTotalSpan.classList.add("fw-normal");
  subTotalSpan.textContent = `$${subtotal}`;

  subTotalParrafo.appendChild(subTotalSpan);

  // Label Propina
  const propinaParrafo = document.createElement("p");
  propinaParrafo.classList.add("fs-4", "fw-bold", "mt-2");
  propinaParrafo.textContent = "Propina: ";

  // Valor propina
  const propinaSpan = document.createElement("span");
  propinaSpan.classList.add("fw-normal");
  propinaSpan.textContent = `$${propina}`;

  propinaParrafo.appendChild(propinaSpan);

  // Label Total
  const totalParrafo = document.createElement("p");
  totalParrafo.classList.add("fs-4", "fw-bold", "mt-2");
  totalParrafo.textContent = "Total a pagar: ";

  // Valor propina
  const totalSpan = document.createElement("span");
  totalSpan.classList.add("fw-normal");
  totalSpan.textContent = `$${total}`;

  totalParrafo.appendChild(totalSpan);

  // Eliminar el último resultado
  const totalPagarDiv = document.querySelector(".total-pagar");

  if (totalPagarDiv) {
    totalPagarDiv.remove();
  }

  divTotales.appendChild(subTotalParrafo);
  divTotales.appendChild(propinaParrafo);
  divTotales.appendChild(totalParrafo);

  const formulario = document.querySelector(".formulario > div");
  formulario.appendChild(divTotales);
}
