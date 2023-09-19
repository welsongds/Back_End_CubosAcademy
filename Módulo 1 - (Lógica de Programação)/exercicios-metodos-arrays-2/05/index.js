const usuários = [
    { nome: "André", idade: 29, habilitado: true, },
    { nome: "Marcos", idade: 70, habilitado: true, },
    { nome: "Ana", idade: 35, habilitado: true, },
    { nome: "Vinícius", idade: 44, habilitado: true, },
    { nome: "Carlos", idade: 17, habilitado: false, },
    { nome: "Maria", idade: 19, habilitado: true, },
];
function verificandoHabilitados(arrayPessoas) {
    const filtrando = arrayPessoas.filter(function (pessoa) {
        return pessoa.idade >= 18;
    });
    const habilitacao = filtrando.every(function (pessoa) {
        return pessoa.habilitado;
    });
    if (habilitacao) {
        console.log("todos passaram no teste");
    } else {
        console.log("todos precisam estar habilitados");
    }
}
verificandoHabilitados(usuários);