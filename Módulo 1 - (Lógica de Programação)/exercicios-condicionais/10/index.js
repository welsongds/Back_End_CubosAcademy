const caractere = 4;
const vogaisMinusculas = ["a", "e", "i", "o", "u"];
const vogaisMaiusculas = ["A", "E", "I", "O", "U"];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

if (vogaisMinusculas.includes(caractere)) {
    console.log("É uma vogal minúscula!");
} else if (vogaisMaiusculas.includes(caractere)) {
    console.log("É uma vogal maiúscula!");
} else if (numeros.includes(caractere)) {
    console.log("É um número!");
} else {
    console.log("É uma consoante!");
}