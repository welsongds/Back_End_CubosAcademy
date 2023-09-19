const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
let adultos = [];
let jovens = [];
for (let usuario of usuarios) {
    if (usuario.idade >= 18) {
        adultos.push({ ...usuario });
    } else {
        jovens.push({ ...usuario });
    }
}
console.log(`Essas informações são dos adultos:`)
console.log(adultos)
console.log(`Essas informações são dos jovens:`)
console.log(jovens)