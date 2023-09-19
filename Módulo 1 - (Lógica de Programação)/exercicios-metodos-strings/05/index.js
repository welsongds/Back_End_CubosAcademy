const numeroCartao = '1111222233334444';

function escondendoCartao(numero) {
    const part1 = numero.slice(0, 4);
    const part2 = numero.slice(12);
    return part1 + "********" + part2;
}
console.log(escondendoCartao(numeroCartao));
