//declarando constantes 
const montante = 90_000;
const capital = 60_000;
const numeroMeses = 24;
const taxaJuros = (montante / capital) ** (1 / numeroMeses) - 1;
const taxaFormatada = taxaJuros * 100;
//imprimindo valor da taxa de Juros
console.log(`A taxa de juros aplicada foi ${taxaFormatada}%.`);
