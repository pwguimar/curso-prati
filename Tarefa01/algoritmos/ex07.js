const prompt = require('prompt-sync')();
const PRECO_UNITARIO_MENOS_DEZENA = 0.30;
const PRECO_UNITARIO_DUZIA = 0.25;
const quantidadeMacas = Number(prompt('Quantas maçãs você comprou? '));

if (quantidadeMacas < 12) {
    const valorTotal = quantidadeMacas * PRECO_UNITARIO_MENOS_DEZENA;
    console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
} else {
    const valorTotal = quantidadeMacas * PRECO_UNITARIO_DUZIA;
    console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
}