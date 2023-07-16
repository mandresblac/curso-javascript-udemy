const calcularTotalPagar = (cantidad, plazo) => {
  let total;

  // Mientras mayor es la cantidad, menor es el interes para pagar
  if (cantidad < 5000) {
    total = cantidad * 1.5; // 1.5 = 50%
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4; // 1.4 = 40%
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.3; // 1.3 = 30%
  } else {
    total = cantidad * 1.2; // 1.2 = 20%
  }

  // Plazo - A mayor plazo, mayor interés
  if (plazo === 6) {
    total *= 1.1; // 1.1 = 10%
  } else if (plazo === 12) {
    total *= 1.2; // 1.2 = 20%
  } else {
    total *= 1.3; // 1.3 = 30%
  }

  return total;
};

export { calcularTotalPagar };
