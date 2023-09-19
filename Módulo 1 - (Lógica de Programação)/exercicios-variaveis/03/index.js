//declarando variaveis
const valorTenis = 129.99;
const valorDisponivel = 80;
const valorDesconto = valorTenis - valorDisponivel;
const porcentagemDesconto = (valorDesconto * 100) / valorTenis;
//imprimindo valor na tela
console.log(`Parar comprar o tênis de R$${valorTenis}, você precisa de um desconte de ${porcentagemDesconto}%.`);
