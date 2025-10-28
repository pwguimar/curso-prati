-- Questão 4: Comandas com mais de um tipo de café (valor total), ordenadas por data
SELECT 
    c.cod_comanda,
    c.data,
    c.mesa,
    c.nome_cliente,
    SUM(i.quantidade * ca.preco_unitario) AS valor_total_comanda
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio ca ON i.cod_cardapio = ca.cod_cardapio
GROUP BY c.cod_comanda, c.data, c.mesa, c.nome_cliente
HAVING COUNT(i.cod_cardapio) > 1
ORDER BY c.data;