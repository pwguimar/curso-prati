const prompt = require('prompt-sync')();

const numero = Number(prompt('Informe um valor para a tabuada: '));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} × ${i} = ${numero * i}`);
}

