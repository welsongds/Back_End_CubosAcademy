const curso = {
    id: 1234,
    nome: "Lógica de Programação",
    aulas: [],
}
curso.aulas.push({ identificador: 1, nome_da_aula: "Introdução a programação" });
curso.aulas.push({ identificador: 2, nome_da_aula: "Variáveis" });
curso.aulas.push({ identificador: 3, nome_da_aula: "Condicionais" });
curso.aulas.push({ identificador: 4, nome_da_aula: "Arrays" });
console.log(curso);
