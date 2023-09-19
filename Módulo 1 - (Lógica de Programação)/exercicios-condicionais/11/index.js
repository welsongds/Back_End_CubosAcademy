//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 50;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;
const valorMensal = rendaMensalEmCentavos * 0.18;
const totalDoCurso = 1800000;
const faltaPagar = totalDoCurso - totalJaPagoPeloAluno;

if (mesesDecorridos >= 60) {
    console.log(`O tempo para pagar supera 60 meses, então já está quitado.`);
} else if (totalJaPagoPeloAluno == totalDoCurso) {
    console.log(`O valor do curso já foi quitado, você pagou o valor completo.`);
} else if (rendaMensalEmCentavos < 200000) {
    console.log(`O valor da mensalidade está em 0 reais, pois o aluno não atingiu a renda mínima.`);
} else if (rendaMensalEmCentavos >= 200000) {
    console.log(`O valor da mensalidade nesse mês é R$${valorMensal / 100} reais.`);
}