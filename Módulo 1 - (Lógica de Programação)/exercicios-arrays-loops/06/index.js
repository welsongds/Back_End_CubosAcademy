const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 22, 31, 12, 87];
let somaPares = 0;

for (let numero of numeros) {
    if (numero % 2 === 0) {
        somaPares += numero;
    }
}
console.log(`A soma dos números pares é ${somaPares}`);
