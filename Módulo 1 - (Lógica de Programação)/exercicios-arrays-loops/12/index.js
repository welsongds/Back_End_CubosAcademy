const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5) {
    primeiraFora = filaDeFora[0];
    if (primeiraFora === undefined) {
        break;
    }
    filaDeDentro.push(primeiraFora);
    filaDeFora.shift();
}
console.log(filaDeDentro);
console.log(filaDeFora);
