/**
 * Agrupa vendas por cliente e retorna a soma dos totais.
 * @param {Array<{cliente: string, total: number}>} vendas - Lista de vendas.
 * @returns {Object} - Objeto com clientes como chaves e soma dos totais como valores.
 */
function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (!acumulador[cliente]) {
            acumulador[cliente] = 0;
        }

        acumulador[cliente] += total;

        return acumulador;
    }, {});
}

function executarTeste(numero, entrada, esperado) {
    const resultado = agruparVendasPorCliente(entrada);
    const passou = objetosSaoIguais(resultado, esperado);

    console.log(
        `Teste ${numero}:`,
        passou ? "✅ PASSOU" : `❌ FALHOU | Esperado: ${JSON.stringify(esperado)} | Recebido: ${JSON.stringify(resultado)}`
    );
}

function objetosSaoIguais(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Teste 1: Caso básico com clientes repetidos
executarTeste(1, [
    { cliente: 'João', total: 100 },
    { cliente: 'Maria', total: 200 },
    { cliente: 'João', total: 50 },
    { cliente: 'Ana', total: 150 },
    { cliente: 'Maria', total: 50 }
], {
    João: 150,
    Maria: 250,
    Ana: 150
});

// Teste 2: Clientes com nomes maiúsculos e minúsculos (não deve normalizar)
executarTeste(2, [
    { cliente: 'joão', total: 100 },
    { cliente: 'João', total: 50 }
], {
    joão: 100,
    João: 50
});

// Teste 3: Array vazio
executarTeste(3, [], {});

// Teste 4: Apenas um cliente
executarTeste(4, [
    { cliente: 'Carlos', total: 300 }
], {
    Carlos: 300
});

// Teste 5: Muitos registros do mesmo cliente
executarTeste(5, [
    { cliente: 'Pedro', total: 50 },
    { cliente: 'Pedro', total: 50 },
    { cliente: 'Pedro', total: 50 },
    { cliente: 'Pedro', total: 50 }
], {
    Pedro: 200
});