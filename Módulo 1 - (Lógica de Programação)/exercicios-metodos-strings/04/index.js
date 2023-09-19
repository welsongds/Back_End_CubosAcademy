let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let nomeFormatado = "";

function formatandoId(id) {
    id = id.padStart(6, "0");
    return id;
}
function formatandoNome(name) {
    const nomeSeparado = name.split(" ");
    for (let nome of nomeSeparado) {
        let primeiraLetra = nome.slice(0, 1);
        let restoNome = nome.slice(1);
        nomeFormatado += primeiraLetra.toUpperCase() + restoNome.toLowerCase() + " ";
    }
    return nomeFormatado.trim();
}
function formantandoEmail(emailUser) {
    const emailFormatado = emailUser.trim();
    return emailFormatado;
}
console.log(formatandoId(identificador));
console.log(formatandoNome(nome));
console.log(formantandoEmail(email));