const nomes = ["Ana", "Joana", "Carlos", "amanda", "Alberto", "Welson"];
const nomesComA = [];
for (let nome of nomes) {
    if (nome[0] === "a" || nome[0] === "A") {
        nomesComA.push(nome);
    }
}
console.log(nomesComA);