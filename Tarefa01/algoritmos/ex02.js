const prompt = require('prompt-sync')();

let idade = Number(prompt('Por favor, informe sua idade (número inteiro entre 0 e 120): '));

// Validação do input
if (isNaN(idade) || !Number.isInteger(idade)) {
    console.log('Erro: Insira apenas números inteiros.');
} else if (idade < 0 || idade > 120) {
    console.log('Erro: A idade informada parece não ser válida.');
} else {
    // Classificação por faixa etária
    if (idade <= 12) {
        console.log('Você é uma criança.');
    } else if (idade <= 17) {
        console.log('Você é um adolescente.');
    } else if (idade <= 59) {
        console.log('Você é um adulto.');
    } else {
        console.log('Você é uma pessoa vivida (idosa).');
    }
}