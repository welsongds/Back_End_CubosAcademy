const alturaEmCm = 206;

//seu código aqui
if (alturaEmCm >= 180) {
    if (alturaEmCm <= 185) {
        console.log("Você foi aprovado, para a posição de Libero.");
    } else if (alturaEmCm <= 195) {
        console.log("Você foi aprovado, para a posição de Ponteiro.");
    } else if (alturaEmCm <= 205) {
        console.log("Você foi aprovado, para a posição de Oposto.");
    } else {
        console.log("Você foi aprovado, para a posição de Central.");
    }
} else {
    console.log("Você foi reprovado.");
}