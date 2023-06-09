let capitalInicial = 0; // El capital inicial se ingresa en enero, en este caso se asume que es 0
let inversionMensual = 250; // cada mes se realiza una inversión de $250
let tasaInteresAnual = 0.15; // la tasa de interés anual es del 15%
let numeroMeses = 12; // se calcula el interés a fin de año, es decir, en 12 meses

let saldoTotal = capitalInicial;

// Función para calcular el saldo con interés compuesto
function calcularSaldoCompuesto(capital, tasa, periodo) {
  return capital * Math.pow(1 + tasa, periodo);
}

// Calcular el saldo total con interés compuesto
saldoTotal = calcularSaldoCompuesto(saldoTotal + inversionMensual * numeroMeses, tasaInteresAnual / 12, numeroMeses);

console.log("El saldo total al final de los " + numeroMeses + " meses es de $" + saldoTotal.toFixed(2) + ".");