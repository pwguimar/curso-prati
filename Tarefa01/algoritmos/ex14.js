const prompt = require('prompt-sync')();

const numero = Number(prompt('Informe um número inteiro não negativo para calcular o fatorial: '));

if (numero < 0) {
    console.log('Erro: Não existe fatorial de número negativo.');
} else {
    let fatorial = 1;

    // Calcula o fatorial usando loop for (a alternativa era fazer com while!)
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}