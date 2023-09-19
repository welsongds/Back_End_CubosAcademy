//declarando variaveis
const populacaoInicial = 1000;
const quantidadeInfect = 4;
const tempoDecorrido = 100;
const pessoasInfectadas = populacaoInicial * quantidadeInfect ** (tempoDecorrido / 7);
//imprimindo valores na tela
console.log(`A quantidade de infectados será ${pessoasInfectadas}!`);
