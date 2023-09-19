const nomes = ["Maria", "João", "José", "Antonio", "Beatriz", "Camila", "amanda",];

function filtrandoA(arrayNomes) {
    const comecaComA = arrayNomes.filter(function (nome) {
        return nome[0] === "a" || nome[0] === "A";
    })
    console.log(comecaComA);
}
filtrandoA(nomes);
