const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(fila, novoPaciente) {
    fila.push(novoPaciente);
    fila.join(", ");
    return fila;
}
function atenderPaciente(fila) {
    fila.shift();
    fila.join(", ");
    return fila;
}
function cancelarAtendimento(fila, cancelar) {
    const indice = fila.indexOf(cancelar);
    if (indice !== -1) {
        fila.splice(indice, 1);
        fila.join(", ");
        return fila;
    } else {
        return "Paciente não está na fila"
    }
}
console.log(agendarPaciente(pacientes, "Welson"));
console.log(atenderPaciente(pacientes));
console.log(cancelarAtendimento(pacientes, "Ana"));
