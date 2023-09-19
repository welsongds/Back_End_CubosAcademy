const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function procurandoCEP(arrayEnderecos, cepProcurado) {
    const selecionando = arrayEnderecos.find(function (endereco) {
        return endereco.cep === cepProcurado
    });
    console.log(selecionando.rua);
}
procurandoCEP(enderecos, 11222333);
