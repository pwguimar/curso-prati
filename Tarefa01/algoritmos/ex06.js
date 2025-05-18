// Para que três lados formem um triângulo, a soma de quaisquer dois lados deve ser maior que o terceiro .
// A ordem de verficação do triângulos importa: equilatero--isosceles--escaleno.

const prompt = require('prompt-sync')();

const a = Number(prompt('Digite o valor do lado A: '));
const b = Number(prompt('Digite o valor do lado B: '));
const c = Number(prompt('Digite o valor do lado C: '));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log('Triângulo Equilátero');
    } else if (a === b || a === c || b === c) {
        console.log('Triângulo Isósceles');
    } else {
        console.log('Triângulo Escaleno');
    }
} else {
    console.log('Os valores informados não formam um triângulo.');
}