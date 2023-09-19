const palavras = ["arroz", "feijão", "carne", "camarão", "macarrão"];

function verificandoCompras(listaCompras) {
    const revisandoLista = listaCompras.some(function (item) {
        return item === "vodka" || item === "cerveja";
    });
    if (revisandoLista) {
        console.log("revise sua lista, joão. possui bebida com venda proibida");
    } else {
        console.log("tudo certo, vamo as compras!");
    }
}
verificandoCompras(palavras);