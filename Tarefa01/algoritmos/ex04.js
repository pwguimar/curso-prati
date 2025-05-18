const prompt = require('prompt-sync')();

console.log("=== MENU SIMPLES ===");
console.log("1 - Saudação personalizada");
console.log("2 - Calcular área do quadrado");
console.log("3 - Verificar se pode votar");

const opcao = prompt("Digite o número da opção desejada: ");

switch (opcao) {
    case '1': {
        const nome = prompt("Digite seu nome: ");
        console.log(`Olá, ${nome}! Seja muito bem-vindo(a)!`);
        break;
    }

    case '2': {
        const lado = Number(prompt("Digite o lado do quadrado (em cm): "));

        if (isNaN(lado) || lado <= 0) {
            console.log("Valor inválido! Digite um número positivo.");
        } else {
            const area = lado * lado;
            console.log(`A área do quadrado é ${area} cm²`);
        }
        break;
    }

    case '3': {
        const idade = Number(prompt("Digite sua idade: "));

        if (isNaN(idade) || idade <= 0) {
            console.log("Idade inválida!");
        } else {
            const podeVotar = idade >= 16 ? "PODE votar" : "NÃO PODE votar";
            console.log(`Você ${podeVotar} (idade: ${idade} anos)`);
        }
        break;
    }

    default:
        console.log("Opção inválida. Digite 1, 2 ou 3.");
}