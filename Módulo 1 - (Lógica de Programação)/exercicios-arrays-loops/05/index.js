const original = [1, 4, 12, 21, 53, 88, 112, 57, 90, 75, 22];
const pares = [];

for (let numeros of original) {
    if (numeros % 2 === 0) {
        pares.push(numeros);
    }
}
console.log(pares);