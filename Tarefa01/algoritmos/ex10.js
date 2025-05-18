const prompt = require('prompt-sync')();

const numero = Number(prompt('Informe um valor inteiro: '));

for (let i = 0; i < 10; i++) {
    console.log(numero);
}