const cpf = "12.345.678/0001-99";

function removendoPont(numero) {
    while (numero !== numero.replace(".", "")) {
        numero = numero.replace(".", "");
        numero = numero.replace("-", "");
        numero = numero.replace("/", "");
    }
    return numero;
}
console.log(removendoPont(cpf));