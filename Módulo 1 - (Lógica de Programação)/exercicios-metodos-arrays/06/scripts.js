const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
function achandoDono(lista, nomePet) {
    let donoEncontrado = false;
    let nomeDono = "";
    for (let pessoa of lista) {
        if (pessoa.pets.includes(nomePet)) {
            donoEncontrado = true;
            nomeDono = pessoa.nome;
            break;
        }
    }
    if (donoEncontrado) {
        return `O dono(a) do(a) ${nomePet} é o(a) ${nomeDono}`;
    } else {
        return `Que pena ${nomePet}, não encontramos seu dono(a)`;
    }
}
console.log(achandoDono(usuarios, "Lessie"));