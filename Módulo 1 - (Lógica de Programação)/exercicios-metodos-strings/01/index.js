const comentario = "Esse covid é muito perigoso!";

function analisandoComent(texto) {
    const preparadoAnalisar = texto.toLowerCase();
    if (preparadoAnalisar.includes("covid") || preparadoAnalisar.includes("pandemia")) {
        console.log("Comentário bloqueando por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}
analisandoComent(comentario);