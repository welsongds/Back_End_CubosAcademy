const celular = 999918888;

const telefone = String(celular);
function formatandoNumero(numero) {
    if (numero.length === 11) {
        const part1 = numero.slice(0, 2);
        const part2 = numero.slice(2, 3);
        const part3 = numero.slice(3, 8);
        const part4 = numero.slice(8);
        return console.log(`(${part1}) ${part2} ${part3}-${part4}`);
    } else if (numero.length === 9) {
        const part1 = numero.slice(0, 1);
        const part2 = numero.slice(1, 5);
        const part3 = numero.slice(5);
        return console.log(`${part1} ${part2}-${part3}`);
    }
}
formatandoNumero(telefone);
