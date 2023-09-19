const email = ".messias@cubos";

function validandoEmail(conta) {
    if (conta.indexOf("@") !== -1 && conta.indexOf(".") !== -1) {
        if (conta.indexOf(".") === 0 || conta.lastIndexOf(".") == conta.length - 1) {
            return "E-mail inválido";
        } else {
            return "E-mail válido";
        }
    } else {
        return "E-mail inválido";
    }
}
console.log(validandoEmail(email));
