const prompt = require('prompt-sync')();

// Constantes para critérios
const NOTA_MINIMA_APROVACAO = 7;
const NOTA_MINIMA_RECUPERACAO = 5;

// Solicita a nota
const nota = Number(prompt('Por favor, informe sua nota (0 a 10): '));

// Validação
if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Erro: Insira uma nota válida (de 0 a 10).");
} else {
    // Classificação
    if (nota >= NOTA_MINIMA_APROVACAO) {
        console.log("Parabéns, aprovado!");
    } else if (nota >= NOTA_MINIMA_RECUPERACAO) {
        console.log("Ainda há esperança: recuperação!");
    } else {
        console.log("Infelizmente, reprovado!");
    }
}