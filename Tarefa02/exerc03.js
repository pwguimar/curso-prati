function extrairPalavrasUnicas(texto) {
    const palavras = separarPalavras(texto);
    const palavrasUnicas = [];

    for (let i = 0; i < palavras.length; i++) {
        const palavraAtual = palavras[i];

        if (!contem(palavrasUnicas, palavraAtual)) {
            palavrasUnicas.push(palavraAtual);
        }
    }

    return palavrasUnicas;
}

function separarPalavras(texto) {
    if (texto.trim() === "") {
        return [];
    }
    return texto.split(" ");
}

function contem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}

function executarTeste(numero, entrada, esperado) {
    const resultado = extrairPalavrasUnicas(entrada);
    const passou = arraysIguais(resultado, esperado);

    console.log(
        `Teste ${numero}:`,
        passou
            ? "✅ PASSOU"
            : `❌ FALHOU | Esperado: ${JSON.stringify(esperado)} | Recebido: ${JSON.stringify(resultado)}`
    );
}

function arraysIguais(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Tentativa isolada
const entrada = "olá olá mundo mundo";
const saida = extrairPalavrasUnicas(entrada);
console.log("Palavras únicas:", saida);

// Testes
executarTeste(1, "olá olá mundo mundo", ["olá", "mundo"]);
executarTeste(2, "teste único exemplo teste", ["teste", "único", "exemplo"]);
executarTeste(3, "um dois três dois um", ["um", "dois", "três"]);
executarTeste(4, "palavra", ["palavra"]);
executarTeste(5, "", []);