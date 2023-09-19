const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function procurandoLivro(arrayLivros, livro) {
    const posicao = arrayLivros.findIndex(function (item) {
        return item === livro;
    });
    console.log(`O livro está na posição ${posicao + 1}`);
}
procurandoLivro(livros, nomeDoLivro);
