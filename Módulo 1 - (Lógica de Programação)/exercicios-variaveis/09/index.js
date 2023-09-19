//declarando variaveis
const numeroLados = 6;
const somaAngulosInternos = (numeroLados - 2) * 180;
//imprimindo valor da soma dos ângulos internos
console.log(`A soma dos ângulos internos do poligono é ${somaAngulosInternos}!`);
//declarando mais variaveis para outro calculo
const valorAngulo = somaAngulosInternos / numeroLados;
//imprimindo valor do segundo calculo
console.log(`O valor de cada ângulo interno é ${valorAngulo}!`);
