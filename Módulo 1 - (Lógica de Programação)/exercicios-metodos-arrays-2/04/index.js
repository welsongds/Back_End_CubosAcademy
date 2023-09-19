const numeros = [0, 122, 4, 6, 120, 8, 44];

function testandoPar(arrayNumeros) {
    const testando = arrayNumeros.every(function (numero) {
        return numero % 2 === 0;
    });
    if (testando) {
        console.log("array válido");
    } else {
        console.log("array inválido");
    }
}
testandoPar(numeros);