const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let valor;

console.log('Digite números decimais. Digite 0 para finalizar.');

do {
    valor = Number(prompt('Informe um número: '));
    // O zero é apenas o critério de parada e NÃO entra no cálculo da média
    if (valor !== 0) {
        soma += valor;
        quantidade++;
    }

} while (valor !== 0);

if (quantidade > 0) {
    const media = soma / quantidade;
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}