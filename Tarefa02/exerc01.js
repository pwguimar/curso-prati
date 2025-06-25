function ehDataValida(dia, mes, ano) {
    // Verifica se os valores são números positivos
    if (dia <= 0 || mes <= 0 || ano <= 0) {
        return false;
    }

    // Verifica se o mês é válido (1-12)
    if (mes > 12) {
        return false;
    }

    // Array com o número de dias em cada mês
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica se é ano bissexto
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    // Ajusta fevereiro para ano bissexto
    if (ehBissexto) {
        diasPorMes[1] = 29;
    }

    // Verifica se o dia é válido para o mês
    if (dia > diasPorMes[mes - 1]) {
        return false;
    }

    return true;
}

// Exemplos de uso:
console.log(ehDataValida(29, 2, 2020)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2021)); // false (não é bissexto)
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(15, 13, 2023)); // false (mês inválido)
