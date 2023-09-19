const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento(fila, tipoOperacao, novoPaciente) {
    if (tipoOperacao.toLowerCase() === "atender") {
        fila.shift();
        return fila;
    } else if (tipoOperacao.toLowerCase() === "agendar") {
        fila.push(novoPaciente);
        return fila;
    } else {
        return "Operação Inválida";
    }
}

console.log(atendimento(pacientes, "atender"))
console.log(atendimento(pacientes, "agendar", "Welson"))
