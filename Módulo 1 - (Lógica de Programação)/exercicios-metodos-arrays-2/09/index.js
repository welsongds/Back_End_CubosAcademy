const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function filtrandoInteiros(arrayNumeros) {
    const inteiros = arrayNumeros.filter(function (numero) {
        return numero > 0;
    });
    console.log(inteiros);
}
filtrandoInteiros(numeros);
