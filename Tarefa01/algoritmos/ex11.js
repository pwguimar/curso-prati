const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt(`Informe o ${i + 1}º número: `));
    soma += numero;
}

console.log(`A soma total é: ${soma}`);