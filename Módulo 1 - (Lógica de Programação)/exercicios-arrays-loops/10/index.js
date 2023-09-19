const numeros = [8, 11, 4, 22, 6, 2];
let maior = 0;
let menor = numeros[0];
for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}
let diferenca = maior - menor;
console.log(`A maior diferença entre os números do array é ${diferenca}`);
