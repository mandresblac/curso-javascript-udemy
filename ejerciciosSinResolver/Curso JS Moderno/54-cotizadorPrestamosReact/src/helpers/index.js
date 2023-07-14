const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(valor);
};

const calcularTotalPagar = (cantidad, plazo) => {
  let total;

  // Mientras mayor es la cantidad solicitada, menor es el interes
  if (cantidad < 5000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }

  // Calculo para el plazo - a más plazo mayor interes
  if (plazo === 6) {
    total *= 1.1; // 1.1 = 10%
  } else if (plazo === 12) {
    total *= 1.2; // 1.2 = 20%
  } else {
    total *= 1.3; // 1.3 = 30%
  }

  return total;
};

export { formatearDinero, calcularTotalPagar };
