/**
 * Retorna uma versão "debounced" da função fornecida.
 * A função só será executada se não for chamada novamente antes do término do delay.
 *
 * @param {Function} fn - A função original a ser debounceada.
 * @param {number} delay - Tempo em milissegundos para o delay.
 * @returns {Function} - A função debounceada.
 */
function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Teste 1: Chamada única após delay
function testeUnico() {
    console.log("Teste 1: Executando função única após delay.");
}
const debouncedTeste1 = debounce(testeUnico, 200);

console.log("Teste 1 iniciado...");
debouncedTeste1();

// Teste 2: Múltiplas chamadas, mas apenas a última deve executar
function testeMultiploChamadas() {
    console.log("Teste 2: Apenas a última chamada deve executar.");
}
const debouncedTeste2 = debounce(testeMultiploChamadas, 200);

console.log("Teste 2 iniciado... (chamando múltiplas vezes)");
debouncedTeste2();
debouncedTeste2();
debouncedTeste2();

// Teste 3: Diferentes contextos
const obj = {
    valor: 42,
    metodo: function () {
        console.log(`Teste 3: Contexto this.valor = ${this.valor}`);
    }
};

const debouncedMetodo = debounce(obj.metodo, 200);
console.log("Teste 3: Mantendo contexto do this...");
debouncedMetodo();

// Teste 4: Debounce com argumentos
function somaComLog(a, b) {
    console.log(`Teste 4: Soma: ${a} + ${b} = ${a + b}`);
}

const somaDebounced = debounce(somaComLog, 300);
console.log("Teste 4: Executando com argumentos...");
somaDebounced(10, 20);

// Teste 5: Debounce em evento de input (simulado)
function pesquisar(termo) {
    console.log(`Teste 5: Pesquisando por "${termo}"`);
}

const pesquisarDebounced = debounce(pesquisar, 500);

console.log("Teste 5: Simulando eventos rápidos de input...");
pesquisarDebounced("ca");
pesquisarDebounced("cat");
pesquisarDebounced("cato");
pesquisarDebounced("catol");
pesquisarDebounced("catolic");