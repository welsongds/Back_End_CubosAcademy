//declarações de variaveis
const capital = 1000;
const taxaJuros = 0.125;
const tempo = 5;
const montante = capital * (1 + taxaJuros) ** tempo;
//imprimindo valor na tela
console.log(`Com o investimento de ${capital}, com a taxa de juros de ${taxaJuros} e durante o tempo de ${tempo}, o retorno será de ${montante}!`);
