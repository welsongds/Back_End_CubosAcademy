//letra a
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort(function (primeiro, segundo) {
    return primeiro - segundo;
});
console.log(numeros);

//letra b
const numeros1 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros1.sort(function (primeiro, segundo) {
    return segundo - primeiro;
});
console.log(numeros1);

//letra c
const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros2.sort();
console.log(numeros2);

//letra d
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas.sort(function (primeiro, segundo) {
    return primeiro.localeCompare(segundo);
});
console.log(frutas);

//letra e
const frutas1 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas1.sort(function (primeiro, segundo) {
    return segundo.localeCompare(primeiro);
});
console.log(frutas1);

//letra f
const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas2.sort(function (primeiro, segundo) {
    return primeiro.length - segundo.length;
});
console.log(frutas2);
