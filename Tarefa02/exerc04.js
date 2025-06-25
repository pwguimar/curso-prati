/**
 * Calcula o fatorial de um número inteiro não negativo de forma recursiva.
 * @param {number} n - O número para calcular o fatorial.
 * @returns {number} - O fatorial de n.
 * @throws {Error} - Se n for negativo ou não for um número inteiro.
 */
function fatorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error("Entrada deve ser um número inteiro.");
    }

    if (n < 0) {
        throw new Error("Não existe fatorial de número negativo.");
    }

    if (n === 0) {
        return 1;
    }

    return n * fatorial(n - 1);
}

// Função auxiliar para rodar os testes
function executarTeste(numero, entrada, esperado) {
    try {
        const resultado = fatorial(entrada);
        const passou = resultado === esperado;

        console.log(
            `Teste ${numero}:`,
            passou ? "✅ PASSOU" : `❌ FALHOU | Esperado: ${esperado} | Recebido: ${resultado}`
        );
    } catch (error) {
        const mensagemEsperadaParaErro = typeof esperado === 'string';
        if (mensagemEsperadaParaErro && error.message === esperado) {
            console.log(`Teste ${numero}: ✅ PASSOU (erro esperado)`);
        } else {
            console.log(`Teste ${numero}: ❌ FALHOU (erro inesperado):`, error.message);
        }
    }
}

// Execução dos testes
executarTeste(1, 0, 1);                     // Caso base
executarTeste(2, 1, 1);                     // Fatorial de 1
executarTeste(3, 5, 120);                   // Fatorial de 5
executarTeste(4, 7, 5040);                  // Fatorial de 7
executarTeste(5, -3, "Não existe fatorial de número negativo."); // Erro esperado
executarTeste(6, 3.5, "Entrada deve ser um número inteiro.");    // Erro esperado