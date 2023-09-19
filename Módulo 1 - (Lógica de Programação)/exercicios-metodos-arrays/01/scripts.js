const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let contrario = frutas.reverse();
contrario = contrario.join(", ");
console.log(contrario);

const frutas1 = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas1.splice(4, 1, "Melão");
frutas1.shift();
console.log(frutas1);