const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function filtrandoPares(arrayNumeros) {
    const par = arrayNumeros.filter(function (numero) {
        return numero % 2 === 0;
    });
    console.log(par);
}
filtrandoPares(numeros);