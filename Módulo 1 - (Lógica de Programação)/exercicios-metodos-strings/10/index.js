const nomeArquivo = 'Foto da Familia.txt';

function validandoArquivo(nome) {
    if (nome.includes("jpg") || nome.includes("jpeg") || nome.includes("gif") || nome.includes("png")) {
        return "Arquivo válido";
    } else {
        return "Arquivo inválido";
    }
}
console.log(validandoArquivo(nomeArquivo))