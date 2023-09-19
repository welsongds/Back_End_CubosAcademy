const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function selecionandoCarros(carros, inicio) {
    let selecionados = carros.slice(inicio, inicio + 3);
    return selecionados;
}
console.log(selecionandoCarros(nomes, posicao));