/**
 * Retorna uma versão memoizada da função fornecida.
 * Armazena em cache os resultados com base nos argumentos passados.
 *
 * @param {Function} fn - A função original a ser memoizada.
 * @returns {Function} - A função memoizada.
 */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(`🎯 Cache hit para: ${key}`);
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);

        return result;
    };
}

// Teste 1: Fatorial
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

const fatorialMemoizado = memoize(fatorial);

console.log("Teste 1: Fatorial");
console.log("Resultado:", fatorialMemoizado(5)); // Primeira vez
console.log("Resultado (cache):", fatorialMemoizado(5)); // Segunda vez (cache)

// Teste 2: Soma com múltiplos argumentos
function soma(a, b) {
    return a + b;
}

const somaMemoizada = memoize(soma);

console.log("\nTeste 2: Soma");
console.log("Resultado:", somaMemoizada(2, 3));
console.log("Resultado (cache):", somaMemoizada(2, 3));

// Teste 3: Valores diferentes
console.log("\nTeste 3: Diferentes valores");
console.log("Resultado:", somaMemoizada(4, 5));
console.log("Resultado (cache):", somaMemoizada(4, 5));

// Teste 4: Contexto this
const obj = {
    valor: 10,
    dobrar: function (x) {
        return x * this.valor;
    }
};

const dobrarMemoizado = memoize(obj.dobrar.bind(obj));

console.log("\nTeste 4: Contexto this");
console.log("Resultado:", dobrarMemoizado(3));
console.log("Resultado (cache):", dobrarMemoizado(3));

// Teste 5: Função mais pesada (fibonacci recursivo)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciMemoizado = memoize(fibonacci);

console.log("\nTeste 5: Fibonacci");
console.log("Fibonacci(10):", fibonacciMemoizado(10));
console.log("Fibonacci(10) (cache):", fibonacciMemoizado(10));