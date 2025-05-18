// Programa para verificar se um número é par ou ímpar (exercicio01=ex01)
// Instalar prompt-sync via terminal se necessário usando: npm install prompt-sync

const prompt = require('prompt-sync')();

let valor = Number(prompt('Digite um número inteiro: '));

// Verifica se é um número válido e inteiro (adicional ao enunciado)

if (isNaN(valor)) {
    console.log('Erro: Por favor digite um número válido.');
} else if (!Number.isInteger(valor)) {
    console.log('Erro: Infelizmente o número digitado não é um número inteiro.');
} else {
    // Verifica se é par ou ímpar
    if (valor % 2 === 0) {
        console.log(`O valor ${valor} é par`);
    } else {
        console.log(`O valor ${valor} é ímpar`);
    }
}
