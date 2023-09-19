const jogada1 = "tesoura";
const jogada2 = "pedra";

//seu código aqui
if (jogada1 === jogada2) {
    console.log("Deu empate")
}
if (jogada1 == "pedra") {
    if (jogada2 == "tesoura") {
        console.log("O jogador 1 venceu.");
    } else if (jogada2 == "papel") {
        console.log("O jogador 2 venceu.");
    }
} else if (jogada1 == "tesoura") {
    if (jogada2 == "papel") {
        console.log("O jogador 1 venceu.");
    } else if (jogada2 == "pedra") {
        console.log("O jogador 2 venceu.");
    }
} else if (jogada1 == "papel") {
    if (jogada2 == "pedra") {
        console.log("O jogador 1 venceu.");
    } else if (jogada2 == "tesoura") {
        console.log("O jogador 2 venceu.");
    }
} else {
    console.log("As informações que você inseriu não coincidem com as possibildiades");
}