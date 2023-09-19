const cidades = ["Salvador", "São Paulo", "Brasilia", "Recife", "Rio de Janeiro"]

function selecionandoCidades(arrayCidades) {
    const filtrando = arrayCidades.filter(function (cidade) {
        return cidade.length <= 8;
    });
    console.log(filtrando.join(", "))
}
selecionandoCidades(cidades);