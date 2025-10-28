-- Questão 2: Comandas com seus respectivos itens, incluindo preço total por café
-- Ordenado por data, código da comanda e nome do café
SELECT 
    c.cod_comanda,
    c.data,
    c.mesa,
    c.nome_cliente,
    ca.nome_cafe,
    ca.descricao,
    i.quantidade,
    ca.preco_unitario,
    (i.quantidade * ca.preco_unitario) AS preco_total_cafe
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio ca ON i.cod_cardapio = ca.cod_cardapio
ORDER BY c.data, c.cod_comanda, ca.nome_cafe;