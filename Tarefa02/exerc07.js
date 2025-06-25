/**
 * Retorna uma lista com os nomes dos produtos ordenados por preço crescente.
 * @param {Array<{nome: string, preco: number}>} produtos - Lista de produtos.
 * @returns {string[]} - Lista de nomes ordenada por preço.
 */
function obterNomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() // Não modifica o array original
        .sort((a, b) => {
            if (a.preco !== b.preco) {
                return a.preco - b.preco; // Primeiro critério: preço
            }
            return a.nome.localeCompare(b.nome); // Segundo critério: nome
        })
        .map(produto => produto.nome);
}

function executarTeste(numero, entrada, esperado) {
    const resultado = obterNomesOrdenadosPorPreco(entrada);
    const passou = arraysSaoIguais(resultado, esperado);

    console.log(
        `Teste ${numero}:`,
        passou ? "✅ PASSOU" : `❌ FALHOU | Esperado: [${esperado}] | Recebido: [${resultado}]`
    );
}

function arraysSaoIguais(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Teste 1: Caso básico
executarTeste(1,
    [
        { nome: 'Notebook', preco: 3000 },
        { nome: 'Teclado', preco: 100 },
        { nome: 'Mouse', preco: 50 }
    ],
    ['Mouse', 'Teclado', 'Notebook']
);

// Teste 2: Produtos com preços iguais
executarTeste(2,
    [
        { nome: 'Produto A', preco: 100 },
        { nome: 'Produto B', preco: 100 },
        { nome: 'Produto C', preco: 100 }
    ],
    ['Produto A', 'Produto B', 'Produto C']
);

// Teste 3: Um único produto
executarTeste(3,
    [{ nome: 'Único', preco: 200 }],
    ['Único']
);

// Teste 4: Array vazio
executarTeste(4,
    [],
    []
);

// Teste 5: Produtos desordenados com mais itens
executarTeste(5,
    [
        { nome: 'Celular', preco: 1500 },
        { nome: 'Fone', preco: 80 },
        { nome: 'Cadeira', preco: 400 },
        { nome: 'Mesa', preco: 600 }
    ],
    ['Fone', 'Cadeira', 'Mesa', 'Celular']
);