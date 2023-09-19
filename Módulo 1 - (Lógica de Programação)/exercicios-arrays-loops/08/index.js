const numeros = [3, 24, 1, 8, 11, 7, 15, 30, 77, 22];
maior = 0;
for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
}
console.log(`O maior número do array é ${maior}`);