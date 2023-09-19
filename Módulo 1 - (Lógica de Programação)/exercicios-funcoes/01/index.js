const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "c",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "c"
        },
        {
            resposta: "d",
            correta: "b"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "c"
        }
    ]
};
let contador = 0;
function corrigirProva(analise) {

    for (let questao of analise) {
        if (questao.resposta === questao.correta) {
            contador++;
        }
    }
    console.log(`Você acertou ${contador} e tirou ${contador * 2}`);
}
corrigirProva(prova.questoes);