const readline = require('readline');

// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// Configura a interface para ler entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar() {
    rl.question("Digite um número entre 1 e 100: ", (entrada) => {
        const palpite = parseInt(entrada);
        tentativas++;

        // Verifica se a entrada é válida
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, digite um número válido entre 1 e 100.");
            perguntar();
            return;
        }

        // Verifica o palpite
        if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
            rl.close();
        } else if (palpite < numeroAleatorio) {
            console.log("Mais alto!");
            perguntar();
        } else {
            console.log("Mais baixo!");
            perguntar();
        }
    });
}

// Inicia o jogo
perguntar();

