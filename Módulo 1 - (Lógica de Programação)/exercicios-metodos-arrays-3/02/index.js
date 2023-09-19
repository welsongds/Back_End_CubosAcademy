const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "São José do Vale do Rio Preto"
]

const maiorNome = cidades.reduce(function (acumulador, elementoAtual) {
    let maior = acumulador
    if (elementoAtual.length > maior.length) {
        maior = elementoAtual;
    }
    return maior;
});
console.log(maiorNome)