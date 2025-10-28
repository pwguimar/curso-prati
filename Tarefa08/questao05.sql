-- Questão 5: Faturamento total por data, ordenado por data
SELECT 
    c.data,
    SUM(i.quantidade * ca.preco_unitario) AS faturamento_total
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio ca ON i.cod_cardapio = ca.cod_cardapio
GROUP BY c.data
ORDER BY c.data;