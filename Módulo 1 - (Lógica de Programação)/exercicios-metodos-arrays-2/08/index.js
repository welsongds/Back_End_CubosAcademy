const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
let i = -1;

function formatandoLista(array) {
    const arrayFormatado = array.map(function (fruta) {
        i++;
        const primeiraLetra = fruta.slice(0, 1).toUpperCase();
        const resto = fruta.slice(1).toLowerCase();
        return `${i} - ${primeiraLetra + resto}`;
        i++;
    })
    console.log(arrayFormatado);
}
formatandoLista(frutas);