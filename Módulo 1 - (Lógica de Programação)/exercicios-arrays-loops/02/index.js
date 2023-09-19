const letras = ["A", "e", "B", "C", "E", "z"];
let contagemE = 0;
for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        contagemE++;
    }
}
if (contagemE === 0) {
    console.log('Não há nenhuma letra "E" ou "e" no array');
} else if (contagemE > 0) {
    console.log(`Há ${contagemE} letras "e" ou "E"`);
}