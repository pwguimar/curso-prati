/**
 * Converte um array de pares [[chave, valor], ...] em um objeto.
 * @param {Array<[string, any]>} pares - Array de pares [chave, valor].
 * @returns {Object} - Objeto construído a partir dos pares.
 */
function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

/**
 * Converte um objeto { chave: valor, ... } em um array de pares.
 * @param {Object} obj - Objeto a ser convertido.
 * @returns {Array<[string, any]>} - Array de pares [chave, valor].
 */
function objetoParaPares(obj) {
    return Object.entries(obj);
}

function executarTeste(numero, entrada, esperado, tipoTeste) {
    let resultado;

    if (tipoTeste === 'paresParaObjeto') {
        resultado = paresParaObjeto(entrada);
    } else if (tipoTeste === 'objetoParaPares') {
        resultado = objetoParaPares(entrada);
    }

    const passou = JSON.stringify(resultado) === JSON.stringify(esperado);

    console.log(
        `Teste ${numero}:`,
        passou ? "✅ PASSOU" : `❌ FALHOU | Esperado: ${JSON.stringify(esperado)} | Recebido: ${JSON.stringify(resultado)}`
    );
}

// Teste 1: Caso básico
executarTeste(1,
    [['nome', 'João'], ['idade', 30]],
    { nome: 'João', idade: 30 },
    'paresParaObjeto'
);

// Teste 2: Valores numérico e booleano
executarTeste(2,
    [['ativo', true], ['nota', 8.5]],
    { ativo: true, nota: 8.5 },
    'paresParaObjeto'
);

// Teste 3: Array vazio
executarTeste(3,
    [],
    {},
    'paresParaObjeto'
);

// Teste 4: Um único par
executarTeste(4,
    [['chave', 'valor']],
    { chave: 'valor' },
    'paresParaObjeto'
);

// Teste 5: Chaves com números (como string)
executarTeste(5,
    [['1', 'um'], ['2', 'dois']],
    { '1': 'um', '2': 'dois' },
    'paresParaObjeto'
);

// Teste 6: Caso básico
executarTeste(6,
    { cidade: 'São Paulo', populacao: 12000000 },
    [['cidade', 'São Paulo'], ['populacao', 12000000]],
    'objetoParaPares'
);

// Teste 7: Objeto com propriedades booleanas
executarTeste(7,
    { admin: false, logado: true },
    [['admin', false], ['logado', true]],
    'objetoParaPares'
);

// Teste 8: Objeto vazio
executarTeste(8,
    {},
    [],
    'objetoParaPares'
);

// Teste 9: Objeto com uma única propriedade
executarTeste(9,
    { cor: 'azul' },
    [['cor', 'azul']],
    'objetoParaPares'
);

// Teste 10: Chaves como números (transforma em string)
executarTeste(10,
    { 10: 'dez', 20: 'vinte' },
    [['10', 'dez'], ['20', 'vinte']],
    'objetoParaPares'
);