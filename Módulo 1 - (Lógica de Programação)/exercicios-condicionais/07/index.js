const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 25000; //emCentavos

//seu código aqui
if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos < 28_559.70) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE.");
} else {
    console.log("PEGA LEAO");
}