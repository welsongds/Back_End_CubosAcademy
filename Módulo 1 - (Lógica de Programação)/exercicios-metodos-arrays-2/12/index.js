const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

function filtro1(arrayDados, idadeProcurada, maiorMenor, profissaoProcurada) {
    const filtrando1 = arrayDados.filter(function (pessoa) {
        if (maiorMenor === "maior") {
            return pessoa.idade > idadeProcurada;
        } else if (maiorMenor === "menor") {
            return pessoa.idade < idadeProcurada;
        }

    });
    const filtrando2 = filtrando1.filter(function (pessoa) {
        if (profissaoProcurada !== undefined) {
            return pessoa.profissao === profissaoProcurada;
        } else {
            return filtrando1
        }
    });
    console.log(filtrando2);
}

filtro1(pessoas, 31, "menor");
