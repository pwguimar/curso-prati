const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Informe o primeiro número: '));
const numero2 = Number(prompt('Informe o segundo número: '));

if (numero1 === numero2) {
    console.log('Os números não podem ser iguais. Reinicie e informe valores diferentes.');
} else if (numero1 < numero2) {
    console.log(`Em ordem crescente: ${numero1}, ${numero2}`);
} else {
    console.log(`Em ordem crescente: ${numero2}, ${numero1}`);
}

