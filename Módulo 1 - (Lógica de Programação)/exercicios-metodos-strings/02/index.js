const cpf = "12345678900";
const cnpj = "12345678900123";

function formatarCPF(numero) {
    if (numero.length === 11) {
        const part1 = numero.slice(0, 3);
        const part2 = numero.slice(3, 6);
        const part3 = numero.slice(6, 9);
        const part4 = numero.slice(9);
        return part1 + '.' + part2 + '.' + part3 + '-' + part4;
    } else {
        return "CPF Inválido";
    }
}
console.log(formatarCPF(cpf));

function formatarCNPJ(numero) {
    if (numero.length === 14) {
        const part1 = numero.slice(0, 2);
        const part2 = numero.slice(2, 5);
        const part3 = numero.slice(5, 8);
        const part4 = numero.slice(8, 12);
        const part5 = numero.slice(12);
        return part1 + '.' + part2 + '.' + part3 + '/' + part4 + '-' + part5;
    } else {
        return "CNPJ Inválido";
    }
}
console.log(formatarCNPJ(cnpj));
