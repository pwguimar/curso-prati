console.log('Os 10 primeiros números da sequência de Fibonacci:');

let anterior = 0;
let atual = 1;

for (let i = 1; i <= 10; i++) {
    console.log(anterior);

    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}