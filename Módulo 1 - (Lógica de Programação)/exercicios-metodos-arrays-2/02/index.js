const palavras = ["livro", "canet", "sol", "carro", "orelh"];

function validandoArray(arrayPalavras) {
    const resposta = arrayPalavras.some(function (palavra) {
        return palavra.length > 5;
    });
    if (resposta) {
        console.log("existe palavra inválida");
    } else {
        console.log("array válido");
    }
}
validandoArray(palavras);
