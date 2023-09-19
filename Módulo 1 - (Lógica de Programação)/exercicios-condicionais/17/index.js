//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
const valorDaParcela = valorDoProduto / quantidadeDoParcelamento;
const parcelasPagas = valorPago / valorDaParcela;
const parcelasPendentes = quantidadeDoParcelamento - parcelasPagas;
console.log(`Restam ${parcelasPendentes} no valor de R$${valorDaParcela.toFixed(2)}.`);
