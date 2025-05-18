const prompt = require('prompt-sync')();
const altura = Number(prompt('Digite sua altura (em metros): '));
const peso = Number(prompt('Digite seu peso (em kg): '));
const imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Categoria: Abaixo do peso');
} else if (imc < 25) {
    console.log('Categoria: Peso normal');
} else if (imc < 30) {
    console.log('Categoria: Sobrepeso');
} else {
    console.log('Categoria: Obesidade');
}