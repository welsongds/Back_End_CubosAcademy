const idade = 20;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (idade < 18 || ehEstudante === true) {
    console.log("Seu ingresso custa 10 reais");
} else {
    console.log("Seu ingresso custa 20 reais");
}
