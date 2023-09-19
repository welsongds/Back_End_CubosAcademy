const ladoA = 5;
const ladoB = 6;

if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log("Essa é a bucha de Branco.");
    } else if (ladoA === 1) {
        console.log("Essa é a bucha de Ás.");
    } else if (ladoA === 2) {
        console.log("Essa é a bucha de Duque.");
    } else if (ladoA === 3) {
        console.log("Essa é a bucha de Terno.");
    } else if (ladoA === 4) {
        console.log("Essa é a bucha de Quadra.");
    } else if (ladoA === 5) {
        console.log("Essa é a bucha de Quina.");
    } else if (ladoA === 6) {
        console.log("Essa é a bucha de Sena.");
    }
} else {
    console.log("A pedra não é uma bucha.");
}