const numeros = [54, 22, 14, 10, 284];
let contemProcurado = false;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(`O número 10 está na posição ${i}`);
        contemProcurado = true;
    }
}
if (!contemProcurado) {
    console.log(-1);
}
