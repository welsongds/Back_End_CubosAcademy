//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;
if (idadeDoAluno < 18) {
    if (possuiResponsavel === false) {
        console.log("Não é possível fazer a rematrícula!");
    } else if (possuiResponsavel === true) {
        console.log("Rematrícula realizada com sucesso!");
    }
} else if (idadeDoAluno >= 18) {
    console.log("Rematrícula realizada com sucesso!");
}