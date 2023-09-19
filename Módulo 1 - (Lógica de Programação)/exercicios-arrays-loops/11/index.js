const original = [5, 7, 13, 15, 17, 26, 34, 118, 222, 245];
const selecionados = [];

for (let numeros of original) {
    if ((numeros >= 10 && numeros <= 20) || numeros > 100) {
        selecionados.push(numeros);
    }
}
console.log(selecionados);
