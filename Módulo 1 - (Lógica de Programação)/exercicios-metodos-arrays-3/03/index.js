const numeros = [1, 98, -76, 0, 12, 340, 19, 5, 60, 44, 170];

const maiorNumero = numeros.reduce(function (acumulador, elementoAtual) {
    if (elementoAtual > acumulador) {
        acumulador = elementoAtual;
    }
    return acumulador;
});
console.log(maiorNumero);