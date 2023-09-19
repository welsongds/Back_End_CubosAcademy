const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividindoGrupos(pessoas, quantidade) {
    let contador = 0
    for (let i = 0; i < pessoas.length; i += quantidade) {
        const grupo = pessoas.slice(i, i + quantidade).join(", ");
        contador++;
        console.log(`Grupo ${contador}: ${grupo}`);
    }
}
dividindoGrupos(nomes, tamanhoDoGrupo);